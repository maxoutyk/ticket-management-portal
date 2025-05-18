import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Development-only endpoint to get OTP for testing
export async function GET(request: Request) {
  // Only allow in development environment for security
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { error: "This endpoint is only available in development mode" },
      { status: 403 }
    );
  }

  try {
    const url = new URL(request.url);
    const email = url.searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { error: "Email parameter is required" },
        { status: 400 }
      );
    }

    // Find the user and their OTP
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        email: true,
        otp: true,
        otpExpiry: true,
        twoFactorEnabled: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Check if 2FA is enabled for this user
    if (!user.twoFactorEnabled) {
      return NextResponse.json(
        { error: "Two-factor authentication is not enabled for this user" },
        { status: 400 }
      );
    }

    // Check if OTP exists
    if (!user.otp) {
      return NextResponse.json(
        { error: "No OTP found for this user" },
        { status: 404 }
      );
    }

    // Check if OTP is expired
    const isExpired = user.otpExpiry && new Date() > user.otpExpiry;

    return NextResponse.json({
      email: user.email,
      otp: user.otp,
      expiry: user.otpExpiry,
      status: isExpired ? "expired" : "valid",
      message: `Use this OTP for testing: ${user.otp}`,
    });
  } catch (error) {
    console.error("Error in OTP debug endpoint:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
} 