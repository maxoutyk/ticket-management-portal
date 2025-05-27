import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// Default settings to be created if they don't exist
const defaultSettings = [
  // General settings
  { key: "appName", value: "Ticket Management Portal" },
  { key: "defaultLanguage", value: "en" },
  { key: "allowUserRegistration", value: "true" },
  { key: "requireEmailVerification", value: "false" },
  { key: "autoAssignTickets", value: "false" },
  { key: "maintenanceMode", value: "false" },
  { key: "enableTwoFactorAuth", value: "true" },
  
  // SMTP settings
  { key: "smtpHost", value: "" },
  { key: "smtpPort", value: "587" },
  { key: "smtpUser", value: "" },
  { key: "smtpPassword", value: "" },
  { key: "smtpFromEmail", value: "" },
  { key: "smtpFromName", value: "Support Team" },
  { key: "smtpSecure", value: "true" },
  
  // Notification settings
  { key: "notifyOnNewTicket", value: "true" },
  { key: "notifyOnTicketAssignment", value: "true" },
  { key: "notifyOnTicketStatusChange", value: "true" },
  { key: "notifyOnTicketComment", value: "true" },
  { key: "adminEmailNotifications", value: "true" },
  { key: "userEmailNotifications", value: "true" },
];

export async function POST() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Get existing settings
    const existingSettings = await prisma.appSetting.findMany();
    const existingKeys = existingSettings.map(setting => setting.key);

    // Create missing settings
    const missingSettings = defaultSettings.filter(setting => !existingKeys.includes(setting.key));
    
    if (missingSettings.length > 0) {
      await prisma.$transaction(
        missingSettings.map(setting => 
          prisma.appSetting.create({
            data: setting
          })
        )
      );

      return NextResponse.json({ 
        success: true, 
        message: `Initialized ${missingSettings.length} default settings` 
      });
    } else {
      return NextResponse.json({ 
        success: true, 
        message: "All default settings already exist" 
      });
    }
  } catch (error) {
    console.error("Error initializing settings:", error);
    return NextResponse.json(
      { error: "Failed to initialize settings" },
      { status: 500 }
    );
  }
}

// This GET endpoint can be called to check if initialization is needed
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Get existing settings
    const existingSettings = await prisma.appSetting.findMany();
    const existingKeys = existingSettings.map(setting => setting.key);

    // Check for missing settings
    const missingSettings = defaultSettings.filter(setting => !existingKeys.includes(setting.key));
    
    return NextResponse.json({ 
      needsInitialization: missingSettings.length > 0,
      missingSettingsCount: missingSettings.length,
      existingSettingsCount: existingSettings.length
    });
  } catch (error) {
    console.error("Error checking settings:", error);
    return NextResponse.json(
      { error: "Failed to check settings status" },
      { status: 500 }
    );
  }
} 