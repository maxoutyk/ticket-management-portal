import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

// GET business hours
export async function GET(request: Request) {
  try {
    // Check authentication and authorization
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Business hours can be viewed by all authenticated users
    const businessHours = await prisma.slaBusinessHours.findMany({
      orderBy: {
        dayOfWeek: "asc",
      },
    });

    return NextResponse.json(businessHours);
  } catch (error) {
    console.error("Error fetching business hours:", error);
    return NextResponse.json(
      { error: "Failed to fetch business hours" },
      { status: 500 }
    );
  }
}

// PUT/UPDATE business hours - Only admins can update
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

    // Validate the business hours data
    if (!Array.isArray(body)) {
      return NextResponse.json(
        { error: "Invalid business hours data format" },
        { status: 400 }
      );
    }

    // Clear existing business hours
    await prisma.slaBusinessHours.deleteMany({});

    // Create new business hours
    const results = [];
    for (const hour of body) {
      const businessHour = await prisma.slaBusinessHours.create({
        data: {
          dayOfWeek: hour.dayOfWeek,
          startHour: hour.startHour,
          startMinute: hour.startMinute,
          endHour: hour.endHour,
          endMinute: hour.endMinute,
          isWorkDay: hour.isWorkDay,
        },
      });
      results.push(businessHour);
    }

    return NextResponse.json(results);
  } catch (error) {
    console.error("Error updating business hours:", error);
    return NextResponse.json(
      { error: "Failed to update business hours" },
      { status: 500 }
    );
  }
} 