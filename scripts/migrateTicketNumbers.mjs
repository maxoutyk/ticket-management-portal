#!/usr/bin/env node

// To run this script:
// 1. Make sure you have run 'npx prisma generate'
// 2. Run 'node scripts/migrateTicketNumbers.mjs'

// Use dynamic import for CommonJS
async function main() {
  // Import PrismaClient
  const { PrismaClient } = await import('@prisma/client');
  const prisma = new PrismaClient();

  async function generateTicketNumber() {
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

  try {
    console.log('Starting migration of ticket numbers...');
    
    // Get all tickets without a ticket number
    const tickets = await prisma.ticket.findMany({
      where: { ticketNumber: null },
    });
    
    console.log(`Found ${tickets.length} tickets without ticket numbers`);
    
    // Update each ticket with a new ticket number
    for (const ticket of tickets) {
      const ticketNumber = await generateTicketNumber();
      await prisma.ticket.update({
        where: { id: ticket.id },
        data: { ticketNumber },
      });
      console.log(`Updated ticket ${ticket.id} with ticket number: ${ticketNumber}`);
    }
    
    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Error during migration:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch(e => {
  console.error(e);
  process.exit(1);
}); 