"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import PageContainer from "@/components/dashboard/PageContainer";

export default function MigrationPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<any>(null);

  const runTicketNumberMigration = async () => {
    if (session?.user?.role !== "ADMIN") {
      setError("Only administrators can run migrations");
      return;
    }

    setIsLoading(true);
    setMessage("");
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/tickets/setup-migrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to run migration");
      }

      setMessage(data.message);
      setResult(data);
    } catch (error) {
      console.error("Migration error:", error);
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-incite-navy"></div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  if (session?.user?.role !== "ADMIN") {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
        <p className="text-red-700">You do not have permission to access this page.</p>
      </div>
    );
  }

  return (
    <PageContainer title="System Migrations">
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Database Migrations</h2>
        
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-2">Ticket Number Migration</h3>
          <p className="text-gray-600 mb-4">
            This will generate ticket numbers for any existing tickets in the system that don't have one.
            The format will be IG-YYYYMMDD-XXXX.
          </p>
          
          <button
            onClick={runTicketNumberMigration}
            disabled={isLoading}
            className="bg-incite-navy hover:bg-blue-950 text-white px-4 py-2 rounded transition-colors disabled:opacity-50"
          >
            {isLoading ? "Running..." : "Run Migration"}
          </button>
          
          {message && (
            <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded-md">
              <p className="text-green-700">{message}</p>
            </div>
          )}
          
          {error && (
            <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
              <p className="text-red-700">{error}</p>
            </div>
          )}
          
          {result && result.updatedTickets && result.updatedTickets.length > 0 && (
            <div className="mt-6">
              <h4 className="text-md font-medium mb-2">Updated Tickets</h4>
              <div className="max-h-60 overflow-y-auto border rounded">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ticket ID
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ticket Number
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {result.updatedTickets.map((ticket: any) => (
                      <tr key={ticket.id}>
                        <td className="px-4 py-2 text-sm text-gray-500">{ticket.id}</td>
                        <td className="px-4 py-2 text-sm font-medium">{ticket.ticketNumber}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageContainer>
  );
} 