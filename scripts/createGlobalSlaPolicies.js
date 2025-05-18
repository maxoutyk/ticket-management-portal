const { PrismaClient } = require('../src/generated/prisma');
const prisma = new PrismaClient();

async function createGlobalSlaPolicies() {
  // Define global SLA policies for software support
  const slaPolicies = [
    {
      name: 'Critical Software Issue',
      description: 'For critical system issues causing complete service outage or data loss',
      responseTimeHours: 1,      // 1 hour response time
      resolutionTimeHours: 4,    // 4 hour resolution time
      active: true,
      priorityLevel: 'CRITICAL',
      organizationId: null       // null for global policy
    },
    {
      name: 'High Priority Bug',
      description: 'For major functionality issues affecting core business operations',
      responseTimeHours: 2,      // 2 hours response time
      resolutionTimeHours: 8,    // 8 hours resolution time
      active: true,
      priorityLevel: 'HIGH',
      organizationId: null
    },
    {
      name: 'Standard Software Support',
      description: 'For general software issues with moderate impact on business',
      responseTimeHours: 4,      // 4 hours response time
      resolutionTimeHours: 24,   // 24 hours (1 day) resolution time
      active: true,
      priorityLevel: 'MEDIUM',
      organizationId: null
    },
    {
      name: 'Minor Feature Request',
      description: 'For minor issues and small enhancements with low business impact',
      responseTimeHours: 8,      // 8 hours (1 business day) response time
      resolutionTimeHours: 72,   // 72 hours (3 days) resolution time
      active: true,
      priorityLevel: 'LOW',
      organizationId: null
    }
  ];

  try {
    console.log('Creating global SLA policies for software support...');
    
    for (const policy of slaPolicies) {
      const createdPolicy = await prisma.slaPolicy.create({
        data: policy
      });
      console.log(`Created SLA policy: ${createdPolicy.name} (${createdPolicy.priorityLevel})`);
      console.log(`  Response: ${createdPolicy.responseTimeHours}h, Resolution: ${createdPolicy.resolutionTimeHours}h`);
    }
    
    // Now create some priority multipliers
    const priorityMultipliers = [
      { priority: 'CRITICAL', multiplier: 0.5 },  // Half the standard time for critical issues
      { priority: 'HIGH', multiplier: 0.75 },     // 75% of standard time for high priority
      { priority: 'MEDIUM', multiplier: 1.0 },    // Standard time for medium priority
      { priority: 'LOW', multiplier: 1.5 }        // 50% more time for low priority
    ];
    
    for (const multiplier of priorityMultipliers) {
      // First check if the priority multiplier already exists
      const existingMultiplier = await prisma.slaPriorityMultiplier.findUnique({
        where: { priority: multiplier.priority }
      });
      
      if (existingMultiplier) {
        // Update it if it exists
        await prisma.slaPriorityMultiplier.update({
          where: { priority: multiplier.priority },
          data: { multiplier: multiplier.multiplier }
        });
        console.log(`Updated priority multiplier for ${multiplier.priority}: ${multiplier.multiplier}`);
      } else {
        // Create it if it doesn't exist
        await prisma.slaPriorityMultiplier.create({
          data: multiplier
        });
        console.log(`Created priority multiplier for ${multiplier.priority}: ${multiplier.multiplier}`);
      }
    }
    
    console.log('Successfully created global SLA policies and priority multipliers');
  } catch (error) {
    console.error('Error creating SLA policies:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createGlobalSlaPolicies(); 