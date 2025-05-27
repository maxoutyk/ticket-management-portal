import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { calculateResolutionMetrics } from "@/lib/ticketMetrics";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const ticket = await prisma.ticket.findUnique({
      where: { id },
      include: {
        createdBy: {
          include: {
            organization: true
          }
        },
        slaPolicy: true,
      }
    });
    
    if (!ticket) {
      return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
    }

    // Calculate resolution metrics
    const metrics = await calculateResolutionMetrics(ticket);
    
    return NextResponse.json(metrics);
  } catch (error) {
    console.error("Error calculating resolution metrics:", error);
    return NextResponse.json(
      { error: "Failed to calculate resolution metrics" },
      { status: 500 }
    );
  }
} 