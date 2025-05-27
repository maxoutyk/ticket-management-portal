const { PrismaClient } = require('@prisma/client');
const { hash } = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  try {
    // Create admin user
    const adminPassword = await hash('admin123', 10);
    const admin = await prisma.user.upsert({
      where: { email: 'admin@example.com' },
      update: {},
      create: {
        email: 'admin@example.com',
        name: 'Admin User',
        password: adminPassword,
        role: 'ADMIN',
        twoFactorEnabled: false,
      },
    });
    console.log('Created admin user:', admin.email);

    // Create employee user
    const employeePassword = await hash('employee123', 10);
    const employee = await prisma.user.upsert({
      where: { email: 'employee@example.com' },
      update: {},
      create: {
        email: 'employee@example.com',
        name: 'Employee User',
        password: employeePassword,
        role: 'EMPLOYEE',
        twoFactorEnabled: false,
      },
    });
    console.log('Created employee user:', employee.email);

    // Create an organization
    const organization = await prisma.organization.create({
      data: {
        name: 'Test Organization',
        logo: 'https://example.com/logo.png',
      },
    });
    console.log('Created organization:', organization.name);

    // Create regular user with organization
    const userPassword = await hash('user123', 10);
    const user = await prisma.user.upsert({
      where: { email: 'user@example.com' },
      update: {},
      create: {
        email: 'user@example.com',
        name: 'Regular User',
        password: userPassword,
        role: 'USER',
        twoFactorEnabled: false,
        organizationId: organization.id,
      },
    });
    console.log('Created regular user:', user.email);

    // Create contact persons for the organization
    const contactPerson = await prisma.contactPerson.create({
      data: {
        name: 'Contact Person',
        email: 'contact@example.com',
        phoneNumber: '+1234567890',
        organizationId: organization.id,
      },
    });
    console.log('Created contact person:', contactPerson.name);

    // Create SLA policies
    const slaPolicies = await Promise.all([
      prisma.slaPolicy.create({
        data: {
          name: 'Critical Priority SLA',
          description: 'SLA for critical priority tickets',
          responseTimeHours: 1,
          resolutionTimeHours: 4,
          active: true,
          priorityLevel: 'CRITICAL',
          organizationId: organization.id,
        },
      }),
      prisma.slaPolicy.create({
        data: {
          name: 'High Priority SLA',
          description: 'SLA for high priority tickets',
          responseTimeHours: 2,
          resolutionTimeHours: 8,
          active: true,
          priorityLevel: 'HIGH',
        },
      }),
      prisma.slaPolicy.create({
        data: {
          name: 'Medium Priority SLA',
          description: 'SLA for medium priority tickets',
          responseTimeHours: 4,
          resolutionTimeHours: 24,
          active: true,
          priorityLevel: 'MEDIUM',
        },
      }),
      prisma.slaPolicy.create({
        data: {
          name: 'Low Priority SLA',
          description: 'SLA for low priority tickets',
          responseTimeHours: 8,
          resolutionTimeHours: 48,
          active: true,
          priorityLevel: 'LOW',
        },
      }),
    ]);
    console.log('Created SLA policies');

    // Create some sample tickets
    const tickets = await Promise.all([
      prisma.ticket.create({
        data: {
          title: 'Critical System Issue',
          description: 'Production system is down',
          status: 'OPEN',
          priority: 'CRITICAL',
          creatorId: user.id,
          assigneeId: employee.id,
          slaId: slaPolicies[0].id,
        },
      }),
      prisma.ticket.create({
        data: {
          title: 'Feature Request',
          description: 'New feature request for dashboard',
          status: 'IN_PROGRESS',
          priority: 'MEDIUM',
          creatorId: user.id,
          assigneeId: employee.id,
          slaId: slaPolicies[2].id,
        },
      }),
    ]);
    console.log('Created sample tickets');

    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 