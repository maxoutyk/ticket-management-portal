import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// GET all employees (admin only)
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const user = await prisma.user.findUnique({
      where: { email: session.user.email as string },
    });
    
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Not authorized to view employees" }, { status: 403 });
    }
    
    // Get all users with EMPLOYEE role
    const employees = await prisma.user.findMany({
      where: {
        role: "EMPLOYEE"
      },
      select: {
        id: true,
        name: true,
        email: true,
        _count: {
          select: {
            assignedTickets: true, // Count of tickets assigned to the employee
          },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });
    
    // Format the response to include assigned ticket count
    const formattedEmployees = employees.map((employee) => ({
      id: employee.id,
      name: employee.name,
      email: employee.email,
      assignedTicketCount: employee._count.assignedTickets,
    }));
    
    return NextResponse.json(formattedEmployees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    return NextResponse.json(
      { error: "Failed to fetch employees" },
      { status: 500 }
    );
  }
} 