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

    // Update or create settings in database
    const smtpSettings = [
      { key: "smtpHost", value: data.smtpHost },
      { key: "smtpPort", value: data.smtpPort },
      { key: "smtpUser", value: data.smtpUser },
      { key: "smtpPassword", value: data.smtpPassword },
      { key: "smtpFromEmail", value: data.smtpFromEmail },
      { key: "smtpFromName", value: data.smtpFromName },
      { key: "smtpSecure", value: data.smtpSecure || "true" },
    ];

    // Use a transaction to update all settings
    await prisma.$transaction(
      smtpSettings.map((setting) => 
        prisma.appSetting.upsert({
          where: { key: setting.key },
          update: { value: setting.value },
          create: { key: setting.key, value: setting.value },
        })
      )
    );

    return NextResponse.json({ success: true, message: "SMTP settings saved successfully" });
  } catch (error) {
    console.error("Error saving SMTP settings:", error);
    return NextResponse.json(
      { error: "Failed to save SMTP settings" },
      { status: 500 }
    );
  }
} 