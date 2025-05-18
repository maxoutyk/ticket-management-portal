import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";

export async function GET() {
  try {
    // Check if the employee user already exists
    const existingEmployee = await prisma.user.findUnique({
      where: {
        email: "employee@example.com",
      },
    });

    if (existingEmployee) {
      // If employee exists, update their role to make sure it's correct
      const updatedEmployee = await prisma.user.update({
        where: {
          email: "employee@example.com",
        },
        data: {
          role: "EMPLOYEE",
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      });
      
      return NextResponse.json({
        message: "Employee user updated",
        user: updatedEmployee,
      });
    }

    // Create the employee user if it doesn't exist
    const hashedPassword = await hash("password123", 10);
    const newEmployee = await prisma.user.create({
      data: {
        name: "Employee User",
        email: "employee@example.com",
        password: hashedPassword,
        role: "EMPLOYEE",
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    return NextResponse.json({
      message: "Employee user created",
      user: newEmployee,
    });
  } catch (error) {
    console.error("Setup error:", error);
    return NextResponse.json({ error: "Failed to setup EMPLOYEE user" }, { status: 500 });
  }
} 