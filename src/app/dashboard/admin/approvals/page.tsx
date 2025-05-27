"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  CheckCircleIcon,
  XCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

type PendingUser = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  organization: {
    id: string;
    name: string;
  } | null;
};

type PaginationData = {
  total: number;
  pages: number;
  currentPage: number;
  limit: number;
};

export default function ApprovalsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [pendingUsers, setPendingUsers] = useState<PendingUser[]>([]);
  const [pagination, setPagination] = useState<PaginationData>({
    total: 0,
    pages: 0,
    currentPage: 1,
    limit: 10,
  });
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Session status:", status);
    console.log("Session data:", session);

    if (status === "authenticated" && session?.user?.role !== "ADMIN") {
      console.log("Non-admin user detected, redirecting");
      router.push("/dashboard");
    }
  }, [session, status, router]);

  useEffect(() => {
    if (status === "authenticated") {
      console.log("Authenticated, fetching users");
      fetchPendingUsers(pagination.currentPage);
    } else if (status === "unauthenticated") {
      console.log("Not authenticated, redirecting to login");
      router.push("/login");
    }
  }, [pagination.currentPage, status, router]);

  const fetchPendingUsers = async (page: number) => {
    try {
      console.log("Fetching pending users for page:", page);
      setError(null);
      const response = await fetch(
        `/api/users/approve?page=${page}&limit=${pagination.limit}`,
        {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      console.log("API Response status:", response.status);
      const data = await response.json();
      console.log("API Response data:", data);
      
      if (response.ok) {
        setPendingUsers(data.users);
        setPagination(prev => ({
          ...prev,
          ...data.pagination,
        }));
      } else {
        const errorMessage = data.error || "Failed to fetch pending users";
        const errorDetails = data.details ? `: ${data.details}` : "";
        setError(`${errorMessage}${errorDetails}`);
        console.error("Failed to fetch pending users:", { error: data.error, details: data.details });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
      setError(errorMessage);
      console.error("Error fetching pending users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (userId: string) => {
    setProcessing(userId);
    setError(null);
    try {
      const response = await fetch("/api/users/approve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();

      if (response.ok) {
        setPendingUsers(prev => prev.filter(user => user.id !== userId));
        setPagination(prev => ({
          ...prev,
          total: prev.total - 1,
        }));
      } else {
        setError(data.error || "Failed to approve user");
        console.error("Failed to approve user:", data.error);
      }
    } catch (error) {
      setError("An unexpected error occurred");
      console.error("Error approving user:", error);
    } finally {
      setProcessing(null);
    }
  };

  const handleReject = async (userId: string) => {
    setProcessing(userId);
    setError(null);
    try {
      const response = await fetch("/api/users/approve", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();

      if (response.ok) {
        setPendingUsers(prev => prev.filter(user => user.id !== userId));
        setPagination(prev => ({
          ...prev,
          total: prev.total - 1,
        }));
      } else {
        setError(data.error || "Failed to reject user");
        console.error("Failed to reject user:", data.error);
      }
    } catch (error) {
      setError("An unexpected error occurred");
      console.error("Error rejecting user:", error);
    } finally {
      setProcessing(null);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="p-6">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-incite-navy mx-auto"></div>
      </div>
    );
  }

  if (status === "authenticated" && session?.user?.role !== "ADMIN") {
    return <div className="p-6">Access denied. Admin privileges required.</div>;
  }

  return (
    <div className="p-6">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="flex items-center p-4 border-b border-gray-200 bg-gray-50">
          <UserGroupIcon className="h-6 w-6 text-incite-navy mr-2" />
          <h2 className="text-lg font-medium text-gray-900">
            Pending User Approvals
          </h2>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border-l-4 border-red-500">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {!error && pendingUsers.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No pending approvals at this time.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Organization
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Registered
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pendingUsers.map(user => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {user.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {user.organization?.name || "N/A"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => handleApprove(user.id)}
                          disabled={processing === user.id}
                          className="text-green-600 hover:text-green-900 disabled:opacity-50"
                        >
                          <CheckCircleIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleReject(user.id)}
                          disabled={processing === user.id}
                          className="text-red-600 hover:text-red-900 disabled:opacity-50"
                        >
                          <XCircleIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {pagination.pages > 1 && (
          <div className="px-6 py-4 border-t border-gray-200">
            <nav className="flex items-center justify-between">
              <div className="flex-1 flex justify-between">
                <button
                  onClick={() =>
                    setPagination(prev => ({
                      ...prev,
                      currentPage: Math.max(1, prev.currentPage - 1),
                    }))
                  }
                  disabled={pagination.currentPage === 1}
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={() =>
                    setPagination(prev => ({
                      ...prev,
                      currentPage: Math.min(prev.pages, prev.currentPage + 1),
                    }))
                  }
                  disabled={pagination.currentPage === pagination.pages}
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
} 