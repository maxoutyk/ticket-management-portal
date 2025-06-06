import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    role: string;
    requiresTwoFactor?: boolean;
    isApproved?: boolean;
  }

  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
      requiresTwoFactor?: boolean;
      isApproved?: boolean;
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    requiresTwoFactor?: boolean;
    isApproved?: boolean;
  }
} 