import React from "react";
import Image from "next/image";

interface AuthCardProps {
  title: string;
  children: React.ReactNode;
}

export function AuthCard({ title, children }: AuthCardProps) {
  return (
    <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <div className="relative h-16 w-full mb-4">
            <Image 
              src="/logo.png" 
              alt="Incite Gravity Logo" 
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden ring-1 ring-gray-200">
          <div className="relative h-1.5 bg-incite-red"></div>
          <div className="px-8 py-10">
            <div className="flex items-center justify-center mb-8">
              <div className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-incite-navy" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-incite-navy tracking-tight">{title}</h2>
                <div className="mt-2 w-12 h-0.5 bg-incite-red mx-auto rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-incite.lightblue p-4 rounded-lg mb-6 border border-incite-navy border-opacity-10">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-incite-navy mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-incite-navy">
                  Manage and track your support tickets with our secure portal.
                </p>
              </div>
            </div>
            
            <div>{children}</div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">IT Excellence Redefined.</p>
        </div>
      </div>
    </div>
  );
} 