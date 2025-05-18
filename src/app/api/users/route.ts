import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { hash } from "bcrypt";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// GET all users (admin only)
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const user = await prisma.user.findUnique({
      where: { email: session.user.email as string },
    });
    
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Not authorized to view users" }, { status: 403 });
    }
    
    // Get all users with ticket counts and organization data
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        twoFactorEnabled: true,
        createdAt: true,
        updatedAt: true,
        organization: {
          select: {
            id: true,
            name: true,
            logo: true,
            contactPersons: {
              select: {
                id: true,
                name: true,
                email: true,
                phoneNumber: true
              }
            }
          }
        },
        _count: {
          select: {
            tickets: true, // Count of tickets created by the user
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    // Format the response to include ticket count and organization data
    const formattedUsers = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      twoFactorEnabled: user.twoFactorEnabled,
      createdAt: user.createdAt,
      ticketCount: user._count.tickets,
      organization: user.organization,
    }));
    
    return NextResponse.json(formattedUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

// POST (create) a new user
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const user = await prisma.user.findUnique({
      where: { email: session.user.email as string },
    });
    
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Not authorized to create users" }, { status: 403 });
    }
    
    const body = await request.json();
    const { 
      name, 
      email, 
      password, 
      role, 
      twoFactorEnabled,
      organization, 
      contactPersons 
    } = body;
    
    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }
    
    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }
    
    // Hash the password
    const hashedPassword = await hash(password, 10);
    
    // Create the user with optional organization and contact persons
    const newUser = await prisma.$transaction(async (tx) => {
      // Create organization if provided (for USER role)
      let orgId = null;
      if (role === "USER" && organization) {
        const newOrg = await tx.organization.create({
          data: {
            name: organization.name,
            logo: organization.logo || null,
          },
        });
        
        orgId = newOrg.id;
        
        // Create contact persons if provided
        if (contactPersons && contactPersons.length > 0) {
          await tx.contactPerson.createMany({
            data: contactPersons.map((contact: any) => ({
              name: contact.name,
              email: contact.email,
              phoneNumber: contact.phoneNumber,
              organizationId: newOrg.id,
            })),
          });
        }
      }
      
      // Create the user
      const user = await tx.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role: role || "USER",
          twoFactorEnabled: twoFactorEnabled || false,
          organizationId: orgId,
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          twoFactorEnabled: true,
          createdAt: true,
          organization: role === "USER" ? {
            select: {
              id: true,
              name: true,
              logo: true,
              contactPersons: {
                select: {
                  id: true,
                  name: true,
                  email: true,
                  phoneNumber: true
                }
              }
            }
          } : true,
        },
      });
      
      return user;
    });
    
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
} 