import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

/**
 * Save a file to the server's filesystem
 * 
 * @param file The file to save
 * @param directory The directory to save the file in
 * @returns Information about the saved file
 */
export async function saveFile(file: File, directory = 'uploads'): Promise<{
  filename: string;
  path: string;
  mimeType: string;
  size: number;
}> {
  // Create a safe filename with original extension
  const originalFilename = file.name;
  const fileExtension = path.extname(originalFilename);
  const safeFilename = `${uuidv4()}${fileExtension}`;
  
  // Ensure upload directory exists
  const uploadDir = path.join(process.cwd(), 'public', directory);
  await mkdir(uploadDir, { recursive: true });
  
  // Write file to disk
  const buffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(uploadDir, safeFilename);
  await writeFile(filePath, buffer);
  
  // Return file information
  return {
    filename: originalFilename,
    path: `/${directory}/${safeFilename}`,
    mimeType: file.type,
    size: file.size,
  };
} 