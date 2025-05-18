import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import { authOptions } from "../../auth/[...nextauth]/route";

// GET all SLA policies
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

    // Get query parameters
    const url = new URL(request.url);
    const organizationId = url.searchParams.get("organizationId");

    // Build query
    const whereClause = organizationId 
      ? { organizationId } 
      : {};

    const policies = await prisma.slaPolicy.findMany({
      where: whereClause,
      include: {
        organization: {
          select: {
            id: true,
            name: true,
          }
        }
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(policies);
  } catch (error) {
    console.error("Error fetching SLA policies:", error);
    return NextResponse.json(
      { error: "Failed to fetch SLA policies" },
      { status: 500 }
    );
  }
}

// POST a new SLA policy
export async function POST(request: Request) {
  try {
    // Check authentication and authorization
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await request.json();

    // Validate the request body
    if (!body.name) {
      return NextResponse.json(
        { error: "Policy name is required" },
        { status: 400 }
      );
    }

    if (body.responseTimeHours < 0 || body.resolutionTimeHours < 0) {
      return NextResponse.json(
        { error: "Time values cannot be negative" },
        { status: 400 }
      );
    }

    // Create the SLA policy
    const policy = await prisma.slaPolicy.create({
      data: {
        name: body.name,
        description: body.description || null,
        responseTimeHours: body.responseTimeHours,
        resolutionTimeHours: body.resolutionTimeHours,
        active: body.active,
        priorityLevel: body.priorityLevel,
        organizationId: body.organizationId || null,
      },
      include: {
        organization: {
          select: {
            id: true,
            name: true,
          }
        }
      },
    });

    return NextResponse.json(policy, { status: 201 });
  } catch (error) {
    console.error("Error creating SLA policy:", error);
    return NextResponse.json(
      { error: "Failed to create SLA policy" },
      { status: 500 }
    );
  }
} 