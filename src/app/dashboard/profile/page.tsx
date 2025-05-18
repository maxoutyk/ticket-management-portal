"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      setIsLoading(false);
    }
  }, [status, router]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-incite-navy"></div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-incite-navy rounded-full flex items-center justify-center text-white text-3xl font-bold">
                {session?.user?.name?.charAt(0) || "U"}
              </div>
              <h2 className="mt-4 text-xl font-medium text-gray-800">{session?.user?.name}</h2>
              <p className="text-gray-500">{session?.user?.email}</p>
              <p className="mt-2 text-sm bg-incite-navy text-white px-3 py-1 rounded-full uppercase">
                {session?.user?.role || "User"}
              </p>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Account Information</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={session?.user?.name || ""}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={session?.user?.email || ""}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <input
                  type="text"
                  value={session?.user?.role || "USER"}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                />
              </div>
              
              <div className="pt-4">
                <button
                  type="button"
                  className="bg-incite-navy hover:bg-blue-950 text-white px-4 py-2 rounded transition-colors disabled:opacity-50"
                  disabled
                >
                  Edit Profile (Coming Soon)
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 