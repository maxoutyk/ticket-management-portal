import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, organizationName } = body;

    // Validate input
    if (!name || !email || !password || !organizationName) {
      return NextResponse.json(
        { error: "Username, email, password, and organization name are required" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Password length validation
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    try {
      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (existingUser) {
        return NextResponse.json(
          { error: "User with this email already exists" },
          { status: 409 }
        );
      }

      // Hash password
      const hashedPassword = await hash(password, 10);

      // Create user, organization, and contact person in a transaction
      const result = await prisma.$transaction(async (tx) => {
        // Create organization first
        const organization = await tx.organization.create({
          data: {
            name: organizationName,
          }
        });

        // Create user associated with the organization
        const user = await tx.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
            role: "USER", // Default role
            organizationId: organization.id,
          },
        });
        
        // Create a default contact person using the user's information
        const contactPerson = await tx.contactPerson.create({
          data: {
            name,
            email,
            phoneNumber: "", // Can be updated later
            organizationId: organization.id,
          }
        });

        return { user, organization, contactPerson };
      });

      // Return user without password
      const { password: _, ...userWithoutPassword } = result.user;
      return NextResponse.json(
        { 
          user: userWithoutPassword,
          organization: result.organization,
          message: "User created successfully" 
        }, 
        { status: 201 }
      );
    } catch (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Error creating user in database" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "An error occurred during registration" },
      { status: 500 }
    );
  }
} 