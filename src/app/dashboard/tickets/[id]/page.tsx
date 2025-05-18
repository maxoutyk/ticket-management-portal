"use client";

import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiPaperclip, FiX, FiDownload } from "react-icons/fi";
import PageContainer from "@/components/dashboard/PageContainer";

interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
  assignedTicketCount?: number;
}

interface Document {
  id: string;
  filename: string;
  path: string;
  mimeType: string;
  size: number;
  createdAt: string;
}

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  user: User;
  attachments: Document[];
}

interface Ticket {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  createdAt: string;
  createdBy: User;
  assignedTo: User | null;
  comments: Comment[];
  attachments: Document[];
  ticketNumber?: string;
}

interface TicketDetailProps {
  params: {
    id: string;
  };
}

export default function TicketDetailPage({ params }: TicketDetailProps) {
  // Fix for Next.js params warning
  const resolvedParams = Promise.resolve(params);
  const [id, setId] = useState("");
  
  useEffect(() => {
    async function resolveId() {
      const p = await resolvedParams;
      setId(p.id);
    }
    resolveId();
  }, [resolvedParams]);
  
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const userRole = session?.user?.role || "USER";
  
  const [comment, setComment] = useState("");
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const [isStatusUpdateOpen, setIsStatusUpdateOpen] = useState(false);
  const [isAssigning, setIsAssigning] = useState(false);
  const [isAssignDropdownOpen, setIsAssignDropdownOpen] = useState(false);
  const [employees, setEmployees] = useState<User[]>([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string>("");
  const [loadingEmployees, setLoadingEmployees] = useState(false);
  
  // Create refs for the dropdowns
  const statusDropdownRef = useRef<HTMLDivElement>(null);
  const assignDropdownRef = useRef<HTMLDivElement>(null);
  
  // File upload states
  const fileInputRef = useRef<HTMLInputElement>(null);
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
    } else if (status === "authenticated" && id) {
      fetchTicket();
      
      // Fetch employees if user is an admin
      if (userRole === "ADMIN") {
        fetchEmployees();
      }
    }
  }, [status, router, id, userRole]);

  const fetchTicket = async () => {
    if (!id) return;
    
    try {
      const response = await fetch(`/api/tickets/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch ticket details");
      }

      const ticketData = await response.json();
      setTicket(ticketData);
    } catch (error) {
      console.error("Error fetching ticket:", error);
      setError(error instanceof Error ? error.message : "Failed to load ticket details");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchEmployees = async () => {
    try {
      setLoadingEmployees(true);
      const response = await fetch("/api/users/employees", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }

      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
      setError("Failed to load employees list");
    } finally {
      setLoadingEmployees(false);
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "OPEN":
        return "bg-blue-100 text-blue-800";
      case "IN_PROGRESS":
        return "bg-yellow-100 text-yellow-800";
      case "RESOLVED":
        return "bg-green-100 text-green-800";
      case "CLOSED":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityBadgeClass = (priority: string) => {
    switch (priority) {
      case "LOW":
        return "bg-green-100 text-green-800";
      case "MEDIUM":
        return "bg-blue-100 text-blue-800";
      case "HIGH":
        return "bg-orange-100 text-orange-800";
      case "CRITICAL":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
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
  
  const uploadFiles = async (commentId: string): Promise<string[]> => {
    const uploadPromises = selectedFiles.map(async (file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('commentId', commentId);
      
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

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!comment.trim() || !id) return;
    
    setIsSubmittingComment(true);
    
    try {
      const response = await fetch(`/api/tickets/${id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: comment,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to add comment");
      }
      
      const newComment = await response.json();
      
      // Upload files if any
      if (selectedFiles.length > 0) {
        try {
          await uploadFiles(newComment.id);
        } catch (error) {
          console.error("Error uploading files:", error);
          // Continue anyway since the comment was created
        }
      }
      
      // Refresh ticket data to get updated comments with attachments
      fetchTicket();
      
      // Clear the comment input and selected files
      setComment("");
      setSelectedFiles([]);
    } catch (error) {
      console.error("Error adding comment:", error);
      setError(error instanceof Error ? error.message : "Failed to add comment");
    } finally {
      setIsSubmittingComment(false);
    }
  };

  const handleStatusUpdate = async (newStatus: string) => {
    if (!ticket || !id) return;
    
    try {
      const response = await fetch(`/api/tickets/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: newStatus,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update ticket status");
      }
      
      const updatedTicket = await response.json();
      
      // Update the local ticket data
      setTicket(prev => {
        if (!prev) return updatedTicket;
        return {
          ...prev,
          ...updatedTicket,
          status: newStatus,
          // Preserve comments if not included in the response
          comments: updatedTicket.comments || prev.comments || [],
          // Preserve attachments if not included in the response
          attachments: updatedTicket.attachments || prev.attachments || []
        };
      });
      
      setIsStatusUpdateOpen(false);
      
      // Also refetch to get updated comments if any
      fetchTicket();
    } catch (error) {
      console.error("Error updating ticket status:", error);
      setError(error instanceof Error ? error.message : "Failed to update ticket status");
    }
  };

  const handleAssignToMe = async () => {
    if (!ticket || !session?.user?.id || !id) return;
    
    setIsAssigning(true);
    
    try {
      const response = await fetch(`/api/tickets/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          assigneeId: session.user.id,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to assign ticket");
      }
      
      const updatedTicket = await response.json();
      // Ensure comments array exists when updating the ticket
      setTicket(prev => {
        if (!prev) return updatedTicket;
        return {
          ...prev,
          ...updatedTicket,
          // Preserve comments if not included in the response
          comments: updatedTicket.comments || prev.comments || [],
          // Preserve attachments if not included in the response
          attachments: updatedTicket.attachments || prev.attachments || []
        };
      });
      
      // Also refetch to get updated data
      fetchTicket();
    } catch (error) {
      console.error("Error assigning ticket:", error);
      setError(error instanceof Error ? error.message : "Failed to assign ticket");
    } finally {
      setIsAssigning(false);
    }
  };

  const handleAssignToEmployee = async () => {
    if (!ticket || !selectedEmployeeId || !id) return;
    
    setIsAssigning(true);
    
    try {
      const response = await fetch(`/api/tickets/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          assigneeId: selectedEmployeeId,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to assign ticket");
      }
      
      const updatedTicket = await response.json();
      // Ensure comments array exists when updating the ticket
      setTicket(prev => {
        if (!prev) return updatedTicket;
        return {
          ...prev,
          ...updatedTicket,
          // Preserve comments if not included in the response
          comments: updatedTicket.comments || prev.comments || [],
          // Preserve attachments if not included in the response
          attachments: updatedTicket.attachments || prev.attachments || []
        };
      });
      setIsAssignDropdownOpen(false);
      setSelectedEmployeeId("");
      
      // Also refetch to get updated data
      fetchTicket();
    } catch (error) {
      console.error("Error assigning ticket:", error);
      setError(error instanceof Error ? error.message : "Failed to assign ticket");
    } finally {
      setIsAssigning(false);
    }
  };

  // Format file size for display
  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    const kb = bytes / 1024;
    if (kb < 1024) return kb.toFixed(1) + ' KB';
    const mb = kb / 1024;
    return mb.toFixed(1) + ' MB';
  };

  // Add a click outside handler for dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Close status dropdown when clicking outside
      if (
        statusDropdownRef.current && 
        !statusDropdownRef.current.contains(event.target as Node) &&
        isStatusUpdateOpen
      ) {
        setIsStatusUpdateOpen(false);
      }
      
      // Close assign dropdown when clicking outside
      if (
        assignDropdownRef.current && 
        !assignDropdownRef.current.contains(event.target as Node) &&
        isAssignDropdownOpen
      ) {
        setIsAssignDropdownOpen(false);
      }
    }
    
    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Remove event listener on cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isStatusUpdateOpen, isAssignDropdownOpen]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-incite-navy"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
        <p className="text-red-700">{error}</p>
        <Link
          href="/dashboard/tickets"
          className="mt-4 inline-block text-incite-navy hover:text-incite-red transition-colors"
        >
          Back to Tickets
        </Link>
      </div>
    );
  }

  if (!ticket) {
    return (
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-md">
        <p className="text-yellow-700">Ticket not found</p>
        <Link
          href="/dashboard/tickets"
          className="mt-4 inline-block text-incite-navy hover:text-incite-red transition-colors"
        >
          Back to Tickets
        </Link>
      </div>
    );
  }

  const actionButton = (
    <Link
      href="/dashboard/tickets"
      className="text-incite-navy hover:text-incite-red transition-colors"
    >
      Back to Tickets
    </Link>
  );

  return (
    <PageContainer title="Ticket Details" actionButton={actionButton}>
      {/* Ticket Info Card */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden mb-6">
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div>
              <div className="flex items-center mb-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
                  {ticket.ticketNumber || `ID: ${ticket.id.substring(0, 8)}`}
                </span>
              </div>
              <h2 className="text-xl font-medium text-gray-900">{ticket.title}</h2>
              <p className="text-sm text-gray-500 mt-1">
                Created by {ticket.createdBy.name} on {new Date(ticket.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center mt-4 md:mt-0 space-x-3">
              <span
                className={`px-3 py-1 text-sm rounded-full ${getStatusBadgeClass(
                  ticket.status
                )}`}
              >
                {ticket.status}
              </span>
              <span
                className={`px-3 py-1 text-sm rounded-full ${getPriorityBadgeClass(
                  ticket.priority
                )}`}
              >
                {ticket.priority}
              </span>
            </div>
          </div>
          
          <div className="prose max-w-none mb-4">
            <p className="text-gray-700 whitespace-pre-wrap">{ticket.description}</p>
          </div>
          
          {/* Ticket Attachments */}
          {ticket.attachments && ticket.attachments.length > 0 && (
            <div className="mt-4 border-t pt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Attachments</h4>
              <ul className="space-y-2">
                {ticket.attachments.map((attachment) => (
                  <li key={attachment.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center">
                      <FiPaperclip className="mr-2 text-gray-500" />
                      <span className="text-sm">{attachment.filename}</span>
                      <span className="ml-2 text-xs text-gray-500">
                        ({formatFileSize(attachment.size)})
                      </span>
                    </div>
                    <a 
                      href={attachment.path}
                      download={attachment.filename}
                      className="text-incite-navy hover:text-incite-red"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiDownload />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      {/* Assignment & Actions */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 mb-6 p-6" style={{ overflow: 'visible' }}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4" style={{ overflow: 'visible' }}>
          {/* Assignment info */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Assignment</h3>
            <div>
              {ticket.assignedTo ? (
                <div className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2">
                    Assigned to: {ticket.assignedTo.name}
                  </span>
                  {userRole === "ADMIN" && (
                    <button
                      onClick={() => setIsAssignDropdownOpen(true)}
                      className="text-sm text-incite-navy hover:text-incite-red"
                    >
                      Change
                    </button>
                  )}
                </div>
              ) : (
                <span className="text-gray-500">Not assigned</span>
              )}
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mt-4 md:mt-0" style={{ overflow: 'visible' }}>
            {/* Status update dropdown */}
            {(userRole === "ADMIN" || userRole === "EMPLOYEE") && (
              <div className="relative" ref={statusDropdownRef} style={{ overflow: 'visible' }}>
                <button
                  onClick={() => setIsStatusUpdateOpen(!isStatusUpdateOpen)}
                  className="bg-incite-navy hover:bg-blue-950 text-white px-4 py-2 rounded transition-colors"
                >
                  Update Status
                </button>
                
                {isStatusUpdateOpen && (
                  <div 
                    className="absolute mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg right-0" 
                    style={{ zIndex: 9999, overflow: 'visible' }}
                  >
                    <div className="py-1">
                      <div className="px-3 py-1 text-xs font-medium text-gray-700 border-b border-gray-100">
                        Select Status
                      </div>
                      <div>
                        <div 
                          className={`px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center ${ticket?.status === "OPEN" ? "bg-blue-50" : ""}`} 
                          onClick={() => handleStatusUpdate("OPEN")}
                        >
                          <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                          Open
                        </div>
                        <div 
                          className={`px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center ${ticket?.status === "IN_PROGRESS" ? "bg-blue-50" : ""}`} 
                          onClick={() => handleStatusUpdate("IN_PROGRESS")}
                        >
                          <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
                          In Progress
                        </div>
                        <div 
                          className={`px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center ${ticket?.status === "RESOLVED" ? "bg-blue-50" : ""}`} 
                          onClick={() => handleStatusUpdate("RESOLVED")}
                        >
                          <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                          Resolved
                        </div>
                        <div 
                          className={`px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center ${ticket?.status === "CLOSED" ? "bg-blue-50" : ""}`} 
                          onClick={() => handleStatusUpdate("CLOSED")}
                        >
                          <span className="w-2 h-2 rounded-full bg-gray-500 mr-2"></span>
                          Closed
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Self-assign button (for employees) */}
            {userRole === "EMPLOYEE" && !ticket.assignedTo && (
              <button
                onClick={handleAssignToMe}
                className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded transition-colors"
                disabled={isAssigning}
              >
                {isAssigning ? "Assigning..." : "Assign to Me"}
              </button>
            )}
            
            {/* Assign button (for admins) */}
            {userRole === "ADMIN" && !isAssignDropdownOpen && (
              <div className="relative" ref={assignDropdownRef}>
                <button
                  onClick={() => setIsAssignDropdownOpen(true)}
                  className="bg-incite-red hover:bg-red-800 text-white px-4 py-2 rounded transition-colors"
                  disabled={loadingEmployees || isAssigning}
                >
                  {loadingEmployees ? "Loading..." : "Assign Ticket"}
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Assign to employee dropdown (for admins) */}
        {userRole === "ADMIN" && isAssignDropdownOpen && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 z-40" ref={assignDropdownRef}>
            <h4 className="font-medium text-gray-900 mb-2">Assign to Employee</h4>
            {loadingEmployees ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-incite-navy"></div>
              </div>
            ) : (
              <>
                <select
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy mb-3"
                  value={selectedEmployeeId}
                  onChange={(e) => setSelectedEmployeeId(e.target.value)}
                >
                  <option value="">Select an employee</option>
                  {employees.map((employee) => (
                    <option key={employee.id} value={employee.id}>
                      {employee.name} ({employee.assignedTicketCount || 0} tickets)
                    </option>
                  ))}
                </select>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setIsAssignDropdownOpen(false)}
                    className="text-gray-700 hover:text-gray-900 px-3 py-1 rounded transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAssignToEmployee}
                    className="bg-incite-navy hover:bg-blue-950 text-white px-3 py-1 rounded transition-colors"
                    disabled={!selectedEmployeeId || isAssigning}
                  >
                    {isAssigning ? "Assigning..." : "Assign"}
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
      
      {/* Comments section */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Comments</h3>
        
        <div className="space-y-6 mb-6">
          {!ticket.comments || ticket.comments.length === 0 ? (
            <p className="text-gray-500">No comments yet.</p>
          ) : (
            ticket.comments.map((comment) => (
              <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <p className="font-medium text-gray-900">{comment.user.name}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(comment.createdAt).toLocaleString()}
                  </p>
                </div>
                <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>
                
                {/* Comment Attachments */}
                {comment.attachments && comment.attachments.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-2">Attachments:</p>
                    <ul className="space-y-1">
                      {comment.attachments.map((attachment) => (
                        <li key={attachment.id} className="flex items-center justify-between p-1.5 bg-white rounded text-sm">
                          <div className="flex items-center">
                            <FiPaperclip className="mr-2 text-gray-500" size={14} />
                            <span>{attachment.filename}</span>
                            <span className="ml-2 text-xs text-gray-500">
                              ({formatFileSize(attachment.size)})
                            </span>
                          </div>
                          <a 
                            href={attachment.path}
                            download={attachment.filename}
                            className="text-incite-navy hover:text-incite-red"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FiDownload size={14} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
        
        {/* Add comment form with file upload */}
        <form onSubmit={handleSubmitComment}>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
              Add a comment
            </label>
            <textarea
              id="comment"
              rows={3}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy resize-none"
              placeholder="Type your comment here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          
          {/* File attachment section */}
          <div className="mb-4">
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
            
            <button
              type="button"
              onClick={triggerFileInput}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 border-dashed rounded-md text-sm text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-incite-navy"
            >
              <FiPaperclip className="mr-2" />
              Attach files
            </button>
            
            {fileError && (
              <p className="mt-1 text-sm text-incite-red">{fileError}</p>
            )}
            
            {selectedFiles.length > 0 && (
              <div className="mt-2 space-y-1">
                <ul className="space-y-1">
                  {selectedFiles.map((file, index) => (
                    <li key={index} className="flex justify-between items-center p-1.5 bg-gray-50 rounded text-sm">
                      <div className="flex items-center">
                        <FiPaperclip className="mr-2 text-gray-500" size={14} />
                        <span>{file.name}</span>
                        <span className="ml-2 text-xs text-gray-500">
                          ({(file.size / 1024).toFixed(1)} KB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-gray-500 hover:text-incite-red"
                      >
                        <FiX size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-incite-navy hover:bg-blue-950 text-white px-4 py-2 rounded transition-colors"
              disabled={isSubmittingComment || !comment.trim()}
            >
              {isSubmittingComment ? "Submitting..." : "Add Comment"}
            </button>
          </div>
        </form>
      </div>
    </PageContainer>
  );
} 