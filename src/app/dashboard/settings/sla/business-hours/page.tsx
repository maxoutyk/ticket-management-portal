"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, ClockIcon } from "@heroicons/react/24/outline";

type BusinessHours = {
  id?: string;
  dayOfWeek: number;
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
  isWorkDay: boolean;
};

export default function BusinessHoursPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [businessHours, setBusinessHours] = useState<BusinessHours[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(false);

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  useEffect(() => {
    // Redirect if not admin
    if (status === "authenticated" && session?.user?.role !== "ADMIN") {
      router.push("/dashboard");
    }
  }, [session, status, router]);

  useEffect(() => {
    const fetchBusinessHours = async () => {
      try {
        const response = await fetch("/api/sla/business-hours");
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            // Sort by day of week
            data.sort((a: BusinessHours, b: BusinessHours) => a.dayOfWeek - b.dayOfWeek);
            setBusinessHours(data);
          } else {
            // Initialize with default values if no data
            initializeDefaultBusinessHours();
          }
        } else {
          console.error("Failed to fetch business hours");
          initializeDefaultBusinessHours();
        }
      } catch (error) {
        console.error("Error fetching business hours:", error);
        initializeDefaultBusinessHours();
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessHours();
  }, []);

  const initializeDefaultBusinessHours = () => {
    const defaultHours: BusinessHours[] = [];
    
    // Create entries for each day of the week
    for (let day = 0; day < 7; day++) {
      defaultHours.push({
        dayOfWeek: day,
        startHour: 9,
        startMinute: 0,
        endHour: 18,
        endMinute: 0,
        isWorkDay: day >= 1 && day <= 5 // Monday to Friday are workdays
      });
    }
    
    setBusinessHours(defaultHours);
  };

  const handleHoursChange = (index: number, field: keyof BusinessHours, value: any) => {
    const updatedHours = [...businessHours];
    
    if (field === 'isWorkDay') {
      updatedHours[index].isWorkDay = value;
    } else if (field === 'startHour' || field === 'endHour') {
      updatedHours[index][field] = parseInt(value, 10);
    } else if (field === 'startMinute' || field === 'endMinute') {
      updatedHours[index][field] = parseInt(value, 10);
    }
    
    setBusinessHours(updatedHours);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveError("");
    setSaveSuccess(false);

    try {
      // Remove ids before sending to API
      const dataToSend = businessHours.map(({ id, ...rest }) => rest);
      
      const response = await fetch("/api/sla/business-hours", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setSaveSuccess(true);
        // Update hours with the returned data (which includes ids)
        const updatedHours = await response.json();
        setBusinessHours(updatedHours);
        
        // Redirect after successful save
        setTimeout(() => {
          router.push("/dashboard/settings/sla");
        }, 1500);
      } else {
        const data = await response.json();
        setSaveError(data.error || "Failed to save business hours");
      }
    } catch (error) {
      console.error("Error saving business hours:", error);
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
          <ClockIcon className="h-6 w-6 text-incite-navy mr-2" />
          <h2 className="text-lg font-medium text-gray-900">Configure Business Hours</h2>
        </div>

        {saveSuccess && (
          <div className="m-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-700 text-sm">Business hours saved successfully!</p>
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
              Configure the business hours for your SLA calculations. 
              SLA timing will only accumulate during business hours.
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Day
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Working Day
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Start Time
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      End Time
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {businessHours.map((hours, index) => (
                    <tr key={hours.id || hours.dayOfWeek}>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {dayNames[hours.dayOfWeek]}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            checked={hours.isWorkDay}
                            onChange={(e) => handleHoursChange(index, 'isWorkDay', e.target.checked)}
                            className="rounded border-gray-300 text-incite-navy focus:ring-indigo-500 h-4 w-4"
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            {hours.isWorkDay ? "Working Day" : "Non-Working Day"}
                          </span>
                        </label>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center space-x-1">
                          <select
                            value={hours.startHour}
                            onChange={(e) => handleHoursChange(index, 'startHour', e.target.value)}
                            disabled={!hours.isWorkDay}
                            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm disabled:bg-gray-100 disabled:text-gray-400"
                          >
                            {Array.from({ length: 24 }, (_, i) => (
                              <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                            ))}
                          </select>
                          <span className="text-gray-500">:</span>
                          <select
                            value={hours.startMinute}
                            onChange={(e) => handleHoursChange(index, 'startMinute', e.target.value)}
                            disabled={!hours.isWorkDay}
                            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm disabled:bg-gray-100 disabled:text-gray-400"
                          >
                            {Array.from({ length: 60 }, (_, i) => (
                              <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                            ))}
                          </select>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center space-x-1">
                          <select
                            value={hours.endHour}
                            onChange={(e) => handleHoursChange(index, 'endHour', e.target.value)}
                            disabled={!hours.isWorkDay}
                            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm disabled:bg-gray-100 disabled:text-gray-400"
                          >
                            {Array.from({ length: 24 }, (_, i) => (
                              <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                            ))}
                          </select>
                          <span className="text-gray-500">:</span>
                          <select
                            value={hours.endMinute}
                            onChange={(e) => handleHoursChange(index, 'endMinute', e.target.value)}
                            disabled={!hours.isWorkDay}
                            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm disabled:bg-gray-100 disabled:text-gray-400"
                          >
                            {Array.from({ length: 60 }, (_, i) => (
                              <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                            ))}
                          </select>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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