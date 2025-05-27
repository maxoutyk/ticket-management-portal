"use client";

import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { UsersIcon, CogIcon, ClockIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const userRole = session?.user?.role || "USER";
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top navigation bar */}
      <header className="bg-white shadow-sm border-b border-gray-200 z-10">
        <div className="max-w-full mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Incite Gravity" className="h-8 w-auto mr-3" />
            <h1 className="text-2xl font-bold text-incite-navy">Ticket Management Portal</h1>
          </div>
          <div className="flex items-center">
            <div className="mr-4 flex items-center">
              <span className="text-gray-700 mr-2">{session?.user?.name || "User"}</span>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                userRole === "ADMIN" 
                  ? "bg-incite-red text-white" 
                  : userRole === "EMPLOYEE" 
                  ? "bg-incite-navy text-white" 
                  : "bg-gray-200 text-gray-700"
              }`}>
                {userRole}
              </span>
            </div>
            <button
              onClick={handleSignOut}
              className="bg-incite-navy hover:bg-blue-950 text-white px-4 py-2 rounded transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main content with sidebar */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={`bg-white border-r border-gray-200 shadow-sm flex-shrink-0 transition-all duration-300 ease-in-out ${
          sidebarCollapsed ? "w-16" : "w-64"
        }`}>
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <span className={`font-medium text-gray-700 ${sidebarCollapsed ? "hidden" : "block"}`}>
              Navigation
            </span>
            <button
              onClick={toggleSidebar}
              className="p-1 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {sidebarCollapsed ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
              )}
            </button>
          </div>
          <nav className="p-4 h-full">
            <ul className="space-y-6">
              <li>
                <Link 
                  href="/dashboard" 
                  className={`flex items-center p-2 rounded-lg transition-colors ${
                    isActive("/dashboard") && pathname === "/dashboard" 
                      ? "bg-blue-50 text-incite-navy" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-incite-red"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className={sidebarCollapsed ? "hidden" : "block"}>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/tickets" 
                  className={`flex items-center p-2 rounded-lg transition-colors ${
                    isActive("/dashboard/tickets") && !isActive("/dashboard/tickets/create")
                      ? "bg-blue-50 text-incite-navy" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-incite-red"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span className={sidebarCollapsed ? "hidden" : "block"}>My Tickets</span>
                </Link>
              </li>
              
              <li>
                <Link 
                  href="/dashboard/tickets/create" 
                  className={`flex items-center p-2 rounded-lg transition-colors ${
                    isActive("/dashboard/tickets/create") 
                      ? "bg-blue-50 text-incite-navy" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-incite-red"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span className={sidebarCollapsed ? "hidden" : "block"}>Create Ticket</span>
                </Link>
              </li>
              
              {/* Admin specific links */}
              {userRole === "ADMIN" && (
                <>
                  <li>
                    <Link 
                      href="/dashboard/admin/approvals" 
                      className={`flex items-center p-2 rounded-lg transition-colors ${
                        isActive("/dashboard/admin/approvals") 
                          ? "bg-blue-50 text-incite-navy" 
                          : "text-gray-600 hover:bg-gray-50 hover:text-incite-red"
                      }`}
                    >
                      <UserGroupIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                      <span className={sidebarCollapsed ? "hidden" : "block"}>User Approvals</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/dashboard/all-tickets" 
                      className={`flex items-center p-2 rounded-lg transition-colors ${
                        isActive("/dashboard/all-tickets") 
                          ? "bg-blue-50 text-incite-navy" 
                          : "text-gray-600 hover:bg-gray-50 hover:text-incite-red"
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2M7 7h10" />
                      </svg>
                      <span className={sidebarCollapsed ? "hidden" : "block"}>All Tickets</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/dashboard/users" 
                      className={`flex items-center p-2 rounded-lg transition-colors ${
                        isActive("/dashboard/users") 
                          ? "bg-blue-50 text-incite-navy" 
                          : "text-gray-600 hover:bg-gray-50 hover:text-incite-red"
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span className={sidebarCollapsed ? "hidden" : "block"}>Manage Users</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/dashboard/settings" 
                      className={`flex items-center p-2 rounded-lg transition-colors ${
                        isActive("/dashboard/settings") 
                          ? "bg-blue-50 text-incite-navy" 
                          : "text-gray-600 hover:bg-gray-50 hover:text-incite-red"
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className={sidebarCollapsed ? "hidden" : "block"}>Settings</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/dashboard/settings/sla" 
                      className={`flex items-center p-2 rounded-lg transition-colors ${
                        isActive("/dashboard/settings/sla") 
                          ? "bg-blue-50 text-incite-navy" 
                          : "text-gray-600 hover:bg-gray-50 hover:text-incite-red"
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      <span className={sidebarCollapsed ? "hidden" : "block"}>SLA Management</span>
                    </Link>
                  </li>
                </>
              )}
              
              {/* Employee specific links */}
              {userRole === "EMPLOYEE" && (
                <li>
                  <Link 
                    href="/dashboard/assigned-tickets" 
                    className={`flex items-center p-2 rounded-lg transition-colors ${
                      isActive("/dashboard/assigned-tickets") 
                        ? "bg-blue-50 text-incite-navy" 
                        : "text-gray-600 hover:bg-gray-50 hover:text-incite-red"
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12l2 2 4-4" />
                    </svg>
                    <span className={sidebarCollapsed ? "hidden" : "block"}>Assigned Tickets</span>
                  </Link>
                </li>
              )}
              
              <li>
                <Link 
                  href="/dashboard/profile" 
                  className={`flex items-center p-2 rounded-lg transition-colors ${
                    isActive("/dashboard/profile") 
                      ? "bg-blue-50 text-incite-navy" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-incite-red"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className={sidebarCollapsed ? "hidden" : "block"}>Profile</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content area */}
        <main className={`flex-1 p-6 bg-gray-50 transition-all duration-300 ease-in-out ${
          sidebarCollapsed ? "ml-0" : "ml-0"
        }`} style={{ overflow: 'visible' }}>
          {children}
        </main>
      </div>
    </div>
  );
} 