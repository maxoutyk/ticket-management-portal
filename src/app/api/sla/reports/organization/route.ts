import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { calculateBusinessHours } from "@/lib/ticketMetrics";

type TicketWithSLA = {
  id: string;
  slaPolicy: {
    id: string;
    name: string;
    active: boolean;
    organizationId: string | null;
    responseTimeHours: number;
    resolutionTimeHours: number;
    priorityLevel: string;
  } | null;
  respondedAt: Date | null;
  resolvedAt: Date | null;
  responseDeadline: Date | null;
  resolutionDeadline: Date | null;
  slaBreached: boolean;
  priority: string;
  createdAt: Date;
};

type OrganizationWithTickets = {
  id: string;
  name: string;
  tickets: TicketWithSLA[];
  slaPolicies: {
    id: string;
    active: boolean;
    priority: string;
  }[];
};

export async function GET(request: Request) {
  try {
    // Check authentication and authorization
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Get query parameters for date range
    const url = new URL(request.url);
    const startDate = url.searchParams.get("startDate") 
      ? new Date(url.searchParams.get("startDate")!) 
      : new Date(new Date().setDate(new Date().getDate() - 30)); // Default to last 30 days
    const endDate = url.searchParams.get("endDate") 
      ? new Date(url.searchParams.get("endDate")!) 
      : new Date();

    // Get priority multipliers
    const priorityMultipliers = await prisma.slaPriorityMultiplier.findMany();
    const multiplierMap = priorityMultipliers.reduce((acc, curr) => {
      acc[curr.priority] = curr.multiplier;
      return acc;
    }, {} as Record<string, number>);

    // Get organizations with their tickets and SLA policies
    const organizations = await prisma.$queryRaw`
      WITH org_tickets AS (
        SELECT 
          o.id as org_id,
          o.name as org_name,
          t.id as ticket_id,
          t."createdAt",
          t."respondedAt",
          t."resolvedAt",
          t."responseDeadline",
          t."resolutionDeadline",
          t."slaBreached",
          t.priority as ticket_priority,
          COALESCE(
            org_sp.id,
            global_sp.id
          ) as effective_sla_id,
          COALESCE(
            org_sp.name,
            global_sp.name
          ) as effective_sla_name,
          COALESCE(
            org_sp.active,
            global_sp.active
          ) as effective_sla_active,
          COALESCE(
            org_sp."organizationId",
            global_sp."organizationId"
          ) as effective_sla_org_id,
          COALESCE(
            org_sp."responseTimeHours",
            global_sp."responseTimeHours"
          ) as effective_response_hours,
          COALESCE(
            org_sp."resolutionTimeHours",
            global_sp."resolutionTimeHours"
          ) as effective_resolution_hours,
          COALESCE(
            org_sp."priorityLevel",
            global_sp."priorityLevel"
          ) as effective_priority_level
        FROM "Organization" o
        LEFT JOIN "User" u ON u."organizationId" = o.id
        LEFT JOIN "Ticket" t ON t."creatorId" = u.id
          AND t."createdAt" >= ${startDate}
          AND t."createdAt" <= ${endDate}
        -- Try to find organization-specific SLA policy first
        LEFT JOIN "SlaPolicy" org_sp ON org_sp.id = t."slaId"
          AND org_sp."organizationId" = o.id
          AND org_sp.active = true
          AND org_sp."priorityLevel" = t.priority
        -- Fall back to global SLA policy if no org-specific policy exists
        LEFT JOIN "SlaPolicy" global_sp ON global_sp.id = t."slaId"
          AND global_sp."organizationId" IS NULL
          AND global_sp.active = true
          AND global_sp."priorityLevel" = t.priority
          AND org_sp.id IS NULL
      )
      SELECT 
        org_id as id,
        org_name as name,
        COALESCE(
          json_agg(
            CASE WHEN ticket_id IS NOT NULL THEN
              json_build_object(
                'id', ticket_id,
                'createdAt', "createdAt",
                'slaPolicy', CASE WHEN effective_sla_id IS NOT NULL THEN
                  json_build_object(
                    'id', effective_sla_id,
                    'name', effective_sla_name,
                    'active', effective_sla_active,
                    'organizationId', effective_sla_org_id,
                    'responseTimeHours', effective_response_hours,
                    'resolutionTimeHours', effective_resolution_hours,
                    'priorityLevel', effective_priority_level
                  )
                ELSE NULL END,
                'respondedAt', "respondedAt",
                'resolvedAt', "resolvedAt",
                'responseDeadline', "responseDeadline",
                'resolutionDeadline', "resolutionDeadline",
                'slaBreached', "slaBreached",
                'priority', ticket_priority
              )
            ELSE NULL END
          ) FILTER (WHERE ticket_id IS NOT NULL),
          '[]'
        ) as tickets,
        COALESCE(
          (
            SELECT json_agg(
              json_build_object(
                'id', sp.id,
                'active', sp.active,
                'priority', sp."priorityLevel"
              )
            )
            FROM (
              -- First get org-specific policies
              SELECT 
                id,
                active,
                "priorityLevel"
              FROM "SlaPolicy"
              WHERE "organizationId" = org_tickets.org_id
                AND active = true
              
              UNION ALL
              
              -- Then get global policies only for priority levels that don't have org-specific policies
              SELECT 
                global.id,
                global.active,
                global."priorityLevel"
              FROM "SlaPolicy" global
              WHERE global."organizationId" IS NULL
                AND global.active = true
                AND NOT EXISTS (
                  SELECT 1 
                  FROM "SlaPolicy" org_specific
                  WHERE org_specific."organizationId" = org_tickets.org_id
                    AND org_specific."priorityLevel" = global."priorityLevel"
                    AND org_specific.active = true
                )
            ) sp
          ),
          '[]'
        ) as "slaPolicies"
      FROM org_tickets
      GROUP BY org_id, org_name
    ` as OrganizationWithTickets[];

    // Calculate SLA metrics for each organization
    const reports = await Promise.all(organizations.map(async org => {
      const tickets = org.tickets || [];
      const totalTickets = tickets.length;
      
      // Count tickets that have an SLA policy assigned
      const ticketsWithSLA = tickets.filter(ticket => {
        // A ticket has SLA if it has a policy assigned (either org-specific or global)
        return ticket.slaPolicy !== null;
      });

      // Calculate breaches considering business hours and priority multipliers
      let ticketsWithResponseSLA = 0;
      let ticketsWithResolutionSLA = 0;
      let responseTimeBreaches = 0;
      let resolutionTimeBreaches = 0;

      for (const ticket of ticketsWithSLA) {
        if (!ticket.slaPolicy) continue;

        const multiplier = multiplierMap[ticket.priority] || 1.0;
        const targetResponseHours = ticket.slaPolicy.responseTimeHours * multiplier;
        const targetResolutionHours = ticket.slaPolicy.resolutionTimeHours * multiplier;

        // Response time compliance
        if (ticket.respondedAt) {
          ticketsWithResponseSLA++;
          const responseHours = await calculateBusinessHours(
            new Date(ticket.createdAt),
            new Date(ticket.respondedAt)
          );
          if (responseHours > targetResponseHours) {
            responseTimeBreaches++;
          }
        } else if (ticket.responseDeadline) {
          ticketsWithResponseSLA++;
          if (new Date() > new Date(ticket.responseDeadline)) {
            responseTimeBreaches++;
          }
        }

        // Resolution time compliance
        if (ticket.resolvedAt) {
          ticketsWithResolutionSLA++;
          const resolutionHours = await calculateBusinessHours(
            new Date(ticket.createdAt),
            new Date(ticket.resolvedAt)
          );
          if (resolutionHours > targetResolutionHours) {
            resolutionTimeBreaches++;
          }
        } else if (ticket.resolutionDeadline) {
          ticketsWithResolutionSLA++;
          if (new Date() > new Date(ticket.resolutionDeadline)) {
            resolutionTimeBreaches++;
          }
        }
      }

      // Calculate overall SLA breaches
      // A ticket breaches SLA if it breaches either response or resolution time
      const slaBreaches = responseTimeBreaches + resolutionTimeBreaches;

      // Calculate compliance rates
      const responseTimeComplianceRate = ticketsWithResponseSLA > 0
        ? (((ticketsWithResponseSLA - responseTimeBreaches) / ticketsWithResponseSLA) * 100).toFixed(2)
        : "100.00";

      const resolutionTimeComplianceRate = ticketsWithResolutionSLA > 0
        ? (((ticketsWithResolutionSLA - resolutionTimeBreaches) / ticketsWithResolutionSLA) * 100).toFixed(2)
        : "100.00";

      // Overall SLA compliance is the average of response and resolution compliance
      const totalSLATickets = ticketsWithResponseSLA + ticketsWithResolutionSLA;
      const slaComplianceRate = totalSLATickets > 0
        ? ((((ticketsWithResponseSLA - responseTimeBreaches) + (ticketsWithResolutionSLA - resolutionTimeBreaches)) / totalSLATickets) * 100).toFixed(2)
        : "100.00";

      return {
        id: org.id,
        name: org.name,
        metrics: {
          totalTickets,
          ticketsWithSLA: ticketsWithSLA.length,
          slaBreaches,
          responseTimeBreaches,
          resolutionTimeBreaches,
          slaComplianceRate,
          responseTimeComplianceRate,
          resolutionTimeComplianceRate
        },
        activePolicies: org.slaPolicies.filter(policy => policy.active).length
      };
    }));

    return NextResponse.json({
      reports,
      dateRange: {
        startDate,
        endDate
      }
    });
  } catch (error) {
    console.error("Error generating organization SLA reports:", error);
    return NextResponse.json(
      { error: "Failed to generate organization SLA reports" },
      { status: 500 }
    );
  }
} 