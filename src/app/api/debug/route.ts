import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Get all users and their roles
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    // Get the database schema for the Role enum
    const roleEnumInfo = await prisma.$queryRaw`
      SELECT 
        t.typname AS enum_name,
        e.enumlabel AS enum_value
      FROM 
        pg_type t 
        JOIN pg_enum e ON t.oid = e.enumtypid 
        JOIN pg_catalog.pg_namespace n ON n.oid = t.typnamespace
      WHERE 
        t.typname = 'role'
    `;

    return NextResponse.json({ users, roleEnumInfo });
  } catch (error) {
    console.error("Debug error:", error);
    return NextResponse.json({ error: "Failed to get debug info" }, { status: 500 });
  }
} 