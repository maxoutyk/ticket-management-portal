import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { saveFile } from "@/lib/fileUpload";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const ticketId = formData.get('ticketId') as string | null;
    const commentId = formData.get('commentId') as string | null;
    
    if (!file) {
      return NextResponse.json({ error: "File is required" }, { status: 400 });
    }
    
    if (!ticketId && !commentId) {
      return NextResponse.json(
        { error: "Either ticketId or commentId is required" },
        { status: 400 }
      );
    }
    
    // Validate file type and size
    const allowedTypes = [
      'application/pdf',
      'image/jpeg',
      'image/png',
      'image/gif',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/plain'
    ];
    
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "File type not allowed" },
        { status: 400 }
      );
    }
    
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File size exceeds 5MB limit" },
        { status: 400 }
      );
    }
    
    // Save file to disk
    const subdirectory = ticketId ? 'tickets' : 'comments';
    const savedFile = await saveFile(file, `uploads/${subdirectory}`);
    
    // Save file metadata to database
    const document = await prisma.document.create({
      data: {
        filename: savedFile.filename,
        path: savedFile.path,
        mimeType: savedFile.mimeType,
        size: savedFile.size,
        ticketId: ticketId,
        commentId: commentId
      }
    });
    
    return NextResponse.json(document, { status: 201 });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
} 