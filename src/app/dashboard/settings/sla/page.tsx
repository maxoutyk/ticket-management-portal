"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  PlusIcon,
  ClockIcon,
  CalendarIcon,
  ScaleIcon,
  PencilIcon,
  TrashIcon,
  FunnelIcon,
  ArrowLeftIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/24/outline";

interface Organization {
  id: string;
  name: string;
}

type SlaPolicy = {
  id: string;
  name: string;
  description: string | null;
  responseTimeHours: number;
  resolutionTimeHours: number;
  active: boolean;
  priorityLevel: string;
  organizationId: string | null;
  organization: Organization | null;
};

type BusinessHours = {
  id: string;
  dayOfWeek: number;
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
  isWorkDay: boolean;
};

type PriorityMultiplier = {
  id: string;
  priority: string;
  multiplier: number;
};

interface PaginationData {
  total: number;
  pages: number;
  currentPage: number;
  limit: number;
}

export default function SlaManagementPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [slaPolicies, setSlaPolicies] = useState<SlaPolicy[]>([]);
  const [businessHours, setBusinessHours] = useState<BusinessHours[]>([]);
  const [priorityMultipliers, setPriorityMultipliers] = useState<PriorityMultiplier[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingBusinessHours, setLoadingBusinessHours] = useState(true);
  const [loadingMultipliers, setLoadingMultipliers] = useState(true);
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [selectedOrgId, setSelectedOrgId] = useState<string | "null" | "">("");
  const [pagination, setPagination] = useState<PaginationData>({
    total: 0,
    pages: 0,
    currentPage: 1,
    limit: 10
  });

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  useEffect(() => {
    // Redirect if not admin
    if (status === "authenticated" && session?.user?.role !== "ADMIN") {
      router.push("/dashboard");
    }
  }, [session, status, router]);

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await fetch("/api/organizations");
        if (response.ok) {
          const data = await response.json();
          setOrganizations(data);
        } else {
          console.error("Failed to fetch organizations");
        }
      } catch (error) {
        console.error("Error fetching organizations:", error);
      }
    };
    
    fetchOrganizations();
  }, []);

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        let url = `/api/sla/policies?page=${pagination.currentPage}&limit=${pagination.limit}`;
        if (selectedOrgId) {
          url += `&organizationId=${selectedOrgId}`;
        }
        
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
          setSlaPolicies(data.policies);
          setPagination(data.pagination);
        } else {
          console.error("Failed to fetch SLA policies");
        }
      } catch (error) {
        console.error("Error fetching SLA policies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPolicies();
  }, [selectedOrgId, pagination.currentPage, pagination.limit]);

  useEffect(() => {
    const fetchBusinessHours = async () => {
      try {
        const response = await fetch("/api/sla/business-hours");
        const data = await response.json();
        if (response.ok) {
          setBusinessHours(data);
        } else {
          console.error("Failed to fetch business hours");
        }
      } catch (error) {
        console.error("Error fetching business hours:", error);
      } finally {
        setLoadingBusinessHours(false);
      }
    };

    fetchBusinessHours();
  }, []);

  useEffect(() => {
    const fetchPriorityMultipliers = async () => {
      try {
        const response = await fetch("/api/sla/priority-multipliers");
        const data = await response.json();
        if (response.ok) {
          setPriorityMultipliers(data);
        } else {
          console.error("Failed to fetch priority multipliers");
        }
      } catch (error) {
        console.error("Error fetching priority multipliers:", error);
      } finally {
        setLoadingMultipliers(false);
      }
    };

    fetchPriorityMultipliers();
  }, []);

  const handleDeletePolicy = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this SLA policy?")) {
      try {
        const response = await fetch(`/api/sla/policies/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          setSlaPolicies(slaPolicies.filter(policy => policy.id !== id));
        } else {
          const error = await response.json();
          alert(`Failed to delete: ${error.message}`);
        }
      } catch (error) {
        console.error("Error deleting SLA policy:", error);
        alert("An error occurred while deleting the policy.");
      }
    }
  };

  const handleOrgFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedOrgId(value);
  };

  const handlePageChange = (newPage: number) => {
    setPagination(prev => ({ ...prev, currentPage: newPage }));
  };

  // Format time for display
  const formatTime = (hours: number, minutes: number): string => {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">SLA Management</h1>
        <div className="flex space-x-4">
          <Link 
            href="/dashboard/settings/sla/reports" 
            className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 py-2 px-4 rounded inline-flex items-center"
          >
            <DocumentChartBarIcon className="h-5 w-5 mr-2" />
            View Reports
          </Link>
          <Link 
            href="/dashboard/settings/sla/new" 
            className="bg-incite-navy hover:bg-blue-700 text-white py-2 px-4 rounded inline-flex items-center"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            New SLA Policy
          </Link>
        </div>
      </div>

      {/* SLA Policies Section */}
      <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center">
            <ClockIcon className="h-6 w-6 text-incite-navy mr-2" />
            <h2 className="text-lg font-medium text-gray-900">SLA Policies</h2>
          </div>
          <div className="flex items-center">
            <FunnelIcon className="h-5 w-5 text-gray-500 mr-2" />
            <select
              value={selectedOrgId}
              onChange={handleOrgFilterChange}
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
            >
              <option value="">All Organizations</option>
              <option value="null">Global Policies Only</option>
              {organizations.map(org => (
                <option key={org.id} value={org.id}>{org.name}</option>
              ))}
            </select>
          </div>
        </div>

        {slaPolicies.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            <p>No SLA policies found. Create a new policy to get started.</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Organization
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Priority
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Response Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Resolution Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {slaPolicies.map((policy) => (
                    <tr key={policy.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{policy.name}</div>
                        {policy.description && (
                          <div className="text-sm text-gray-500">{policy.description}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {policy.organization ? policy.organization.name : 'Global Policy'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          policy.priorityLevel === "CRITICAL" ? "bg-red-100 text-red-800" :
                          policy.priorityLevel === "HIGH" ? "bg-orange-100 text-orange-800" :
                          policy.priorityLevel === "MEDIUM" ? "bg-yellow-100 text-yellow-800" :
                          "bg-green-100 text-green-800"
                        }`}>
                          {policy.priorityLevel}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {policy.responseTimeHours} hours
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {policy.resolutionTimeHours} hours
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          policy.active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}>
                          {policy.active ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link
                          href={`/dashboard/settings/sla/${policy.id}/edit`}
                          className="text-incite-navy hover:text-blue-900 mr-4"
                          title="Edit Policy"
                        >
                          <PencilIcon className="h-5 w-5 inline" />
                          <span className="sr-only">Edit</span>
                        </Link>
                        <button
                          onClick={() => handleDeletePolicy(policy.id)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete Policy"
                        >
                          <TrashIcon className="h-5 w-5 inline" />
                          <span className="sr-only">Delete</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            {pagination.pages > 1 && (
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-700">
                    Showing {((pagination.currentPage - 1) * pagination.limit) + 1} to{" "}
                    {Math.min(pagination.currentPage * pagination.limit, pagination.total)} of{" "}
                    {pagination.total} results
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handlePageChange(pagination.currentPage - 1)}
                      disabled={pagination.currentPage === 1}
                      className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-1 border rounded-md text-sm font-medium ${
                          page === pagination.currentPage
                            ? "bg-incite-navy text-white border-incite-navy"
                            : "border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => handlePageChange(pagination.currentPage + 1)}
                      disabled={pagination.currentPage === pagination.pages}
                      className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Business Hours Section */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="flex items-center p-4 border-b border-gray-200 bg-gray-50">
            <CalendarIcon className="h-6 w-6 text-incite-navy mr-2" />
            <h2 className="text-lg font-medium text-gray-900">Business Hours</h2>
          </div>
          
          {loadingBusinessHours ? (
            <div className="p-6 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-incite-navy mx-auto"></div>
              <p className="mt-2 text-sm text-gray-500">Loading business hours...</p>
            </div>
          ) : businessHours.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              <p>No business hours configured.</p>
              <Link 
                href="/dashboard/settings/sla/business-hours" 
                className="mt-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 py-2 px-4 rounded inline-flex items-center"
              >
                Configure Business Hours
              </Link>
            </div>
          ) : (
            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Day
                      </th>
                      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Hours
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {businessHours.map((hours) => (
                      <tr key={hours.id}>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {dayNames[hours.dayOfWeek]}
                          </div>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            hours.isWorkDay ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                          }`}>
                            {hours.isWorkDay ? "Working Day" : "Non-Working Day"}
                          </span>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                          {hours.isWorkDay ? (
                            `${formatTime(hours.startHour, hours.startMinute)} - ${formatTime(hours.endHour, hours.endMinute)}`
                          ) : (
                            "Closed"
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex justify-end">
                <Link 
                  href="/dashboard/settings/sla/business-hours" 
                  className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 py-2 px-4 rounded inline-flex items-center"
                >
                  <PencilIcon className="h-4 w-4 mr-1" />
                  Edit Business Hours
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Priority Multipliers Section */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="flex items-center p-4 border-b border-gray-200 bg-gray-50">
            <ScaleIcon className="h-6 w-6 text-incite-navy mr-2" />
            <h2 className="text-lg font-medium text-gray-900">Priority Multipliers</h2>
          </div>
          
          {loadingMultipliers ? (
            <div className="p-6 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-incite-navy mx-auto"></div>
              <p className="mt-2 text-sm text-gray-500">Loading priority multipliers...</p>
            </div>
          ) : priorityMultipliers.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              <p>No priority multipliers configured.</p>
              <Link 
                href="/dashboard/settings/sla/priority-multipliers" 
                className="mt-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 py-2 px-4 rounded inline-flex items-center"
              >
                Configure Priority Multipliers
              </Link>
            </div>
          ) : (
            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Priority
                      </th>
                      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Multiplier
                      </th>
                      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Effect
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {priorityMultipliers.map((multiplier) => (
                      <tr key={multiplier.id}>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            multiplier.priority === "CRITICAL" ? "bg-red-100 text-red-800" :
                            multiplier.priority === "HIGH" ? "bg-orange-100 text-orange-800" :
                            multiplier.priority === "MEDIUM" ? "bg-yellow-100 text-yellow-800" :
                            "bg-green-100 text-green-800"
                          }`}>
                            {multiplier.priority}
                          </span>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                          {multiplier.multiplier}×
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                          {multiplier.multiplier < 1 
                            ? `${Math.round((1 - multiplier.multiplier) * 100)}% faster response/resolution`
                            : multiplier.multiplier > 1 
                              ? `${Math.round((multiplier.multiplier - 1) * 100)}% longer response/resolution`
                              : "Standard response/resolution time"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex justify-end">
                <Link 
                  href="/dashboard/settings/sla/priority-multipliers" 
                  className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 py-2 px-4 rounded inline-flex items-center"
                >
                  <PencilIcon className="h-4 w-4 mr-1" />
                  Edit Priority Multipliers
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 