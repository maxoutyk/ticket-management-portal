"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

type Organization = {
  id: string;
  name: string;
};

type SlaPolicy = {
  name: string;
  description: string;
  responseTimeHours: number;
  resolutionTimeHours: number;
  active: boolean;
  priorityLevel: string;
  organizationId: string | null;
};

const defaultPolicy: SlaPolicy = {
  name: "",
  description: "",
  responseTimeHours: 4,
  resolutionTimeHours: 24,
  active: true,
  priorityLevel: "MEDIUM",
  organizationId: null,
};

export default function NewSlaPolicyPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState<SlaPolicy>(defaultPolicy);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loadingOrgs, setLoadingOrgs] = useState(true);

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
      } finally {
        setLoadingOrgs(false);
      }
    };

    fetchOrganizations();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: target.checked });
    } else if (type === "number") {
      setFormData({ ...formData, [name]: Number(value) });
    } else if (name === "organizationId" && value === "") {
      // Handle the case when "Global policy" is selected (null organizationId)
      setFormData({ ...formData, organizationId: null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/sla/policies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/dashboard/settings/sla");
      } else {
        const data = await response.json();
        setError(data.message || "Failed to create SLA policy");
      }
    } catch (error) {
      console.error("Error creating SLA policy:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "loading") {
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

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-lg font-medium text-gray-900">Create New SLA Policy</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Policy Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="e.g., Standard SLA Policy"
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Describe the purpose of this SLA policy"
              ></textarea>
            </div>

            <div>
              <label htmlFor="organizationId" className="block text-sm font-medium text-gray-700">
                Organization
              </label>
              <select
                id="organizationId"
                name="organizationId"
                value={formData.organizationId || ""}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                disabled={loadingOrgs}
              >
                <option value="">Global Policy (All Organizations)</option>
                {organizations.map((org) => (
                  <option key={org.id} value={org.id}>
                    {org.name}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">
                Select an organization or leave empty for a global policy
              </p>
            </div>

            <div>
              <label htmlFor="priorityLevel" className="block text-sm font-medium text-gray-700">
                Priority Level <span className="text-red-500">*</span>
              </label>
              <select
                id="priorityLevel"
                name="priorityLevel"
                value={formData.priorityLevel}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
                <option value="CRITICAL">Critical</option>
              </select>
            </div>

            <div>
              <label htmlFor="active" className="flex items-center text-sm font-medium text-gray-700">
                <input
                  type="checkbox"
                  id="active"
                  name="active"
                  checked={formData.active}
                  onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                  className="h-4 w-4 rounded border-gray-300 text-incite-navy focus:ring-indigo-500 mr-2"
                />
                Active
              </label>
              <p className="mt-1 text-sm text-gray-500">Enable or disable this SLA policy</p>
            </div>

            <div>
              <label htmlFor="responseTimeHours" className="block text-sm font-medium text-gray-700">
                Response Time (hours) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="responseTimeHours"
                name="responseTimeHours"
                value={formData.responseTimeHours}
                onChange={handleChange}
                min="0"
                step="0.5"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <p className="mt-1 text-sm text-gray-500">
                Time allowed for first response to the ticket
              </p>
            </div>

            <div>
              <label htmlFor="resolutionTimeHours" className="block text-sm font-medium text-gray-700">
                Resolution Time (hours) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="resolutionTimeHours"
                name="resolutionTimeHours"
                value={formData.resolutionTimeHours}
                onChange={handleChange}
                min="0"
                step="0.5"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <p className="mt-1 text-sm text-gray-500">
                Time allowed for resolving the ticket
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end space-x-3">
            <Link
              href="/dashboard/settings/sla"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-incite-navy hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {isSubmitting ? "Creating..." : "Create Policy"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 