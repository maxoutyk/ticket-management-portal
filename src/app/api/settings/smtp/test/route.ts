import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const data = await request.json();
    
    // Validate required fields
    const requiredFields = [
      "smtpHost", 
      "smtpPort", 
      "smtpUser", 
      "smtpPassword", 
      "smtpFromEmail", 
      "smtpFromName"
    ];
    
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Parse port as integer
    const port = parseInt(data.smtpPort, 10);
    if (isNaN(port)) {
      return NextResponse.json(
        { error: "SMTP port must be a valid number" },
        { status: 400 }
      );
    }

    // Determine if we should use secure connection based on the port and setting
    const isSecure = data.smtpSecure === "true";
    
    // Log connection details for debugging
    console.log("SMTP Test Connection Details:", {
      host: data.smtpHost,
      port,
      secure: isSecure,
      user: data.smtpUser,
      // Omit password for security
    });

    try {
      // Create a test transport with extra options for better error handling
      const testTransport = nodemailer.createTransport({
        host: data.smtpHost,
        port,
        secure: isSecure, // True for 465, false for other ports
        auth: {
          user: data.smtpUser,
          pass: data.smtpPassword,
        },
        // Add debug option for more verbose logging
        logger: true,
        debug: true,
        // Increased timeout for slower connections
        connectionTimeout: 10000,
        // Important: If having SSL issues, try disabling TLS verification during testing
        tls: {
          // Don't fail on invalid certs
          rejectUnauthorized: false,
        },
      });

      // Try to verify the connection
      await testTransport.verify();
      
      // Check if the user's email is a reserved domain (example.com, test.com, etc.)
      const userEmail = session.user.email;
      const isReservedDomain = userEmail.endsWith('@example.com') || 
                               userEmail.endsWith('@test.com') || 
                               userEmail.endsWith('@example.org');
      
      // Use a fallback if necessary
      const recipientEmail = isReservedDomain 
        ? data.smtpFromEmail  // Use the configured From email as the recipient if user email is reserved
        : userEmail;
        
      // Send a test email to the admin
      await testTransport.sendMail({
        from: `"${data.smtpFromName}" <${data.smtpFromEmail}>`,
        to: recipientEmail,
        subject: "Test Email - Ticket Management Portal",
        text: "This is a test email from your Ticket Management Portal.",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
            <h2 style="color: #334155;">SMTP Configuration Test</h2>
            <p>This is a test email from your Ticket Management Portal.</p>
            <p>Your SMTP server configuration is working correctly.</p>
            <hr style="border: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="color: #64748b; font-size: 14px;">
              This is an automated message, please do not reply.
            </p>
          </div>
        `,
      });

      return NextResponse.json({ 
        success: true, 
        message: isReservedDomain
          ? `SMTP test successful! A test email has been sent to ${recipientEmail} (your admin email was a reserved domain).`
          : `SMTP test successful! A test email has been sent to your email address (${recipientEmail}).`
      });
    } catch (smtpError: any) {
      console.error("SMTP test failed:", smtpError);
      
      // Provide more helpful error messages based on error type
      let errorMessage = "Could not connect to SMTP server";
      
      if (smtpError.code === 'ECONNREFUSED') {
        errorMessage = "Connection refused. Please check your host and port settings.";
      } else if (smtpError.code === 'ETIMEDOUT') {
        errorMessage = "Connection timed out. Please check your host and firewall settings.";
      } else if (smtpError.code === 'ESOCKET' && smtpError.message.includes('SSL routines')) {
        // SSL/TLS issues
        errorMessage = `SSL/TLS connection error. Try ${isSecure ? 'disabling' : 'enabling'} the SSL/TLS option or using a different port.`;
      } else if (smtpError.code === 'EAUTH') {
        errorMessage = "Authentication failed. Please check your username and password.";
      } else if (smtpError.code === 'EENVELOPE' && smtpError.message.includes('RFC 2606')) {
        // Recipient address using reserved domain
        errorMessage = "Authentication successful, but your admin email uses a reserved test domain (example.com). Edit your user profile to use a real email address.";
      }
      
      // Suggest common SMTP configurations
      const suggestions = [];
      if (port === 465) {
        suggestions.push("Port 465 usually requires SSL/TLS enabled.");
      } else if (port === 587) {
        suggestions.push("Port 587 usually uses STARTTLS (SSL/TLS disabled).");
      } else if (port === 25) {
        suggestions.push("Port 25 is often blocked by ISPs. Try port 587 instead.");
      }
      
      // Add specific suggestions for RFC 2606 error
      if (smtpError.code === 'EENVELOPE' && smtpError.message.includes('RFC 2606')) {
        suggestions.push("The connection and authentication were successful, but the test email couldn't be sent because your admin account uses a placeholder email domain.");
        suggestions.push("Update your user profile with a real email address to receive test emails.");
      }

      return NextResponse.json(
        { 
          error: "SMTP test failed", 
          details: errorMessage,
          suggestions: suggestions.length > 0 ? suggestions : undefined,
          technical: smtpError.message || "Unknown error"
        },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error("Error testing SMTP settings:", error);
    return NextResponse.json(
      { error: "Failed to test SMTP settings", details: error.message },
      { status: 500 }
    );
  }
} 