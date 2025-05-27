import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { updateExistingTicketsWithNumbers } from "@/lib/ticketUtils";

// POST endpoint to migrate existing tickets to have ticket numbers
export async function POST() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    // Check if user is admin
    if (session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    
    // Update existing tickets with ticket numbers
    await updateExistingTicketsWithNumbers();
    
    return NextResponse.json({ 
      success: true, 
      message: "Ticket numbers migration completed successfully" 
    });
  } catch (error) {
    console.error("Error migrating ticket numbers:", error);
    return NextResponse.json(
      { error: "Failed to migrate ticket numbers" },
      { status: 500 }
    );
  }
} 