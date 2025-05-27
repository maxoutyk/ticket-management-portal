import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateOTP, sendEmail, emailTemplates } from "@/lib/email";

// Generate OTP for a user
export async function POST(request: Request) {
  try {
    const { email, otp } = await request.json();

    // If OTP is provided, this is a verification request
    if (otp) {
      if (!email) {
        return NextResponse.json(
          { error: "Email is required" },
          { status: 400 }
        );
      }

      console.log(`Verifying OTP for ${email}`);

      // Find the user
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          email: true,
          otp: true,
          otpExpiry: true,
        }
      });

      if (!user || !user.otp) {
        console.log("OTP verification failed: OTP not found");
        return NextResponse.json(
          { error: "Invalid verification code" },
          { status: 400 }
        );
      }

      // Check if OTP has expired
      if (user.otpExpiry && new Date() > user.otpExpiry) {
        console.log("OTP verification failed: OTP expired");
        return NextResponse.json(
          { error: "Verification code has expired" },
          { status: 400 }
        );
      }

      // Verify the OTP
      if (user.otp !== otp) {
        console.log(`OTP verification failed: Expected ${user.otp}, got ${otp}`);
        return NextResponse.json(
          { error: "Invalid verification code" },
          { status: 400 }
        );
      }

      // Clear the OTP and expiry
      await prisma.user.update({
        where: { id: user.id },
        data: {
          otp: null,
          otpExpiry: null,
          otpVerifiedAt: new Date(),
        },
      });

      console.log(`OTP verified successfully for ${email}`);
      
      return NextResponse.json(
        { message: "Verification code verified successfully" },
        { status: 200 }
      );
    }

    // If no OTP provided, this is an OTP generation request
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Find the user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // For security reasons, don't reveal that the user doesn't exist
      return NextResponse.json(
        { message: "If your email exists, a verification code has been sent" },
        { status: 200 }
      );
    }
    
    // Check if 2FA is enabled globally
    const twoFactorSetting = await prisma.appSetting.findUnique({
      where: { key: "enableTwoFactorAuth" },
    });
    
    const isGlobalTwoFactorEnabled = twoFactorSetting?.value === "true";
    
    // Check if 2FA is enabled for this user
    const isUserTwoFactorEnabled = user.twoFactorEnabled;
    
    // Only generate and send OTP if both global and user settings are enabled
    if (isGlobalTwoFactorEnabled && isUserTwoFactorEnabled) {
      // Check if an OTP was recently generated (within the last 30 seconds)
      const recentOtpGeneration = user.otpExpiry && 
        new Date().getTime() - new Date(user.otpExpiry).getTime() > -30 * 1000 && 
        new Date().getTime() - new Date(user.otpExpiry).getTime() < 0;
      
      if (recentOtpGeneration && user.otp) {
        console.log(`OTP was recently generated for ${user.email}. Reusing existing OTP.`);
        
        return NextResponse.json(
          { message: "Verification code sent to your email address" },
          { status: 200 }
        );
      }
      
      // Generate a 6-digit OTP
      const otp = generateOTP(6);
      
      // Set the OTP expiry to 10 minutes from now
      const otpExpiry = new Date();
      otpExpiry.setMinutes(otpExpiry.getMinutes() + 10);
  
      // Save the OTP and expiry to the user record
      await prisma.user.update({
        where: { id: user.id },
        data: {
          otp,
          otpExpiry,
        },
      });
  
      // Send the OTP via email
      try {
        const emailContent = emailTemplates.otpEmail(otp);
        await sendEmail({
          to: user.email,
          subject: emailContent.subject,
          text: emailContent.text,
          html: emailContent.html,
        });
        console.log(`OTP email sent to ${user.email}. [FOR TESTING: OTP=${otp}]`);
      } catch (emailError) {
        console.error('Failed to send OTP email:', emailError);
        // Continue anyway to not reveal if email was sent or not
        console.log(`NOTE: Email failed but authentication can continue. [FOR TESTING: OTP for ${user.email} is ${otp}]`);
      }
    } else {
      console.log("2FA not enabled for this user or globally disabled");
    }

    return NextResponse.json(
      { message: "If your email exists, a verification code has been sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing OTP request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
} 