"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, DocumentChartBarIcon } from "@heroicons/react/24/outline";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface SlaReport {
  id: string;
  name: string;
  metrics: {
    totalTickets: number;
    ticketsWithSLA: number;
    slaBreaches: number;
    responseTimeBreaches: number;
    resolutionTimeBreaches: number;
    slaComplianceRate: string;
    responseTimeComplianceRate: string;
    resolutionTimeComplianceRate: string;
  };
  activePolicies: number;
}

interface DateRange {
  startDate: Date;
  endDate: Date;
}

export default function OrganizationSlaReportsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState<SlaReport[]>([]);
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: new Date(new Date().setDate(new Date().getDate() - 30)),
    endDate: new Date()
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated" && session.user.role !== "ADMIN") {
      router.push("/dashboard");
    } else if (status === "authenticated") {
      fetchReports();
    }
  }, [status, router, session]);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    if (start && end) {
      setDateRange({ startDate: start, endDate: end });
      const timer = setTimeout(() => {
        fetchReports();
      }, 500);
      return () => clearTimeout(timer);
    }
  };

  const fetchReports = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        startDate: dateRange.startDate.toISOString(),
        endDate: dateRange.endDate.toISOString()
      });

      const response = await fetch(`/api/sla/reports/organization?${queryParams}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setReports(data.reports);
    } catch (error) {
      console.error("Error fetching reports:", error);
    } finally {
      setLoading(false);
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
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center">
            <DocumentChartBarIcon className="h-6 w-6 text-incite-navy mr-2" />
            <h2 className="text-lg font-medium text-gray-900">Organization SLA Reports</h2>
          </div>
          <div className="flex items-center space-x-4">
            <DatePicker
              selectsRange={true}
              startDate={dateRange.startDate}
              endDate={dateRange.endDate}
              onChange={handleDateChange}
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
              dateFormat="MMM d, yyyy"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Organization
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Tickets
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SLA Compliance
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Response Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Resolution Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Active Policies
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reports.map((report) => (
                <tr key={report.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{report.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{report.metrics.totalTickets}</div>
                    <div className="text-xs text-gray-500">
                      {report.metrics.ticketsWithSLA} with SLA
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      parseFloat(report.metrics.slaComplianceRate) >= 95
                        ? "bg-green-100 text-green-800"
                        : parseFloat(report.metrics.slaComplianceRate) >= 80
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {report.metrics.slaComplianceRate}%
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {report.metrics.slaBreaches} breaches
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      parseFloat(report.metrics.responseTimeComplianceRate) >= 95
                        ? "bg-green-100 text-green-800"
                        : parseFloat(report.metrics.responseTimeComplianceRate) >= 80
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {report.metrics.responseTimeComplianceRate}%
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {report.metrics.responseTimeBreaches} breaches
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      parseFloat(report.metrics.resolutionTimeComplianceRate) >= 95
                        ? "bg-green-100 text-green-800"
                        : parseFloat(report.metrics.resolutionTimeComplianceRate) >= 80
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {report.metrics.resolutionTimeComplianceRate}%
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {report.metrics.resolutionTimeBreaches} breaches
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{report.activePolicies}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {reports.length === 0 && !loading && (
          <div className="p-6 text-center text-gray-500">
            <p>No SLA data available for the selected date range.</p>
          </div>
        )}
      </div>
    </div>
  );
} 