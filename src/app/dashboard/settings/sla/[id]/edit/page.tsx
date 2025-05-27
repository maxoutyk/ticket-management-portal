"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { use } from "react";

interface Organization {
  id: string;
  name: string;
}

interface SlaPolicy {
  id: string;
  name: string;
  description: string | null;
  responseTimeHours: number;
  resolutionTimeHours: number;
  active: boolean;
  priorityLevel: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  organizationId: string | null;
  organization: Organization | null;
}

interface EditSlaPolicyPageProps {
  params: Promise<{ id: string }>;
}

export default function EditSlaPolicyPage({ params }: EditSlaPolicyPageProps) {
  const { id } = use(params);
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [formData, setFormData] = useState<Partial<SlaPolicy>>({
    name: "",
    description: "",
    responseTimeHours: 24,
    resolutionTimeHours: 72,
    active: true,
    priorityLevel: "MEDIUM",
    organizationId: null,
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated" && session.user.role !== "ADMIN") {
      router.push("/dashboard");
    } else if (status === "authenticated") {
      fetchPolicy();
      fetchOrganizations();
    }
  }, [status, router, session]);

  const fetchPolicy = async () => {
    try {
      const response = await fetch(`/api/sla/policies/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch policy");
      }
      const data = await response.json();
      setFormData(data);
    } catch (error) {
      console.error("Error fetching policy:", error);
      setError("Failed to load policy details");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchOrganizations = async () => {
    try {
      const response = await fetch("/api/organizations");
      if (!response.ok) {
        throw new Error("Failed to fetch organizations");
      }
      const data = await response.json();
      setOrganizations(data);
    } catch (error) {
      console.error("Error fetching organizations:", error);
      setError("Failed to load organizations");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError("");

    try {
      const response = await fetch(`/api/sla/policies/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update policy");
      }

      router.push("/dashboard/settings/sla");
    } catch (error) {
      console.error("Error updating policy:", error);
      setError(error instanceof Error ? error.message : "Failed to update policy");
    } finally {
      setIsSaving(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    let processedValue: string | number | boolean | null = value;

    if (type === "number") {
      processedValue = value === "" ? 0 : Number(value);
    } else if (name === "organizationId") {
      processedValue = value === "" ? null : value;
    } else if (type === "checkbox") {
      processedValue = (e.target as HTMLInputElement).checked;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: processedValue,
    }));
  };

  if (status === "loading" || isLoading) {
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
      <div className="mb-6">
        <Link
          href="/dashboard/settings/sla"
          className="text-gray-500 hover:text-gray-700 flex items-center"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Back to SLA Management
        </Link>
      </div>

      <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-lg font-medium text-gray-900">Edit SLA Policy</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Policy Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name || ""}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-incite-navy focus:border-incite-navy"
                placeholder="e.g., Standard SLA Policy"
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description || ""}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-incite-navy focus:border-incite-navy"
                placeholder="Describe the policy..."
              />
            </div>

            <div>
              <label htmlFor="responseTimeHours" className="block text-sm font-medium text-gray-700 mb-1">
                Response Time (Hours) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="responseTimeHours"
                name="responseTimeHours"
                value={formData.responseTimeHours || ""}
                onChange={handleInputChange}
                required
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-incite-navy focus:border-incite-navy"
              />
            </div>

            <div>
              <label htmlFor="resolutionTimeHours" className="block text-sm font-medium text-gray-700 mb-1">
                Resolution Time (Hours) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="resolutionTimeHours"
                name="resolutionTimeHours"
                value={formData.resolutionTimeHours || ""}
                onChange={handleInputChange}
                required
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-incite-navy focus:border-incite-navy"
              />
            </div>

            <div>
              <label htmlFor="priorityLevel" className="block text-sm font-medium text-gray-700 mb-1">
                Priority Level <span className="text-red-500">*</span>
              </label>
              <select
                id="priorityLevel"
                name="priorityLevel"
                value={formData.priorityLevel || "MEDIUM"}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-incite-navy focus:border-incite-navy"
              >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
                <option value="CRITICAL">Critical</option>
              </select>
            </div>

            <div>
              <label htmlFor="organizationId" className="block text-sm font-medium text-gray-700 mb-1">
                Organization
              </label>
              <select
                id="organizationId"
                name="organizationId"
                value={formData.organizationId || ""}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-incite-navy focus:border-incite-navy"
              >
                <option value="">Select an organization</option>
                {organizations.map((org) => (
                  <option key={org.id} value={org.id}>
                    {org.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="active"
                  name="active"
                  checked={formData.active}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-incite-navy focus:ring-incite-navy border-gray-300 rounded"
                />
                <span className="text-sm font-medium text-gray-700">Active</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
            <Link
              href="/dashboard/settings/sla"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSaving}
              className="px-4 py-2 text-sm font-medium text-white bg-incite-navy border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-incite-navy disabled:opacity-50"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 