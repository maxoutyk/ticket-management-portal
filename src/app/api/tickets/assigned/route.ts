import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

// GET tickets assigned to current user
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email as string },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Ensure the user is an employee
    if (user.role !== "EMPLOYEE") {
      return NextResponse.json({ error: "Only employees can access assigned tickets" }, { status: 403 });
    }

    // Get tickets assigned to this employee
    const assignedTickets = await prisma.ticket.findMany({
      where: {
        assigneeId: user.id,
      },
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(assignedTickets);
  } catch (error) {
    console.error("Error fetching assigned tickets:", error);
    return NextResponse.json(
      { error: "Failed to fetch assigned tickets" },
      { status: 500 }
    );
  }
} 