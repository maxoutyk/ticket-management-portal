import { prisma } from './prisma';

/**
 * Generates a unique ticket number in the format IG-YYYYMMDD-XXXX
 * where XXXX is a sequential number starting from 0001 each day
 */
export async function generateTicketNumber(): Promise<string> {
  // Get current date in YYYYMMDD format
  const today = new Date();
  const dateString = today.toISOString().slice(0, 10).replace(/-/g, '');
  
  // Find or create a counter for today
  const counter = await prisma.ticketCounter.upsert({
    where: { date: dateString },
    update: { counter: { increment: 1 } },
    create: { date: dateString, counter: 1 },
  });
  
  // Format the counter as a 4-digit number with leading zeros
  const sequentialNumber = counter.counter.toString().padStart(4, '0');
  
  // Create the ticket number in the format IG-YYYYMMDD-XXXX
  const ticketNumber = `IG-${dateString}-${sequentialNumber}`;
  
  return ticketNumber;
}

/**
 * Updates existing tickets without a ticket number
 * This is a one-time migration helper function
 */
export async function updateExistingTicketsWithNumbers(): Promise<void> {
  // Get all tickets without a ticket number
  const tickets = await prisma.ticket.findMany({
    where: { ticketNumber: null },
  });
  
  // Update each ticket with a new ticket number
  for (const ticket of tickets) {
    const ticketNumber = await generateTicketNumber();
    await prisma.ticket.update({
      where: { id: ticket.id },
      data: { ticketNumber },
    });
  }
} 