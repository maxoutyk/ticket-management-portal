"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PageContainer from "@/components/dashboard/PageContainer";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  assignedTicketCount?: number;
}

interface Ticket {
  id: string;
  title: string;
  status: string;
  priority: string;
  createdAt: string;
  createdBy: User;
  assignedTo: User | null;
  ticketNumber?: string;
}

export default function AllTicketsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [error, setError] = useState("");
  const userRole = session?.user?.role;
  
  // Assignment state
  const [assignModalOpen, setAssignModalOpen] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [employees, setEmployees] = useState<User[]>([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string>("");
  const [loadingEmployees, setLoadingEmployees] = useState(false);
  const [isAssigning, setIsAssigning] = useState(false);
  const [assignmentSuccess, setAssignmentSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      // Check if the user has the required role
      if (userRole !== "ADMIN" && userRole !== "EMPLOYEE") {
        router.push("/dashboard");
        return;
      }
      fetchTickets();
      
      // Fetch employees if user is admin
      if (userRole === "ADMIN") {
        fetchEmployees();
      }
    }
  }, [status, router, userRole]);

  const fetchTickets = async () => {
    try {
      const response = await fetch("/api/tickets", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch tickets");
      }

      const data = await response.json();
      setTickets(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching tickets:", error);
      setError("Failed to load tickets. Please try again later.");
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
  
  const openAssignModal = (ticketId: string) => {
    setSelectedTicketId(ticketId);
    setAssignModalOpen(true);
  };
  
  const closeAssignModal = () => {
    setSelectedTicketId(null);
    setSelectedEmployeeId("");
    setAssignModalOpen(false);
  };
  
  const handleAssignTicket = async () => {
    if (!selectedTicketId || !selectedEmployeeId) return;
    
    setIsAssigning(true);
    
    try {
      const response = await fetch(`/api/tickets/${selectedTicketId}`, {
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
      
      // Update the ticket in the local state
      setTickets(tickets.map(ticket => 
        ticket.id === selectedTicketId ? updatedTicket : ticket
      ));
      
      // Show success message
      setAssignmentSuccess("Ticket assigned successfully!");
      
      // Close the modal
      closeAssignModal();
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setAssignmentSuccess(null);
      }, 3000);
      
    } catch (error) {
      console.error("Error assigning ticket:", error);
      setError(error instanceof Error ? error.message : "Failed to assign ticket");
    } finally {
      setIsAssigning(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-incite-navy"></div>
      </div>
    );
  }

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
  
  const actionButtons = (
    <div className="flex space-x-3">
      {userRole === "ADMIN" && (
        <button className="bg-incite-navy hover:bg-blue-950 text-white px-4 py-2 rounded transition-colors">
          Export Tickets
        </button>
      )}
      <Link 
        href="/dashboard/tickets/create"
        className="bg-incite-red hover:bg-red-800 text-white px-4 py-2 rounded transition-colors"
      >
        Create New Ticket
      </Link>
    </div>
  );

  return (
    <PageContainer title="All Tickets" actionButton={actionButtons}>
      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}
      
      {assignmentSuccess && (
        <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
          <p className="text-green-700 text-sm">{assignmentSuccess}</p>
        </div>
      )}

      {tickets.length === 0 ? (
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-8 text-center">
          <p className="text-gray-500">No tickets found in the system.</p>
          <Link 
            href="/dashboard/tickets/create"
            className="inline-block mt-4 bg-incite-red hover:bg-red-800 text-white px-4 py-2 rounded transition-colors"
          >
            Create New Ticket
          </Link>
        </div>
      ) : (
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Ticket
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Submitted By
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Priority
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Assigned To
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Created
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tickets.map((ticket) => (
                  <tr key={ticket.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">
                      <div className="flex flex-col">
                        <span className="text-gray-500 text-xs font-medium mb-1">
                          {ticket.ticketNumber || ticket.id.substring(0, 8)}
                        </span>
                        <span className="font-medium">{ticket.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{ticket.createdBy.name}</div>
                      <div className="text-sm text-gray-500">{ticket.createdBy.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
                          ticket.status
                        )}`}
                      >
                        {ticket.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityBadgeClass(
                          ticket.priority
                        )}`}
                      >
                        {ticket.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {ticket.assignedTo ? (
                        <div>
                          <div className="text-sm text-gray-900">{ticket.assignedTo.name}</div>
                          <div className="text-sm text-gray-500">{ticket.assignedTo.email}</div>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-500">Unassigned</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(ticket.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <Link
                          href={`/dashboard/tickets/${ticket.id}`}
                          className="text-incite-navy hover:text-incite-red"
                        >
                          View
                        </Link>
                        {userRole === "ADMIN" && (
                          <button
                            onClick={() => openAssignModal(ticket.id)}
                            className="text-incite-red hover:text-red-800"
                          >
                            Assign
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {/* Assignment Modal */}
      {assignModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Assign Ticket</h3>
              <button
                onClick={closeAssignModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {loadingEmployees ? (
              <div className="flex justify-center my-4">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-incite-navy"></div>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <label htmlFor="employeeSelect" className="block text-sm font-medium text-gray-700 mb-1">
                    Select an employee to assign
                  </label>
                  <select
                    id="employeeSelect"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy"
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
                </div>
                
                <div className="flex justify-end space-x-2 mt-6">
                  <button
                    onClick={closeAssignModal}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAssignTicket}
                    className="px-4 py-2 bg-incite-navy text-white rounded-md hover:bg-blue-950 disabled:opacity-50"
                    disabled={!selectedEmployeeId || isAssigning}
                  >
                    {isAssigning ? "Assigning..." : "Assign Ticket"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </PageContainer>
  );
} 