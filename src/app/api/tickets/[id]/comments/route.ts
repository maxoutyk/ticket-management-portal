import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { markTicketResponded } from "@/lib/sla";

interface Params {
  params: Promise<{ id: string }>;
}

// GET comments for a ticket
export async function GET(request: Request, { params }: Params) {
  try {
    // Await params to satisfy Next.js 15+ requirement
    const resolvedParams = await Promise.resolve(params);
    const id = resolvedParams.id;
    
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
    
    const ticket = await prisma.ticket.findUnique({
      where: { id },
    });
    
    if (!ticket) {
      return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
    }
    
    // Check if the user is authorized to view this ticket's comments
    if (user.role !== "ADMIN" && user.role !== "EMPLOYEE" && ticket.creatorId !== user.id) {
      return NextResponse.json({ error: "Not authorized to view comments for this ticket" }, { status: 403 });
    }
    
    const comments = await prisma.comment.findMany({
      where: {
        ticketId: id,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
        attachments: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
    
    return NextResponse.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}

// POST a new comment
export async function POST(request: Request, { params }: Params) {
  try {
    // Await params to satisfy Next.js 15+ requirement
    const resolvedParams = await Promise.resolve(params);
    const id = resolvedParams.id;
    
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const body = await request.json();
    const { content } = body;
    
    if (!content) {
      return NextResponse.json(
        { error: "Comment content is required" },
        { status: 400 }
      );
    }
    
    const user = await prisma.user.findUnique({
      where: { email: session.user.email as string },
    });
    
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    
    const ticket = await prisma.ticket.findUnique({
      where: { id },
      include: {
        createdBy: {
          select: {
            id: true,
          },
        },
      },
    });
    
    if (!ticket) {
      return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
    }
    
    // Check if the user is authorized to comment on this ticket
    if (user.role !== "ADMIN" && user.role !== "EMPLOYEE" && ticket.creatorId !== user.id) {
      return NextResponse.json({ error: "Not authorized to comment on this ticket" }, { status: 403 });
    }
    
    const comment = await prisma.comment.create({
      data: {
        content,
        userId: user.id,
        ticketId: id,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
    });

    // If this is a staff member (ADMIN or EMPLOYEE) responding to a user's ticket,
    // mark the ticket as responded to for SLA tracking
    if (
      (user.role === "ADMIN" || user.role === "EMPLOYEE") && 
      user.id !== ticket.createdBy.id &&
      !ticket.respondedAt
    ) {
      try {
        await markTicketResponded(id);
        console.log(`Ticket ${id} marked as responded to for SLA tracking`);
      } catch (slaError) {
        console.error("Error updating SLA response time:", slaError);
        // Continue anyway, as this shouldn't block comment creation
      }
    }
    
    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    );
  }
} 