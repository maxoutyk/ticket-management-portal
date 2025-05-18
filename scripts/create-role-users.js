const { PrismaClient } = require('../src/generated/prisma');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  try {
    // Create admin user
    const adminExists = await prisma.user.findUnique({
      where: {
        email: 'admin@example.com',
      },
    });

    if (!adminExists) {
      const adminPassword = await bcrypt.hash('admin123', 10);
      const admin = await prisma.user.create({
        data: {
          name: 'Admin User',
          email: 'admin@example.com',
          password: adminPassword,
          role: 'ADMIN',
        },
      });
      console.log('Admin user created successfully:', admin);
    } else {
      console.log('Admin user already exists');
    }

    // Create employee user
    const employeeExists = await prisma.user.findUnique({
      where: {
        email: 'employee@example.com',
      },
    });

    if (!employeeExists) {
      const employeePassword = await bcrypt.hash('employee123', 10);
      const employee = await prisma.user.create({
        data: {
          name: 'Employee User',
          email: 'employee@example.com',
          password: employeePassword,
          role: 'EMPLOYEE',
        },
      });
      console.log('Employee user created successfully:', employee);
    } else {
      console.log('Employee user already exists');
    }

    console.log('All test users created successfully');
  } catch (error) {
    console.error('Error creating test users:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 