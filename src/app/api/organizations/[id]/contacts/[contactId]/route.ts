import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface Params {
  params: {
    id: string;
    contactId: string;
  };
}

// DELETE - Remove a contact person
export async function DELETE(request: Request, { params }: Params) {
  try {
    // Await params to satisfy Next.js 15+ requirement
    const resolvedParams = await Promise.resolve(params);
    const organizationId = resolvedParams.id;
    const contactId = resolvedParams.contactId;
    
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const user = await prisma.user.findUnique({
      where: { email: session.user.email as string },
    });
    
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Not authorized to delete contact persons" }, { status: 403 });
    }
    
    // Check if organization exists
    const organization = await prisma.organization.findUnique({
      where: { id: organizationId },
    });
    
    if (!organization) {
      return NextResponse.json({ error: "Organization not found" }, { status: 404 });
    }
    
    // Check if contact person exists and belongs to the organization
    const contactPerson = await prisma.contactPerson.findFirst({
      where: {
        id: contactId,
        organizationId,
      },
    });
    
    if (!contactPerson) {
      return NextResponse.json({ error: "Contact person not found or does not belong to this organization" }, { status: 404 });
    }
    
    // Delete the contact person
    await prisma.contactPerson.delete({
      where: { id: contactId },
    });
    
    return NextResponse.json(
      { message: "Contact person deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting contact person:", error);
    return NextResponse.json(
      { error: "Failed to delete contact person" },
      { status: 500 }
    );
  }
} 