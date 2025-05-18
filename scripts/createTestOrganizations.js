const { PrismaClient } = require('../src/generated/prisma');
const prisma = new PrismaClient();

async function createTestOrganizations() {
  const organizations = [
    {
      name: 'Mumbai Customer',
      logo: null,
    },
    {
      name: 'Delhi Customer',
      logo: null,
    },
    {
      name: 'Bangalore Customer',
      logo: null,
    },
    {
      name: 'Kolkata Customer',
      logo: null,
    },
    {
      name: 'Chennai Customer',
      logo: null,
    }
  ];

  try {
    console.log('Creating test organizations...');
    
    for (const org of organizations) {
      const createdOrg = await prisma.organization.create({
        data: org
      });
      console.log(`Created organization: ${createdOrg.name} (${createdOrg.id})`);
    }
    
    console.log('Successfully created test organizations');
  } catch (error) {
    console.error('Error creating test organizations:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createTestOrganizations(); 