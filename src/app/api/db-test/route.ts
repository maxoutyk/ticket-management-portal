import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Test database connection
    const testConnection = await prisma.$queryRaw`SELECT 1 as result`;
    
    return NextResponse.json({ 
      status: "Database connection successful", 
      test: testConnection 
    });
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      { error: "Database connection failed", details: error },
      { status: 500 }
    );
  }
} 