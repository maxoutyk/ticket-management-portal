import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { hash } from "bcrypt";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// GET user by ID (admin only)
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email as string },
    });
    
    if (!currentUser || currentUser.role !== "ADMIN") {
      return NextResponse.json({ error: "Not authorized to view user details" }, { status: 403 });
    }
    
    // Await params to satisfy Next.js 15+ requirement
    const resolvedParams = await Promise.resolve(params);
    const userId = resolvedParams.id;
    
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        twoFactorEnabled: true,
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
            tickets: true,
          },
        },
      },
    });
    
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    
    // Format the response
    const formattedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      twoFactorEnabled: user.twoFactorEnabled,
      ticketCount: user._count.tickets,
      organization: user.organization,
    };
    
    return NextResponse.json(formattedUser);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Failed to fetch user details" },
      { status: 500 }
    );
  }
}

// PATCH - Update user
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email as string },
    });
    
    if (!currentUser || currentUser.role !== "ADMIN") {
      return NextResponse.json({ error: "Not authorized to update users" }, { status: 403 });
    }
    
    // Await params to satisfy Next.js 15+ requirement
    const resolvedParams = await Promise.resolve(params);
    const userId = resolvedParams.id;
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
    
    // First, check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        organization: {
          include: {
            contactPersons: true
          }
        }
      }
    });
    
    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    
    // If updating email, make sure it's not already taken by another user
    if (email && email !== existingUser.email) {
      const emailExists = await prisma.user.findUnique({
        where: { email },
      });
      
      if (emailExists) {
        return NextResponse.json(
          { error: "Email already in use" },
          { status: 409 }
        );
      }
    }
    
    // Update user and related data in a transaction
    const updatedUser = await prisma.$transaction(async (tx) => {
      let userData: any = {};
      
      if (name) userData.name = name;
      if (email) userData.email = email;
      if (role) userData.role = role;
      
      // Update 2FA setting if provided
      if (typeof twoFactorEnabled === 'boolean') {
        userData.twoFactorEnabled = twoFactorEnabled;
        
        // If disabling 2FA, clear any existing OTP
        if (!twoFactorEnabled) {
          userData.otp = null;
          userData.otpExpiry = null;
        }
      }
      
      // If password is provided, hash it
      if (password) {
        userData.password = await hash(password, 10);
      }
      
      // Handle organization updates for USER role
      if (role === "USER" || existingUser.role === "USER") {
        // Handle organization data
        if (organization) {
          let organizationId = existingUser.organizationId;
          
          // If user already has an organization, update it
          if (existingUser.organizationId) {
            await tx.organization.update({
              where: { id: existingUser.organizationId },
              data: {
                name: organization.name,
                logo: organization.logo
              }
            });
          } else {
            // Otherwise, create a new organization
            const newOrg = await tx.organization.create({
              data: {
                name: organization.name,
                logo: organization.logo || null
              }
            });
            organizationId = newOrg.id;
          }
          
          userData.organizationId = organizationId;
          
          // Handle contact persons
          if (contactPersons && contactPersons.length > 0) {
            // If organization exists, delete current contact persons and add new ones
            if (existingUser.organizationId) {
              await tx.contactPerson.deleteMany({
                where: { organizationId: existingUser.organizationId }
              });
            }
            
            // Add new contact persons
            await tx.contactPerson.createMany({
              data: contactPersons.map((contact: any) => ({
                name: contact.name,
                email: contact.email,
                phoneNumber: contact.phoneNumber,
                organizationId: organizationId as string
              }))
            });
          }
        } else if (role && role !== "USER" && existingUser.role === "USER") {
          // If changing from USER to non-USER role, remove organization association
          userData.organizationId = null;
        }
      }
      
      // Update the user
      const user = await tx.user.update({
        where: { id: userId },
        data: userData,
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
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
          }
        }
      });
      
      return user;
    });
    
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

// DELETE - Delete user
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email as string },
    });
    
    if (!currentUser || currentUser.role !== "ADMIN") {
      return NextResponse.json({ error: "Not authorized to delete users" }, { status: 403 });
    }
    
    // Await params to satisfy Next.js 15+ requirement
    const resolvedParams = await Promise.resolve(params);
    const userId = resolvedParams.id;
    
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        organization: true
      }
    });
    
    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    
    // Don't allow deleting admin users
    if (existingUser.role === "ADMIN") {
      return NextResponse.json(
        { error: "Cannot delete users with ADMIN role" },
        { status: 403 }
      );
    }
    
    // Perform delete in a transaction
    await prisma.$transaction(async (tx) => {
      // Delete user
      await tx.user.delete({
        where: { id: userId }
      });
      
      // If user has an organization and they're the only user in it, delete the organization too
      if (existingUser.organizationId) {
        const usersInOrg = await tx.user.count({
          where: { organizationId: existingUser.organizationId }
        });
        
        if (usersInOrg === 0) {
          await tx.organization.delete({
            where: { id: existingUser.organizationId }
          });
        }
      }
    });
    
    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
} 