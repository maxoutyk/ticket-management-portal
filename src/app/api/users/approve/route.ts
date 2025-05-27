import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET pending approval users
export async function GET(request: Request) {
  try {
    // First, ensure Prisma is connected
    try {
      await prisma.$connect();
    } catch (connectionError) {
      console.error("Failed to connect to database:", connectionError);
      return NextResponse.json(
        { error: "Database connection error", details: "Failed to connect to the database" },
        { status: 500 }
      );
    }

    const session = await getServerSession(authOptions);
    console.log("Session in API:", session);
    
    if (!session?.user) {
      console.error("No session or user found in API");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (session.user.role !== "ADMIN") {
      console.error("User is not an admin. Role:", session.user.role);
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Get query parameters for pagination
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    console.log("Fetching users with params:", { page, limit, skip });

    try {
      // Get total count for pagination
      const totalCount = await prisma.user.count({
        where: {
          isApproved: false,
          role: "USER" // Only count customer users
        }
      });

      console.log("Total count of pending users:", totalCount);

      // Get pending users with their organization info
      const pendingUsers = await prisma.user.findMany({
        where: {
          isApproved: false,
          role: "USER"
        },
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
          organization: {
            select: {
              id: true,
              name: true
            }
          }
        },
        orderBy: {
          createdAt: "desc"
        },
        skip,
        take: limit
      });

      console.log("Found pending users:", pendingUsers.length);

      return NextResponse.json({
        users: pendingUsers,
        pagination: {
          total: totalCount,
          pages: Math.ceil(totalCount / limit),
          currentPage: page,
          limit
        }
      });
    } catch (prismaError) {
      console.error("Prisma query error:", prismaError);
      return NextResponse.json(
        { error: "Database query error", details: prismaError instanceof Error ? prismaError.message : String(prismaError) },
        { status: 500 }
      );
    } finally {
      await prisma.$disconnect();
    }
  } catch (error) {
    console.error("Error in GET /api/users/approve:", error);
    return NextResponse.json(
      { error: "Failed to fetch pending users", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

// POST to approve a user
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      console.error("No session found");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (session.user.role !== "ADMIN") {
      console.error("User is not an admin:", session.user.role);
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await request.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Update user approval status
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        isApproved: true,
        approvedAt: new Date(),
        approvedBy: session.user.id
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        organization: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Error approving user:", error);
    return NextResponse.json(
      { error: "Failed to approve user" },
      { status: 500 }
    );
  }
}

// POST to reject/deny a user
export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      console.error("No session found");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (session.user.role !== "ADMIN") {
      console.error("User is not an admin:", session.user.role);
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await request.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Delete the user instead of just marking as rejected
    await prisma.user.delete({
      where: { id: userId }
    });

    return NextResponse.json({ message: "User rejected and removed" });
  } catch (error) {
    console.error("Error rejecting user:", error);
    return NextResponse.json(
      { error: "Failed to reject user" },
      { status: 500 }
    );
  }
} 