import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { sendEmail, emailTemplates } from "@/lib/email";
import { generateTicketNumber } from "@/lib/ticketUtils";
import { initializeTicketSla } from "@/lib/sla";

// GET tickets
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const isMyTickets = searchParams.get("my") === "true";

    const user = await prisma.user.findUnique({
      where: { email: session.user.email as string },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    let tickets = [];
    
    if (isMyTickets) {
      // For "My Tickets" page - only show tickets created by the user regardless of role
      tickets = await prisma.ticket.findMany({
        where: {
          creatorId: user.id,
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
    } else if (user.role === "ADMIN" || user.role === "EMPLOYEE") {
      // For "All Tickets" page - admins and employees can see all tickets
      tickets = await prisma.ticket.findMany({
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
    } else {
      // Regular users can only see their own tickets
      tickets = await prisma.ticket.findMany({
        where: {
          creatorId: user.id,
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
    }

    return NextResponse.json(tickets);
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return NextResponse.json(
      { error: "Failed to fetch tickets" },
      { status: 500 }
    );
  }
}

// POST a new ticket
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, description, priority } = body;

    // Validate input
    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email as string },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Generate a ticket number
    const ticketNumber = await generateTicketNumber();

    // Create ticket with the generated ticket number
    const ticket = await prisma.ticket.create({
      data: {
        ticketNumber,
        title,
        description,
        priority: priority || "MEDIUM",
        status: "OPEN",
        creatorId: user.id,
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
      },
    });

    // Initialize SLA tracking for the ticket
    try {
      await initializeTicketSla(ticket.id, ticket.priority);
      console.log(`SLA initialized for ticket ${ticket.id} with priority ${ticket.priority}`);
    } catch (slaError) {
      console.error("Error initializing SLA:", slaError);
      // Continue anyway, as this shouldn't block ticket creation
    }

    // Send email notification to admins
    try {
      const admins = await prisma.user.findMany({
        where: {
          role: "ADMIN",
        },
      });

      for (const admin of admins) {
        const emailContent = emailTemplates.newTicket({
          id: ticket.ticketNumber || ticket.id, // Use ticket number if available, fall back to ID
          title: ticket.title,
          creatorName: user.name,
          priority: ticket.priority,
        });
        
        await sendEmail({
          to: admin.email,
          subject: emailContent.subject,
          text: emailContent.text,
          html: emailContent.html,
        });
      }
    } catch (emailError) {
      // Log the error but don't fail the request
      console.error("Error sending admin notification:", emailError);
    }

    return NextResponse.json(ticket, { status: 201 });
  } catch (error) {
    console.error("Error creating ticket:", error);
    return NextResponse.json(
      { error: "Failed to create ticket" },
      { status: 500 }
    );
  }
} 