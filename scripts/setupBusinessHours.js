const { PrismaClient } = require('../src/generated/prisma');
const prisma = new PrismaClient();

async function setupBusinessHours() {
  try {
    console.log('Setting up standard business hours for SLA calculations...');
    
    // Delete existing business hours to start fresh
    await prisma.slaBusinessHours.deleteMany({});
    console.log('Cleared existing business hours entries');
    
    // Define standard business hours (9 AM to 6 PM, Monday to Friday)
    const businessHours = [
      // Sunday - not a work day
      {
        dayOfWeek: 0,  // Sunday
        startHour: 0,
        startMinute: 0,
        endHour: 0,
        endMinute: 0,
        isWorkDay: false
      },
      // Monday - 9:00 AM to 6:00 PM
      {
        dayOfWeek: 1,  // Monday
        startHour: 9,
        startMinute: 0,
        endHour: 18,
        endMinute: 0,
        isWorkDay: true
      },
      // Tuesday - 9:00 AM to 6:00 PM
      {
        dayOfWeek: 2,  // Tuesday
        startHour: 9,
        startMinute: 0,
        endHour: 18,
        endMinute: 0,
        isWorkDay: true
      },
      // Wednesday - 9:00 AM to 6:00 PM
      {
        dayOfWeek: 3,  // Wednesday
        startHour: 9,
        startMinute: 0,
        endHour: 18,
        endMinute: 0,
        isWorkDay: true
      },
      // Thursday - 9:00 AM to 6:00 PM
      {
        dayOfWeek: 4,  // Thursday
        startHour: 9,
        startMinute: 0,
        endHour: 18,
        endMinute: 0,
        isWorkDay: true
      },
      // Friday - 9:00 AM to 6:00 PM
      {
        dayOfWeek: 5,  // Friday
        startHour: 9,
        startMinute: 0,
        endHour: 18,
        endMinute: 0,
        isWorkDay: true
      },
      // Saturday - 9:00 AM to 1:00 PM (half day)
      {
        dayOfWeek: 6,  // Saturday
        startHour: 9,
        startMinute: 0,
        endHour: 13,
        endMinute: 0,
        isWorkDay: true
      }
    ];
    
    // Create business hours entries
    for (const hours of businessHours) {
      await prisma.slaBusinessHours.create({
        data: hours
      });
      
      if (hours.isWorkDay) {
        console.log(`Set up business hours for day ${hours.dayOfWeek}: ${hours.startHour}:${hours.startMinute.toString().padStart(2, '0')} to ${hours.endHour}:${hours.endMinute.toString().padStart(2, '0')}`);
      } else {
        console.log(`Set up day ${hours.dayOfWeek} as non-working day`);
      }
    }
    
    console.log('Successfully set up all business hours for SLA calculations');
  } catch (error) {
    console.error('Error setting up business hours:', error);
  } finally {
    await prisma.$disconnect();
  }
}

setupBusinessHours(); 