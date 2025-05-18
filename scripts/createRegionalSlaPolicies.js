const { PrismaClient } = require('../src/generated/prisma');
const prisma = new PrismaClient();

async function createRegionalSlaPolicies() {
  try {
    console.log('Creating regional SLA policies for Indian customers...');
    
    // First, get all organizations
    const organizations = await prisma.organization.findMany();
    
    if (organizations.length === 0) {
      console.log('No organizations found. Please run createTestOrganizations.js first.');
      return;
    }
    
    // Map to store organization ID by name for easier lookup
    const orgMap = {};
    organizations.forEach(org => {
      orgMap[org.name] = org.id;
    });
    
    // Define SLA policies with regional variations
    
    // Mumbai - Financial sector focus, priority on critical systems
    if (orgMap['Mumbai Customer']) {
      await createPoliciesForOrg('Mumbai Customer', orgMap['Mumbai Customer'], {
        critical: { response: 0.5, resolution: 2 },    // 30min response, 2hr resolution
        high: { response: 1, resolution: 4 },         // 1hr response, 4hr resolution
        medium: { response: 3, resolution: 16 },      // 3hr response, 16hr resolution
        low: { response: 8, resolution: 48 }          // 8hr response, 48hr resolution
      }, 'Financial sector SLAs with emphasis on rapid critical response');
    }
    
    // Delhi - Government sector, standardized response times
    if (orgMap['Delhi Customer']) {
      await createPoliciesForOrg('Delhi Customer', orgMap['Delhi Customer'], {
        critical: { response: 2, resolution: 8 },     // 2hr response, 8hr resolution
        high: { response: 4, resolution: 16 },        // 4hr response, 16hr resolution
        medium: { response: 8, resolution: 24 },      // 8hr response, 24hr resolution
        low: { response: 16, resolution: 72 }         // 16hr response, 72hr resolution
      }, 'Government sector SLAs with consistent service levels');
    }
    
    // Bangalore - Tech hub, focus on quick turnaround
    if (orgMap['Bangalore Customer']) {
      await createPoliciesForOrg('Bangalore Customer', orgMap['Bangalore Customer'], {
        critical: { response: 0.5, resolution: 3 },   // 30min response, 3hr resolution
        high: { response: 1, resolution: 6 },         // 1hr response, 6hr resolution
        medium: { response: 2, resolution: 12 },      // 2hr response, 12hr resolution
        low: { response: 4, resolution: 24 }          // 4hr response, 24hr resolution
      }, 'Tech sector SLAs optimized for rapid development cycles');
    }
    
    // Chennai - Manufacturing focus, extended business hours
    if (orgMap['Chennai Customer']) {
      await createPoliciesForOrg('Chennai Customer', orgMap['Chennai Customer'], {
        critical: { response: 1, resolution: 6 },     // 1hr response, 6hr resolution
        high: { response: 3, resolution: 12 },        // 3hr response, 12hr resolution
        medium: { response: 6, resolution: 36 },      // 6hr response, 36hr resolution
        low: { response: 12, resolution: 96 }         // 12hr response, 96hr resolution
      }, 'Manufacturing sector SLAs with extended hours support');
    }
    
    // Kolkata - Education sector, standard business hours
    if (orgMap['Kolkata Customer']) {
      await createPoliciesForOrg('Kolkata Customer', orgMap['Kolkata Customer'], {
        critical: { response: 2, resolution: 8 },     // 2hr response, 8hr resolution
        high: { response: 4, resolution: 24 },        // 4hr response, 24hr resolution
        medium: { response: 8, resolution: 48 },      // 8hr response, 48hr resolution
        low: { response: 24, resolution: 120 }        // 24hr response, 120hr resolution
      }, 'Education sector SLAs with emphasis on thorough resolution');
    }
    
    console.log('Successfully created all regional SLA policies');
  } catch (error) {
    console.error('Error creating regional SLA policies:', error);
  } finally {
    await prisma.$disconnect();
  }
}

async function createPoliciesForOrg(orgName, orgId, slaTimings, descPrefix) {
  console.log(`Creating policies for ${orgName}...`);
  
  // Create critical priority policy
  await prisma.slaPolicy.create({
    data: {
      name: `${orgName} Critical Support`,
      description: `${descPrefix} - Critical priority`,
      responseTimeHours: slaTimings.critical.response,
      resolutionTimeHours: slaTimings.critical.resolution,
      active: true,
      priorityLevel: 'CRITICAL',
      organizationId: orgId
    }
  });
  
  // Create high priority policy
  await prisma.slaPolicy.create({
    data: {
      name: `${orgName} High Priority Support`,
      description: `${descPrefix} - High priority`,
      responseTimeHours: slaTimings.high.response,
      resolutionTimeHours: slaTimings.high.resolution,
      active: true,
      priorityLevel: 'HIGH',
      organizationId: orgId
    }
  });
  
  // Create medium priority policy
  await prisma.slaPolicy.create({
    data: {
      name: `${orgName} Standard Support`,
      description: `${descPrefix} - Medium priority`,
      responseTimeHours: slaTimings.medium.response,
      resolutionTimeHours: slaTimings.medium.resolution,
      active: true,
      priorityLevel: 'MEDIUM',
      organizationId: orgId
    }
  });
  
  // Create low priority policy
  await prisma.slaPolicy.create({
    data: {
      name: `${orgName} Low Priority Support`,
      description: `${descPrefix} - Low priority`,
      responseTimeHours: slaTimings.low.response,
      resolutionTimeHours: slaTimings.low.resolution,
      active: true,
      priorityLevel: 'LOW',
      organizationId: orgId
    }
  });
  
  console.log(`Created all policies for ${orgName}`);
}

createRegionalSlaPolicies(); 