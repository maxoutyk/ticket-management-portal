"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Ticket {
  id: string;
  title: string;
  status: string;
  priority: string;
  createdAt: string;
  createdBy?: {
    id: string;
    name: string;
    email: string;
    role?: string;
  };
  assignedTo?: {
    id: string;
    name: string;
    email: string;
  } | null;
}

interface TicketStats {
  openTickets: number;
  inProgressTickets: number;
  resolvedTickets: number;
  closedTickets: number;
  totalTickets: number;
  assignedTickets?: number;
  unassignedTickets?: number;
  criticalTickets?: number;
  highPriorityTickets?: number;
}

interface AssignedTicketStats {
  open: number;
  inProgress: number;
  resolved: number;
  critical: number;
  total: number;
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [assignedTickets, setAssignedTickets] = useState<Ticket[]>([]);
  const [stats, setStats] = useState<TicketStats>({
    openTickets: 0,
    inProgressTickets: 0,
    resolvedTickets: 0,
    closedTickets: 0,
    totalTickets: 0
  });
  const [assignedStats, setAssignedStats] = useState<AssignedTicketStats>({
    open: 0,
    inProgress: 0,
    resolved: 0,
    critical: 0,
    total: 0
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      fetchTickets();
    }
  }, [status, router]);

  const fetchTickets = async () => {
    try {
      // For employees, fetch both their created tickets and assigned tickets
      if (session?.user?.role === "EMPLOYEE") {
        let createdData: Ticket[] = [];
        let assignedData: Ticket[] = [];
        
        try {
          const createdResponse = await fetch("/api/tickets?my=true");
          if (createdResponse.ok) {
            createdData = await createdResponse.json();
          }
        } catch (err) {
          console.error("Error fetching created tickets:", err);
        }
        
        try {
          const assignedResponse = await fetch("/api/tickets/assigned");
          if (assignedResponse.ok) {
            assignedData = await assignedResponse.json();
          }
        } catch (err) {
          console.error("Error fetching assigned tickets:", err);
        }
        
        // Store created and assigned tickets separately
        setTickets(createdData);
        setAssignedTickets(assignedData);
        
        // Calculate assigned ticket stats
        const assignedTicketStats = {
          open: assignedData.filter((t: Ticket) => t.status === "OPEN").length,
          inProgress: assignedData.filter((t: Ticket) => t.status === "IN_PROGRESS").length,
          resolved: assignedData.filter((t: Ticket) => t.status === "RESOLVED").length,
          critical: assignedData.filter((t: Ticket) => t.priority === "CRITICAL").length,
          total: assignedData.length
        };
        setAssignedStats(assignedTicketStats);
        
        // Calculate combined stats
        const combinedTickets = [...createdData];
        assignedData.forEach((ticket: Ticket) => {
          // Only add if not already in the array (avoiding duplicates if user created and is assigned to same ticket)
          if (!combinedTickets.some(t => t.id === ticket.id)) {
            combinedTickets.push(ticket);
          }
        });
        
        // Calculate statistics for employee
        const ticketStats = {
          openTickets: combinedTickets.filter(t => t.status === "OPEN").length,
          inProgressTickets: combinedTickets.filter(t => t.status === "IN_PROGRESS").length,
          resolvedTickets: combinedTickets.filter(t => t.status === "RESOLVED").length,
          closedTickets: combinedTickets.filter(t => t.status === "CLOSED").length,
          totalTickets: combinedTickets.length
        };
        
        setStats(ticketStats);
      } else if (session?.user?.role === "ADMIN") {
        // For admins, fetch all tickets in the system
        let createdData: Ticket[] = [];
        let allTicketsData: Ticket[] = [];
        
        try {
          const createdResponse = await fetch("/api/tickets?my=true");
          if (createdResponse.ok) {
            createdData = await createdResponse.json();
          }
        } catch (err) {
          console.error("Error fetching created tickets:", err);
        }
        
        try {
          const allTicketsResponse = await fetch("/api/tickets");
          if (allTicketsResponse.ok) {
            allTicketsData = await allTicketsResponse.json();
          }
        } catch (err) {
          console.error("Error fetching all tickets:", err);
        }
        
        // Store tickets
        setTickets(createdData);
        
        // Calculate admin statistics
        const assignedTickets = allTicketsData.filter((t: Ticket) => t.assignedTo !== null);
        const unassignedTickets = allTicketsData.filter((t: Ticket) => t.assignedTo === null);
        const criticalTickets = allTicketsData.filter((t: Ticket) => t.priority === "CRITICAL");
        const highPriorityTickets = allTicketsData.filter((t: Ticket) => t.priority === "HIGH");
        
        const ticketStats = {
          openTickets: allTicketsData.filter((t: Ticket) => t.status === "OPEN").length,
          inProgressTickets: allTicketsData.filter((t: Ticket) => t.status === "IN_PROGRESS").length,
          resolvedTickets: allTicketsData.filter((t: Ticket) => t.status === "RESOLVED").length,
          closedTickets: allTicketsData.filter((t: Ticket) => t.status === "CLOSED").length,
          totalTickets: allTicketsData.length,
          assignedTickets: assignedTickets.length,
          unassignedTickets: unassignedTickets.length,
          criticalTickets: criticalTickets.length, 
          highPriorityTickets: highPriorityTickets.length
        };
        
        setStats(ticketStats);
      } else {
        // For regular users, just show their created tickets
        let userTickets: Ticket[] = [];
        
        try {
          const response = await fetch("/api/tickets?my=true");
          if (response.ok) {
            userTickets = await response.json();
          }
        } catch (err) {
          console.error("Error fetching user tickets:", err);
        }
        
        setTickets(userTickets);
        
        // Calculate statistics from fetched tickets
        const ticketStats = userTickets.reduce((acc: TicketStats, ticket: Ticket) => {
          acc.totalTickets++;
          
          switch (ticket.status) {
            case "OPEN":
              acc.openTickets++;
              break;
            case "IN_PROGRESS":
              acc.inProgressTickets++;
              break;
            case "RESOLVED":
              acc.resolvedTickets++;
              break;
            case "CLOSED":
              acc.closedTickets++;
              break;
          }
          
          return acc;
        }, {
          openTickets: 0,
          inProgressTickets: 0,
          resolvedTickets: 0,
          closedTickets: 0,
          totalTickets: 0
        });
        
        setStats(ticketStats);
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
      setError("Failed to load dashboard data. Please try again later.");
    } finally {
      setIsLoading(false);
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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-incite-navy"></div>
      </div>
    );
  }

  // Get 3 most recent tickets for display
  const recentTickets = [...tickets].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ).slice(0, 3);

  // For employees, get assigned tickets to highlight
  const isEmployee = session?.user?.role === "EMPLOYEE";
  const recentAssignedTickets = isEmployee 
    ? [...assignedTickets].sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ).slice(0, 3)
    : [];

  const TicketCard = ({ ticket }: { ticket: Ticket }) => (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-md font-medium text-gray-900 truncate">{ticket.title}</h3>
        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeClass(ticket.status)}`}>
          {ticket.status}
        </span>
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityBadgeClass(ticket.priority)}`}>
          {ticket.priority}
        </span>
        <span className="text-xs text-gray-500">
          {new Date(ticket.createdAt).toLocaleDateString()}
        </span>
      </div>
      
      <div className="mt-3">
        <Link 
          href={`/dashboard/tickets/${ticket.id}`}
          className="text-sm text-incite-navy hover:text-incite-red transition-colors"
        >
          View Details →
        </Link>
      </div>
    </div>
  );

  // KPI Card component for assigned tickets
  const KpiCard = ({ title, value, icon, color }: { title: string, value: number, icon: React.ReactNode, color: string }) => (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-4 flex items-center">
      <div className={`${color} p-3 rounded-full mr-4`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h1>
      
      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}
      
      {/* Show different KPI cards for admin */}
      {session?.user?.role === "ADMIN" ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Tickets</p>
                  <p className="text-3xl font-bold text-purple-600">{stats.totalTickets}</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Assigned</p>
                  <p className="text-3xl font-bold text-green-600">{stats.assignedTickets}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Unassigned</p>
                  <p className="text-3xl font-bold text-orange-600">{stats.unassignedTickets}</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Critical Priority</p>
                  <p className="text-3xl font-bold text-red-600">{stats.criticalTickets}</p>
                </div>
                <div className="bg-red-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Open Tickets</p>
                  <p className="text-3xl font-bold text-blue-600">{stats.openTickets}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">In Progress</p>
                  <p className="text-3xl font-bold text-yellow-600">{stats.inProgressTickets}</p>
                </div>
                <div className="bg-yellow-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Resolved</p>
                  <p className="text-3xl font-bold text-green-600">{stats.resolvedTickets}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">High Priority</p>
                  <p className="text-3xl font-bold text-orange-600">{stats.highPriorityTickets}</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Admin Recent Tickets Section */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-800">Recent Tickets</h2>
              <Link href="/dashboard/all-tickets" className="bg-incite-navy hover:bg-blue-950 text-white px-4 py-2 rounded transition-colors">
                View All Tickets
              </Link>
            </div>
            
            {recentTickets.length > 0 ? (
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
                      {recentTickets.map((ticket) => (
                        <tr key={ticket.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {ticket.title}
                            </div>
                            <div className="text-sm text-gray-500">ID: {ticket.id}</div>
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
                              <Link
                                href={`/dashboard/all-tickets`}
                                className="text-incite-red hover:text-red-800"
                              >
                                Assign
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-4 text-center">
                <p className="text-gray-500">No tickets created yet</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Open Tickets</p>
                <p className="text-3xl font-bold text-blue-600">{stats.openTickets}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">In Progress</p>
                <p className="text-3xl font-bold text-yellow-600">{stats.inProgressTickets}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Resolved</p>
                <p className="text-3xl font-bold text-green-600">{stats.resolvedTickets}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Employee dashboard sections side by side */}
      {isEmployee ? (
        <>
          {/* KPI cards for assigned tickets */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Assigned Tickets Overview</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KpiCard 
                title="Assigned Open" 
                value={assignedStats.open}
                color="bg-blue-100"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>}
              />
              <KpiCard 
                title="In Progress" 
                value={assignedStats.inProgress}
                color="bg-yellow-100"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>}
              />
              <KpiCard 
                title="Critical Priority" 
                value={assignedStats.critical}
                color="bg-red-100"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>}
              />
              <KpiCard 
                title="Total Assigned" 
                value={assignedStats.total}
                color="bg-purple-100"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>}
              />
            </div>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Recent tickets */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-800">Recent Tickets</h2>
                <Link href="/dashboard/tickets" className="text-sm text-incite-navy hover:text-incite-red">
                  View All
                </Link>
              </div>
              
              <div>
                {recentTickets.length > 0 ? (
                  <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Ticket
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Priority
                            </th>
                            <th scope="col" className="relative px-4 py-2">
                              <span className="sr-only">Actions</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {recentTickets.map((ticket) => (
                            <tr key={ticket.id} className="hover:bg-gray-50">
                              <td className="px-4 py-2 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900 truncate">
                                  {ticket.title}
                                </div>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                <span
                                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
                                    ticket.status
                                  )}`}
                                >
                                  {ticket.status}
                                </span>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                <span
                                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityBadgeClass(
                                    ticket.priority
                                  )}`}
                                >
                                  {ticket.priority}
                                </span>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap text-right text-sm font-medium">
                                <Link
                                  href={`/dashboard/tickets/${ticket.id}`}
                                  className="text-incite-navy hover:text-incite-red"
                                >
                                  View
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-4 text-center">
                    <p className="text-gray-500">No tickets created yet</p>
                    <Link href="/dashboard/tickets/create" className="inline-block mt-2 text-incite-navy hover:text-incite-red">
                      Create a ticket
                    </Link>
                  </div>
                )}
              </div>
            </div>
            
            {/* Assigned tickets */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-800">Assigned to Me</h2>
                <Link href="/dashboard/assigned-tickets" className="text-sm text-incite-navy hover:text-incite-red">
                  View All
                </Link>
              </div>
              
              <div>
                {recentAssignedTickets.length > 0 ? (
                  <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Ticket
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Priority
                            </th>
                            <th scope="col" className="relative px-4 py-2">
                              <span className="sr-only">Actions</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {recentAssignedTickets.map((ticket) => (
                            <tr key={ticket.id} className="hover:bg-gray-50">
                              <td className="px-4 py-2 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900 truncate">
                                  {ticket.title}
                                </div>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                <span
                                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
                                    ticket.status
                                  )}`}
                                >
                                  {ticket.status}
                                </span>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                <span
                                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityBadgeClass(
                                    ticket.priority
                                  )}`}
                                >
                                  {ticket.priority}
                                </span>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap text-right text-sm font-medium">
                                <Link
                                  href={`/dashboard/tickets/${ticket.id}`}
                                  className="text-incite-navy hover:text-incite-red"
                                >
                                  View
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-4 text-center">
                    <p className="text-gray-500">No tickets assigned to you</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : session?.user?.role !== "ADMIN" ? (
        /* Regular user dashboard */
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-800">Recent Tickets</h2>
            <Link href="/dashboard/tickets" className="text-sm text-incite-navy hover:text-incite-red">
              View All
            </Link>
          </div>
          
          {recentTickets.length > 0 ? (
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
                        Created
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentTickets.map((ticket) => (
                      <tr key={ticket.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {ticket.title}
                          </div>
                          <div className="text-sm text-gray-500">ID: {ticket.id}</div>
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(ticket.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link
                            href={`/dashboard/tickets/${ticket.id}`}
                            className="text-incite-navy hover:text-incite-red"
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-4 text-center">
              <p className="text-gray-500">No tickets created yet</p>
              <Link href="/dashboard/tickets/create" className="inline-block mt-2 text-incite-navy hover:text-incite-red">
                Create a ticket
              </Link>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
} 