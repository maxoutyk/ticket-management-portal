import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

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
    
    // General settings fields
    const generalSettings = [
      { key: "appName", value: data.appName || "Ticket Management Portal" },
      { key: "defaultLanguage", value: data.defaultLanguage || "en" },
      { key: "allowUserRegistration", value: data.allowUserRegistration?.toString() || "true" },
      { key: "requireEmailVerification", value: data.requireEmailVerification?.toString() || "false" },
      { key: "autoAssignTickets", value: data.autoAssignTickets?.toString() || "false" },
      { key: "maintenanceMode", value: data.maintenanceMode?.toString() || "false" },
      { key: "enableTwoFactorAuth", value: data.enableTwoFactorAuth?.toString() || "true" },
    ];

    // Use a transaction to update all settings
    await prisma.$transaction(
      generalSettings.map((setting) => 
        prisma.appSetting.upsert({
          where: { key: setting.key },
          update: { value: setting.value },
          create: { key: setting.key, value: setting.value },
        })
      )
    );

    return NextResponse.json({ success: true, message: "General settings saved successfully" });
  } catch (error) {
    console.error("Error saving general settings:", error);
    return NextResponse.json(
      { error: "Failed to save general settings" },
      { status: 500 }
    );
  }
} 