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
    
    // Notification settings fields
    const notificationSettings = [
      { key: "notifyOnNewTicket", value: data.notifyOnNewTicket?.toString() || "true" },
      { key: "notifyOnTicketAssignment", value: data.notifyOnTicketAssignment?.toString() || "true" },
      { key: "notifyOnTicketStatusChange", value: data.notifyOnTicketStatusChange?.toString() || "true" },
      { key: "notifyOnTicketComment", value: data.notifyOnTicketComment?.toString() || "true" },
      { key: "adminEmailNotifications", value: data.adminEmailNotifications?.toString() || "true" },
      { key: "userEmailNotifications", value: data.userEmailNotifications?.toString() || "true" },
    ];

    // Use a transaction to update all settings
    await prisma.$transaction(
      notificationSettings.map((setting) => 
        prisma.appSetting.upsert({
          where: { key: setting.key },
          update: { value: setting.value },
          create: { key: setting.key, value: setting.value },
        })
      )
    );

    return NextResponse.json({ success: true, message: "Notification settings saved successfully" });
  } catch (error) {
    console.error("Error saving notification settings:", error);
    return NextResponse.json(
      { error: "Failed to save notification settings" },
      { status: 500 }
    );
  }
} 