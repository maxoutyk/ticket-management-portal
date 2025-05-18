"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Tickets", href: "/dashboard/tickets" },
    { name: "Profile", href: "/dashboard/profile" },
  ];

  return (
    <nav className="bg-indigo-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-xl font-bold">Ticket Portal</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      pathname === item.href
                        ? "bg-indigo-700 text-white"
                        : "text-white hover:bg-indigo-500"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative ml-3">
                <div className="flex items-center">
                  <span className="text-white mr-4">
                    Hello, {session?.user?.name}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="text-gray-100 hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-indigo-700 p-2 text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-800"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "bg-indigo-700 text-white"
                    : "text-white hover:bg-indigo-500"
                } block rounded-md px-3 py-2 text-base font-medium`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-indigo-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="ml-3">
                <div className="text-base font-medium text-white">
                  {session?.user?.name}
                </div>
                <div className="text-sm font-medium text-indigo-300">
                  {session?.user?.email}
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <button
                onClick={handleSignOut}
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 