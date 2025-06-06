import { PrismaClient } from '../generated/prisma'

// For PrismaClient instance to be shared across hot reloads in development
// See: https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
const prismaClientSingleton = () => {
  try {
    const client = new PrismaClient({
      log: ['query', 'error', 'warn'],
    });
    
    // Test the connection
    client.$connect();
    
    return client;
  } catch (error) {
    console.error('Failed to initialize Prisma client:', error);
    throw error;
  }
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
  
  // Log when Prisma client is initialized
  console.log('Prisma Client initialized');
} 