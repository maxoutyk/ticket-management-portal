import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { sendEmail, emailTemplates } from "@/lib/email";

// GET a single ticket by ID
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
        comments: {
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
        },
        attachments: true,
      },
    });
    
    if (!ticket) {
      return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
    }
    
    // Check if the user is authorized to view this ticket
    if (user.role !== "ADMIN" && user.role !== "EMPLOYEE" && ticket.creatorId !== user.id) {
      return NextResponse.json({ error: "Not authorized to view this ticket" }, { status: 403 });
    }
    
    return NextResponse.json(ticket);
  } catch (error) {
    console.error("Error fetching ticket:", error);
    return NextResponse.json(
      { error: "Failed to fetch ticket details" },
      { status: 500 }
    );
  }
}

// PATCH (update) a ticket
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const body = await request.json();
    const { status, priority, assigneeId } = body;
    
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
    
    // Check permissions for update
    const canUpdateStatus = user.role === "ADMIN" || user.role === "EMPLOYEE";
    const canAssign = user.role === "ADMIN";
    
    if (!canUpdateStatus && status) {
      return NextResponse.json(
        { error: "Not authorized to update ticket status" },
        { status: 403 }
      );
    }
    
    if (!canAssign && assigneeId) {
      return NextResponse.json(
        { error: "Not authorized to assign tickets" },
        { status: 403 }
      );
    }
    
    // Prepare update data
    const updateData: any = {};
    
    if (status) {
      updateData.status = status;
      // Set resolvedAt when status changes to RESOLVED or CLOSED
      if ((status === "RESOLVED" || status === "CLOSED") && !ticket.resolvedAt) {
        updateData.resolvedAt = new Date();
      }
      // Clear resolvedAt if status changes back to OPEN or IN_PROGRESS
      if ((status === "OPEN" || status === "IN_PROGRESS") && ticket.resolvedAt) {
        updateData.resolvedAt = null;
      }
    }
    if (priority) updateData.priority = priority;
    if (assigneeId) updateData.assigneeId = assigneeId;
    
    // Update the ticket
    const updatedTicket = await prisma.ticket.update({
      where: { id },
      data: updateData,
      include: {
        assignedTo: true,
        createdBy: true,
        comments: {
          include: {
            user: true,
            attachments: true,
          }
        },
        attachments: true,
      },
    });
    
    // If a ticket was assigned to someone, send them an email notification
    if (assigneeId && assigneeId !== ticket.assigneeId) {
      try {
        const assignedUser = await prisma.user.findUnique({
          where: { id: assigneeId },
        });
        
        if (assignedUser) {
          const emailContent = emailTemplates.ticketAssigned({
            id: ticket.ticketNumber || ticket.id,
            title: ticket.title,
            assignerName: user.name,
          });
          
          await sendEmail({
            to: assignedUser.email,
            subject: emailContent.subject,
            text: emailContent.text,
            html: emailContent.html,
          });
        }
      } catch (emailError) {
        // Log the error but don't fail the request
        console.error("Error sending assignment notification:", emailError);
      }
    }
    
    return NextResponse.json(updatedTicket);
  } catch (error) {
    console.error("Error updating ticket:", error);
    return NextResponse.json(
      { error: "Failed to update ticket" },
      { status: 500 }
    );
  }
} 