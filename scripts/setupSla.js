const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

async function runScript(scriptName) {
  console.log(`\n🚀 Running ${scriptName}...`);
  try {
    const { stdout, stderr } = await execAsync(`node scripts/${scriptName}.js`);
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
    console.log(`✅ Completed ${scriptName} successfully\n`);
    return true;
  } catch (error) {
    console.error(`❌ Error running ${scriptName}:`, error.message);
    return false;
  }
}

async function setupSla() {
  console.log('================================================');
  console.log('🔧 Setting up SLA system for ticket management');
  console.log('================================================\n');
  
  // Step 1: Create test organizations
  const orgSuccess = await runScript('createTestOrganizations');
  if (!orgSuccess) {
    console.error('Failed to create test organizations. Aborting setup.');
    return;
  }
  
  // Step 2: Create global SLA policies
  const globalSuccess = await runScript('createGlobalSlaPolicies');
  if (!globalSuccess) {
    console.error('Failed to create global SLA policies. Aborting setup.');
    return;
  }
  
  // Step 3: Create regional SLA policies
  const regionalSuccess = await runScript('createRegionalSlaPolicies');
  if (!regionalSuccess) {
    console.error('Failed to create regional SLA policies. Aborting setup.');
    return;
  }
  
  // Step 4: Set up business hours
  const hoursSuccess = await runScript('setupBusinessHours');
  if (!hoursSuccess) {
    console.error('Failed to set up business hours. Aborting setup.');
    return;
  }
  
  console.log('================================================');
  console.log('✅ SLA system setup completed successfully! ✅');
  console.log('================================================');
  console.log('\nYou can now manage SLA policies in the admin dashboard.');
}

setupSla(); 