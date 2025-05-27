'use server';

import { prisma } from '@/lib/prisma';
import type { Prisma, Priority } from '@/generated/prisma';

type Ticket = Prisma.TicketGetPayload<{
  include: {
    createdBy: {
      include: {
        organization: true
      }
    }
  }
}>;
type SlaBusinessHours = Prisma.SlaBusinessHoursGetPayload<{}>;

interface SlaMetrics {
  resolutionTimeHours: number | null;
  isWithinSla: boolean | null;
  slaTarget: number | null;
  breachScore: number | null; // Percentage over SLA (null if within SLA)
  breachTime: number | null;  // Hours over SLA (null if within SLA)
  status: 'UNRESOLVED' | 'RESOLVED' | 'RESOLVED_WITH_BREACH';
  policySource: 'ORGANIZATION' | 'GLOBAL' | null;
  policyName: string | null;
}

/**
 * Get the appropriate SLA policy for a ticket
 */
async function getSlaPolicy(ticket: Ticket, priority: Priority) {
  let policy = null;
  let policySource: 'ORGANIZATION' | 'GLOBAL' | null = null;
  
  // First, try to get organization-specific policy if the user belongs to an organization
  const organizationId = ticket.createdBy?.organization?.id;
  
  if (organizationId) {
    policy = await prisma.slaPolicy.findFirst({
      where: {
        organizationId: organizationId,
        priorityLevel: priority,
        active: true,
      },
      orderBy: {
        createdAt: 'desc', // Get the most recent active policy
      },
    });
    
    if (policy) {
      policySource = 'ORGANIZATION';
    }
  }
  
  // If no organization policy found, get global policy (where organizationId is null)
  if (!policy) {
    policy = await prisma.slaPolicy.findFirst({
      where: {
        organizationId: null,
        priorityLevel: priority,
        active: true,
      },
      orderBy: {
        createdAt: 'desc', // Get the most recent active policy
      },
    });
    
    if (policy) {
      policySource = 'GLOBAL';
    }
  }
  
  return { policy, policySource };
}

/**
 * Calculate the resolution time for a ticket in hours
 */
export async function calculateResolutionMetrics(ticket: Ticket, considerBusinessHours: boolean = true): Promise<SlaMetrics> {
  if (!ticket.resolvedAt) {
    return {
      resolutionTimeHours: null,
      isWithinSla: null,
      slaTarget: null,
      breachScore: null,
      breachTime: null,
      status: 'UNRESOLVED',
      policySource: null,
      policyName: null
    };
  }

  const createdAt = new Date(ticket.createdAt);
  const resolvedAt = new Date(ticket.resolvedAt);
  
  let resolutionTimeHours: number;
  
  if (considerBusinessHours) {
    resolutionTimeHours = await calculateBusinessHours(createdAt, resolvedAt);
  } else {
    // Simple calculation without business hours
    const diffMs = resolvedAt.getTime() - createdAt.getTime();
    resolutionTimeHours = diffMs / (1000 * 60 * 60); // Convert ms to hours
  }

  // Round to 2 decimal places
  resolutionTimeHours = Math.round(resolutionTimeHours * 100) / 100;

  // Get SLA policy and calculate targets
  const { policy, policySource } = await getSlaPolicy(ticket, ticket.priority);
  
  let slaTarget = null;
  let isWithinSla = null;
  let breachScore = null;
  let breachTime = null;
  let status: SlaMetrics['status'] = 'RESOLVED';
  
  if (policy) {
    // Get priority multiplier if exists
    const priorityMultiplier = await prisma.slaPriorityMultiplier.findUnique({
      where: { priority: ticket.priority }
    });

    slaTarget = policy.resolutionTimeHours * (priorityMultiplier?.multiplier || 1.0);
    isWithinSla = resolutionTimeHours <= slaTarget;

    if (!isWithinSla) {
      breachTime = Math.round((resolutionTimeHours - slaTarget) * 100) / 100;
      breachScore = Math.round((breachTime / slaTarget) * 100);
      status = 'RESOLVED_WITH_BREACH';
    }
  }

  return {
    resolutionTimeHours,
    isWithinSla,
    slaTarget,
    breachScore,
    breachTime,
    status,
    policySource,
    policyName: policy?.name || null
  };
}

/**
 * Calculate the number of business hours between two dates
 */
export async function calculateBusinessHours(startDate: Date, endDate: Date): Promise<number> {
  // Get business hours configuration
  const businessHours = await prisma.slaBusinessHours.findMany();
  
  if (businessHours.length === 0) {
    // If no business hours configured, fall back to simple calculation
    const diffMs = endDate.getTime() - startDate.getTime();
    return diffMs / (1000 * 60 * 60);
  }

  // If both start and end times are outside business hours on non-working days,
  // we should still count the actual time between them
  const startDayConfig = businessHours.find(bh => bh.dayOfWeek === startDate.getDay());
  const endDayConfig = businessHours.find(bh => bh.dayOfWeek === endDate.getDay());
  
  // Check if both days are non-working days
  if ((!startDayConfig?.isWorkDay && !endDayConfig?.isWorkDay) || businessHours.every(bh => !bh.isWorkDay)) {
    // If all days are non-working or both start and end are on non-working days,
    // calculate actual elapsed time
    const diffMs = endDate.getTime() - startDate.getTime();
    return diffMs / (1000 * 60 * 60);
  }

  let totalHours = 0;
  let currentDate = new Date(startDate);

  while (currentDate < endDate) {
    const dayOfWeek = currentDate.getDay();
    const dayConfig = businessHours.find(bh => bh.dayOfWeek === dayOfWeek);

    if (dayConfig?.isWorkDay) {
      // Calculate hours for this day
      const dayStart = new Date(currentDate);
      dayStart.setHours(dayConfig.startHour, dayConfig.startMinute, 0, 0);

      const dayEnd = new Date(currentDate);
      dayEnd.setHours(dayConfig.endHour, dayConfig.endMinute, 0, 0);

      // Handle if current time is within business hours
      const effectiveStart = currentDate > dayStart ? currentDate : dayStart;
      const effectiveEnd = endDate < dayEnd ? endDate : dayEnd;

      if (effectiveEnd > effectiveStart) {
        const hoursToAdd = (effectiveEnd.getTime() - effectiveStart.getTime()) / (1000 * 60 * 60);
        totalHours += hoursToAdd;
      }
    } else {
      // For non-working days, if this is the start or end date,
      // count actual time if both dates are on the same non-working day
      if (currentDate.toDateString() === startDate.toDateString() && 
          startDate.toDateString() === endDate.toDateString()) {
        const diffMs = endDate.getTime() - startDate.getTime();
        return diffMs / (1000 * 60 * 60);
      }
    }

    // Move to next day
    currentDate.setDate(currentDate.getDate() + 1);
    currentDate.setHours(0, 0, 0, 0);
  }

  // If total hours is 0 but we have actual time elapsed,
  // return the actual elapsed time since both events happened outside business hours
  if (totalHours === 0) {
    const diffMs = endDate.getTime() - startDate.getTime();
    return diffMs / (1000 * 60 * 60);
  }

  return totalHours;
} 