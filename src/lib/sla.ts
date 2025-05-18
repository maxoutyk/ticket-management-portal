import { prisma } from "./prisma";

// Enum for priorities, matching the schema
type Priority = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

/**
 * Get appropriate SLA policy for a ticket based on priority and user's organization
 */
export async function getSlaPolicyForTicket(priority: Priority, ticketId: string) {
  // Get the ticket and its creator's organization
  const ticket = await prisma.ticket.findUnique({
    where: { id: ticketId },
    include: {
      createdBy: {
        select: {
          organizationId: true
        }
      }
    }
  });

  if (!ticket) {
    console.log(`Ticket not found: ${ticketId}`);
    return null;
  }
  
  const organizationId = ticket.createdBy.organizationId;

  // First try to find an organization-specific policy
  if (organizationId) {
    const orgPolicy = await prisma.slaPolicy.findFirst({
      where: {
        priorityLevel: priority,
        active: true,
        organizationId,
      },
    });

    if (orgPolicy) {
      return orgPolicy;
    }
  }

  // If no organization-specific policy is found, look for a global policy
  const globalPolicy = await prisma.slaPolicy.findFirst({
    where: {
      priorityLevel: priority,
      active: true,
      organizationId: null,
    },
  });

  // If no policy is found for this priority level, try the MEDIUM priority as fallback
  if (!globalPolicy && priority !== "MEDIUM") {
    return prisma.slaPolicy.findFirst({
      where: {
        priorityLevel: "MEDIUM",
        active: true,
        organizationId: organizationId || null,
      },
    });
  }

  return globalPolicy;
}

/**
 * Calculate SLA deadlines for a ticket
 */
export async function calculateSlaDeadlines(ticketId: string, priority: Priority) {
  // Get the appropriate SLA policy
  const policy = await getSlaPolicyForTicket(priority, ticketId);
  
  if (!policy) {
    console.log(`No active SLA policy found for priority ${priority}`);
    return null;
  }

  // Get priority multipliers
  const multiplier = await prisma.slaPriorityMultiplier.findUnique({
    where: {
      priority: priority,
    },
  });

  // Default multiplier is 1.0 if none is found
  const priorityMultiplier = multiplier ? multiplier.multiplier : 1.0;

  // Calculate response and resolution deadlines
  const now = new Date();
  
  // Apply priority multiplier to the hours
  const responseHours = policy.responseTimeHours * priorityMultiplier;
  const resolutionHours = policy.resolutionTimeHours * priorityMultiplier;
  
  // Calculate deadline dates
  const responseDeadline = new Date(now.getTime() + responseHours * 60 * 60 * 1000);
  const resolutionDeadline = new Date(now.getTime() + resolutionHours * 60 * 60 * 1000);

  // Update the ticket with SLA information
  await prisma.ticket.update({
    where: {
      id: ticketId,
    },
    data: {
      slaId: policy.id,
      responseDeadline,
      resolutionDeadline,
      slaBreached: false,
    },
  });

  return {
    policyId: policy.id,
    responseDeadline,
    resolutionDeadline,
  };
}

/**
 * Check if an SLA is breached for a ticket
 */
export async function checkSlaBreached(ticketId: string) {
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: ticketId,
    },
    select: {
      status: true,
      responseDeadline: true,
      resolutionDeadline: true,
      respondedAt: true,
      resolvedAt: true,
      slaBreached: true,
    },
  });

  if (!ticket) return false;

  // Current time
  const now = new Date();
  let isBreached = false;

  // If the ticket hasn't been responded to and the response deadline has passed
  if (!ticket.respondedAt && ticket.responseDeadline && now > ticket.responseDeadline) {
    isBreached = true;
  }

  // If the ticket isn't resolved and the resolution deadline has passed
  if (
    !ticket.resolvedAt &&
    ticket.status !== "RESOLVED" &&
    ticket.status !== "CLOSED" &&
    ticket.resolutionDeadline &&
    now > ticket.resolutionDeadline
  ) {
    isBreached = true;
  }

  // Update the ticket if breach status changed
  if (isBreached !== ticket.slaBreached) {
    await prisma.ticket.update({
      where: {
        id: ticketId,
      },
      data: {
        slaBreached: isBreached,
      },
    });
  }

  return isBreached;
}

/**
 * Mark a ticket as responded to for SLA tracking
 */
export async function markTicketResponded(ticketId: string) {
  const now = new Date();
  
  await prisma.ticket.update({
    where: {
      id: ticketId,
    },
    data: {
      respondedAt: now,
    },
  });
}

/**
 * Mark a ticket as resolved for SLA tracking
 */
export async function markTicketResolved(ticketId: string) {
  const now = new Date();
  
  await prisma.ticket.update({
    where: {
      id: ticketId,
    },
    data: {
      resolvedAt: now,
    },
  });
}

/**
 * Initialize SLA tracking for a new ticket
 */
export async function initializeTicketSla(ticketId: string, priority: Priority) {
  return calculateSlaDeadlines(ticketId, priority);
}

/**
 * Get remaining time for SLA in a human-readable format
 */
export function getSlaRemainingTime(deadline: Date | null): string {
  if (!deadline) return "No deadline";
  
  const now = new Date();
  const diffMs = deadline.getTime() - now.getTime();
  
  // If deadline has passed
  if (diffMs <= 0) {
    return "Overdue";
  }
  
  const diffSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(diffSeconds / 86400);
  const hours = Math.floor((diffSeconds % 86400) / 3600);
  const minutes = Math.floor((diffSeconds % 3600) / 60);
  
  if (days > 0) {
    return `${days}d ${hours}h remaining`;
  }
  
  if (hours > 0) {
    return `${hours}h ${minutes}m remaining`;
  }
  
  return `${minutes}m remaining`;
} 