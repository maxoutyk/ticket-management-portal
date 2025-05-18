import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../[...nextauth]/route";

// DEVELOPMENT ONLY: Debug endpoint for 2FA status
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

    // Get current session
    const session = await getServerSession(authOptions);
    
    // Find global 2FA setting
    const twoFactorSetting = await prisma.appSetting.findUnique({
      where: { key: "enableTwoFactorAuth" },
    });
    
    const isGlobalTwoFactorEnabled = twoFactorSetting?.value === "true";

    if (email) {
      // If email is provided, look up that specific user
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          otp: true,
          otpExpiry: true,
          otpVerifiedAt: true,
          twoFactorEnabled: true,
        },
      });

      if (!user) {
        return NextResponse.json(
          { error: "User not found" },
          { status: 404 }
        );
      }

      // Check if OTP is expired
      const isOtpExpired = user.otpExpiry ? new Date() > user.otpExpiry : false;
      
      return NextResponse.json({
        userEmail: user.email,
        userTwoFactorEnabled: user.twoFactorEnabled,
        globalTwoFactorEnabled: isGlobalTwoFactorEnabled,
        requiredForThisUser: user.twoFactorEnabled && isGlobalTwoFactorEnabled,
        otpStatus: {
          hasOtp: !!user.otp,
          otp: user.otp,
          otpExpiry: user.otpExpiry,
          isExpired: isOtpExpired,
          lastVerified: user.otpVerifiedAt,
        },
        currentSession: {
          isAuthenticated: !!session,
          user: session?.user,
          requiresTwoFactor: session?.user?.requiresTwoFactor,
        },
      });
    } 
    
    // Otherwise return global status and current session
    return NextResponse.json({
      globalTwoFactorEnabled: isGlobalTwoFactorEnabled,
      currentSession: {
        isAuthenticated: !!session,
        user: session?.user,
        requiresTwoFactor: session?.user?.requiresTwoFactor,
      },
    });
  } catch (error) {
    console.error("Error in 2FA debug endpoint:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
} 