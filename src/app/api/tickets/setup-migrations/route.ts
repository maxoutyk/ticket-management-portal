import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { generateTicketNumber } from "@/lib/ticketUtils";

export async function POST() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    // Check if user is admin
    if (session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    
    // Get all tickets without a ticket number
    const tickets = await prisma.ticket.findMany({
      where: { ticketNumber: null },
    });
    
    // Update each ticket with a new ticket number
    const updatedTickets = [];
    for (const ticket of tickets) {
      const ticketNumber = await generateTicketNumber();
      const updatedTicket = await prisma.ticket.update({
        where: { id: ticket.id },
        data: { ticketNumber },
      });
      updatedTickets.push({
        id: updatedTicket.id,
        ticketNumber: updatedTicket.ticketNumber,
      });
    }
    
    return NextResponse.json({ 
      success: true, 
      message: `Updated ${updatedTickets.length} tickets with new ticket numbers`,
      updatedTickets
    });
  } catch (error) {
    console.error("Error migrating ticket numbers:", error);
    return NextResponse.json(
      { error: "Failed to migrate ticket numbers" },
      { status: 500 }
    );
  }
} 