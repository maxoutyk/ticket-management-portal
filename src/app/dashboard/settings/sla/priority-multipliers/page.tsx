"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, ScaleIcon } from "@heroicons/react/24/outline";

type PriorityMultiplier = {
  id?: string;
  priority: string;
  multiplier: number;
};

export default function PriorityMultipliersPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [multipliers, setMultipliers] = useState<PriorityMultiplier[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(false);

  const priorities = ["CRITICAL", "HIGH", "MEDIUM", "LOW"];
  const priorityColors = {
    CRITICAL: "bg-red-100 text-red-800",
    HIGH: "bg-orange-100 text-orange-800",
    MEDIUM: "bg-yellow-100 text-yellow-800",
    LOW: "bg-green-100 text-green-800"
  };

  useEffect(() => {
    // Redirect if not admin
    if (status === "authenticated" && session?.user?.role !== "ADMIN") {
      router.push("/dashboard");
    }
  }, [session, status, router]);

  useEffect(() => {
    const fetchMultipliers = async () => {
      try {
        const response = await fetch("/api/sla/priority-multipliers");
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            // Sort by priority
            const sortOrder = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };
            data.sort((a: PriorityMultiplier, b: PriorityMultiplier) => 
              sortOrder[a.priority as keyof typeof sortOrder] - sortOrder[b.priority as keyof typeof sortOrder]
            );
            setMultipliers(data);
          } else {
            // Initialize with default values if no data
            initializeDefaultMultipliers();
          }
        } else {
          console.error("Failed to fetch priority multipliers");
          initializeDefaultMultipliers();
        }
      } catch (error) {
        console.error("Error fetching priority multipliers:", error);
        initializeDefaultMultipliers();
      } finally {
        setLoading(false);
      }
    };

    fetchMultipliers();
  }, []);

  const initializeDefaultMultipliers = () => {
    const defaultMultipliers: PriorityMultiplier[] = [
      { priority: "CRITICAL", multiplier: 0.5 },
      { priority: "HIGH", multiplier: 0.75 },
      { priority: "MEDIUM", multiplier: 1.0 },
      { priority: "LOW", multiplier: 1.5 }
    ];
    
    setMultipliers(defaultMultipliers);
  };

  const handleMultiplierChange = (index: number, value: number) => {
    const updatedMultipliers = [...multipliers];
    updatedMultipliers[index].multiplier = value;
    setMultipliers(updatedMultipliers);
  };

  const calculateEffectText = (multiplier: number): string => {
    if (multiplier < 1) {
      return `${Math.round((1 - multiplier) * 100)}% faster response/resolution`;
    } else if (multiplier > 1) {
      return `${Math.round((multiplier - 1) * 100)}% longer response/resolution`;
    } else {
      return "Standard response/resolution time";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveError("");
    setSaveSuccess(false);

    try {
      // Remove ids before sending to API
      const dataToSend = multipliers.map(({ id, ...rest }) => rest);
      
      const response = await fetch("/api/sla/priority-multipliers", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setSaveSuccess(true);
        // Update multipliers with the returned data (which includes ids)
        const updatedMultipliers = await response.json();
        setMultipliers(updatedMultipliers);
        
        // Redirect after successful save
        setTimeout(() => {
          router.push("/dashboard/settings/sla");
        }, 1500);
      } else {
        const data = await response.json();
        setSaveError(data.error || "Failed to save priority multipliers");
      }
    } catch (error) {
      console.error("Error saving priority multipliers:", error);
      setSaveError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSaving(false);
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
        <div className="flex items-center p-4 border-b border-gray-200 bg-gray-50">
          <ScaleIcon className="h-6 w-6 text-incite-navy mr-2" />
          <h2 className="text-lg font-medium text-gray-900">Configure Priority Multipliers</h2>
        </div>

        {saveSuccess && (
          <div className="m-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-700 text-sm">Priority multipliers saved successfully!</p>
          </div>
        )}

        {saveError && (
          <div className="m-4 bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <p className="text-red-700 text-sm">{saveError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <p className="text-sm text-gray-500 mb-4">
              Configure how different priority levels affect SLA timelines. 
              A multiplier of 1.0 means standard time, while values below 1.0 mean shorter times,
              and values above 1.0 mean longer times.
            </p>
            
            <div className="space-y-6">
              {multipliers.map((multiplier, index) => (
                <div key={multiplier.id || multiplier.priority} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full mr-4 ${priorityColors[multiplier.priority as keyof typeof priorityColors]}`}>
                        {multiplier.priority}
                      </span>
                      <div className="text-sm font-medium text-gray-900">
                        Priority Multiplier
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="number"
                        value={multiplier.multiplier}
                        onChange={(e) => handleMultiplierChange(index, parseFloat(e.target.value))}
                        min="0.1"
                        max="10"
                        step="0.05"
                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm w-24"
                      />
                      <span className="ml-2 text-gray-500">×</span>
                    </div>
                  </div>
                  
                  <div className="mt-2 text-sm text-gray-500">
                    {calculateEffectText(multiplier.multiplier)}
                  </div>
                </div>
              ))}
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
              disabled={isSaving}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-incite-navy hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 