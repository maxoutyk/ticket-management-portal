import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication - Ticket Management Portal",
  description: "Login or register for the Ticket Management Portal",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
} 