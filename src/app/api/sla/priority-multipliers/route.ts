import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// GET priority multipliers
export async function GET(request: Request) {
  try {
    // Check authentication and authorization
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Priority multipliers can be viewed by all authenticated users
    const multipliers = await prisma.slaPriorityMultiplier.findMany({
      orderBy: {
        priority: "asc",
      },
    });

    return NextResponse.json(multipliers);
  } catch (error) {
    console.error("Error fetching priority multipliers:", error);
    return NextResponse.json(
      { error: "Failed to fetch priority multipliers" },
      { status: 500 }
    );
  }
}

// PUT/UPDATE priority multipliers - Only admins can update
export async function PUT(request: Request) {
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

    // Validate the priority multipliers data
    if (!Array.isArray(body)) {
      return NextResponse.json(
        { error: "Invalid priority multipliers data format" },
        { status: 400 }
      );
    }

    // Update each multiplier
    const results = [];
    for (const multiplier of body) {
      // Check if multiplier already exists
      const existingMultiplier = await prisma.slaPriorityMultiplier.findUnique({
        where: { priority: multiplier.priority },
      });

      let result;
      if (existingMultiplier) {
        // Update existing multiplier
        result = await prisma.slaPriorityMultiplier.update({
          where: { priority: multiplier.priority },
          data: { multiplier: multiplier.multiplier },
        });
      } else {
        // Create new multiplier
        result = await prisma.slaPriorityMultiplier.create({
          data: {
            priority: multiplier.priority,
            multiplier: multiplier.multiplier,
          },
        });
      }
      results.push(result);
    }

    return NextResponse.json(results);
  } catch (error) {
    console.error("Error updating priority multipliers:", error);
    return NextResponse.json(
      { error: "Failed to update priority multipliers" },
      { status: 500 }
    );
  }
} 