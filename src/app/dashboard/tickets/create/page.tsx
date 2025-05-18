"use client";

import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiPaperclip, FiX } from "react-icons/fi";

export default function CreateTicketPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [ticketData, setTicketData] = useState({
    title: "",
    description: "",
    priority: "MEDIUM",
  });
  
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  
  // File type and size limits
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
  const maxFileSize = 5 * 1024 * 1024; // 5MB

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      setIsLoading(false);
    }
  }, [status, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTicketData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (formError) setFormError("");
  };
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    setFileError("");
    
    // Convert FileList to array for easier handling
    const newFiles = Array.from(files);
    
    // Validate each file
    for (const file of newFiles) {
      // Check file type
      if (!allowedTypes.includes(file.type)) {
        setFileError(`File type not allowed: ${file.name}`);
        return;
      }
      
      // Check file size
      if (file.size > maxFileSize) {
        setFileError(`File exceeds 5MB limit: ${file.name}`);
        return;
      }
    }
    
    // Add files to state
    setSelectedFiles((prev) => [...prev, ...newFiles]);
    
    // Clear file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };
  
  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const uploadFiles = async (ticketId: string): Promise<string[]> => {
    const uploadPromises = selectedFiles.map(async (file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('ticketId', ticketId);
      
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`Failed to upload ${file.name}`);
      }
      
      return response.json();
    });
    
    try {
      const results = await Promise.all(uploadPromises);
      return results.map(doc => doc.id);
    } catch (error) {
      console.error("Error uploading files:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!ticketData.title.trim()) {
      setFormError("Title is required");
      return;
    }
    
    if (!ticketData.description.trim()) {
      setFormError("Description is required");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // First create the ticket
      const response = await fetch("/api/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ticketData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "An error occurred while creating the ticket");
      }
      
      const ticket = await response.json();
      
      // Then upload files if any
      if (selectedFiles.length > 0) {
        try {
          await uploadFiles(ticket.id);
        } catch (error) {
          console.error("Error uploading files:", error);
          // Continue anyway since the ticket was created
        }
      }
      
      // Redirect to tickets page
      router.push("/dashboard/tickets?created=true");
    } catch (error) {
      console.error("Error creating ticket:", error);
      setFormError(error instanceof Error ? error.message : "An error occurred while creating the ticket. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-incite-navy"></div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Create New Ticket</h1>
        <Link
          href="/dashboard/tickets"
          className="text-incite-navy hover:text-incite-red transition-colors"
        >
          Back to Tickets
        </Link>
      </div>
      
      {formError && (
        <div className="mb-6 bg-red-50 border-l-4 border-incite-red p-4 rounded-r">
          <p className="text-incite-red text-sm">{formError}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title <span className="text-incite-red">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={ticketData.title}
            onChange={handleChange}
            placeholder="Enter a descriptive title for your issue"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-incite-navy focus:border-incite-navy"
            required
          />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description <span className="text-incite-red">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={ticketData.description}
            onChange={handleChange}
            rows={6}
            placeholder="Provide detailed information about the issue"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-incite-navy focus:border-incite-navy"
            required
          />
        </div>
        
        <div>
          <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={ticketData.priority}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-incite-navy focus:border-incite-navy"
          >
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
            <option value="CRITICAL">Critical</option>
          </select>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-sm font-medium text-gray-700">
              Attachments
            </label>
            <span className="text-xs text-gray-500">Max file size: 5MB</span>
          </div>
          
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileSelect}
            className="hidden"
            multiple
          />
          
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <FiPaperclip className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <button
                  type="button"
                  onClick={triggerFileInput}
                  className="relative cursor-pointer rounded-md font-medium text-incite-navy hover:text-incite-red focus-within:outline-none"
                >
                  Upload a file
                </button>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">
                PDF, Word, Excel, Images, or Text files up to 5MB
              </p>
            </div>
          </div>
          
          {fileError && (
            <p className="mt-2 text-sm text-incite-red">{fileError}</p>
          )}
          
          {selectedFiles.length > 0 && (
            <div className="mt-3 space-y-2">
              <p className="text-sm font-medium text-gray-700">Selected files:</p>
              <ul className="space-y-2">
                {selectedFiles.map((file, index) => (
                  <li key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div className="flex items-center">
                      <FiPaperclip className="mr-2 text-gray-500" />
                      <span className="text-sm">{file.name}</span>
                      <span className="ml-2 text-xs text-gray-500">({(file.size / 1024).toFixed(1)} KB)</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-gray-500 hover:text-incite-red"
                    >
                      <FiX />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="flex space-x-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-incite-red hover:bg-red-800 text-white px-6 py-2 rounded transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Creating..." : "Create Ticket"}
          </button>
          
          <Link
            href="/dashboard/tickets"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded transition-colors"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
} 