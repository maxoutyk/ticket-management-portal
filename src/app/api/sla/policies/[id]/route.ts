import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import { authOptions } from "../../../auth/[...nextauth]/route";

// GET a specific SLA policy
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Check authentication and authorization
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { id } = params;

    const policy = await prisma.slaPolicy.findUnique({
      where: { id },
    });

    if (!policy) {
      return NextResponse.json(
        { error: "SLA policy not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(policy);
  } catch (error) {
    console.error("Error fetching SLA policy:", error);
    return NextResponse.json(
      { error: "Failed to fetch SLA policy" },
      { status: 500 }
    );
  }
}

// PUT/UPDATE a specific SLA policy
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Check authentication and authorization
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { id } = params;
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

    // Check if policy exists
    const existingPolicy = await prisma.slaPolicy.findUnique({
      where: { id },
    });

    if (!existingPolicy) {
      return NextResponse.json(
        { error: "SLA policy not found" },
        { status: 404 }
      );
    }

    // Update the SLA policy
    const updatedPolicy = await prisma.slaPolicy.update({
      where: { id },
      data: {
        name: body.name,
        description: body.description || null,
        responseTimeHours: body.responseTimeHours,
        resolutionTimeHours: body.resolutionTimeHours,
        active: body.active,
        priorityLevel: body.priorityLevel,
      },
    });

    return NextResponse.json(updatedPolicy);
  } catch (error) {
    console.error("Error updating SLA policy:", error);
    return NextResponse.json(
      { error: "Failed to update SLA policy" },
      { status: 500 }
    );
  }
}

// DELETE a specific SLA policy
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Check authentication and authorization
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { id } = params;

    // Check if policy exists
    const existingPolicy = await prisma.slaPolicy.findUnique({
      where: { id },
    });

    if (!existingPolicy) {
      return NextResponse.json(
        { error: "SLA policy not found" },
        { status: 404 }
      );
    }

    // Check if policy is in use by any tickets
    const ticketsUsingPolicy = await prisma.ticket.count({
      where: { slaId: id },
    });

    if (ticketsUsingPolicy > 0) {
      return NextResponse.json(
        {
          error: "Cannot delete policy as it is being used by existing tickets",
        },
        { status: 400 }
      );
    }

    // Delete the SLA policy
    await prisma.slaPolicy.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "SLA policy deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting SLA policy:", error);
    return NextResponse.json(
      { error: "Failed to delete SLA policy" },
      { status: 500 }
    );
  }
} 