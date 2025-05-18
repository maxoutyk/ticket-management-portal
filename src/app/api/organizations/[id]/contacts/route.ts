import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface Params {
  params: {
    id: string;
  };
}

// POST - Create a new contact person for an organization
export async function POST(request: Request, { params }: Params) {
  try {
    // Await params to satisfy Next.js 15+ requirement
    const resolvedParams = await Promise.resolve(params);
    const organizationId = resolvedParams.id;
    
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const user = await prisma.user.findUnique({
      where: { email: session.user.email as string },
    });
    
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Not authorized to add contact persons" }, { status: 403 });
    }
    
    // Check if organization exists
    const organization = await prisma.organization.findUnique({
      where: { id: organizationId },
    });
    
    if (!organization) {
      return NextResponse.json({ error: "Organization not found" }, { status: 404 });
    }
    
    const body = await request.json();
    const { name, email, phoneNumber } = body;
    
    // Validate required fields
    if (!name || !email || !phoneNumber) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required" },
        { status: 400 }
      );
    }
    
    // Create the contact person
    const contactPerson = await prisma.contactPerson.create({
      data: {
        name,
        email,
        phoneNumber,
        organizationId,
      },
    });
    
    return NextResponse.json(contactPerson, { status: 201 });
  } catch (error) {
    console.error("Error creating contact person:", error);
    return NextResponse.json(
      { error: "Failed to create contact person" },
      { status: 500 }
    );
  }
} 