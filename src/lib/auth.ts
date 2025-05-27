import { NextAuthOptions } from "next-auth";
import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import AzureADProvider from "next-auth/providers/azure-ad";
import { prisma } from "@/lib/prisma";

// IG email domain for SSO
const IG_EMAIL_DOMAIN = "incitegravity.com";

export const authOptions: NextAuthOptions = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID,
      authorization: { params: { scope: "openid profile email" } },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        otp: { label: "Verification Code", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
            select: {
              id: true,
              email: true,
              name: true,
              password: true,
              role: true,
              otp: true,
              otpExpiry: true,
              otpVerifiedAt: true,
              twoFactorEnabled: true,
              isApproved: true,
            }
          });

          if (!user) {
            console.log("User not found");
            return null;
          }

          // Check if user is approved (unless they're an admin)
          if (user.role !== "ADMIN" && !user.isApproved) {
            console.log("User not approved:", user.email);
            throw new Error("Your account is pending approval.");
          }

          const isPasswordValid = await compare(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) {
            console.log("Invalid password");
            return null;
          }

          // Check if 2FA is enabled globally
          const twoFactorSetting = await prisma.appSetting.findUnique({
            where: { key: "enableTwoFactorAuth" },
          });
          
          const isGlobalTwoFactorEnabled = twoFactorSetting?.value === "true";
          
          // Check if 2FA is enabled for this specific user
          const isUserTwoFactorEnabled = user.twoFactorEnabled;
          
          // 2FA is required if both global setting is enabled AND user has it enabled
          const isTwoFactorRequired = isGlobalTwoFactorEnabled && isUserTwoFactorEnabled;
          
          console.log(`User ${credentials.email} 2FA required: ${isTwoFactorRequired} (global: ${isGlobalTwoFactorEnabled}, user: ${isUserTwoFactorEnabled})`);
          
          // If 2FA is required and no OTP is provided, we'll still return the user
          // but the client-side will handle requesting OTP
          if (isTwoFactorRequired && !credentials.otp) {
            // For security reasons, we don't want to block the authentication
            // here; instead, we'll handle the OTP verification in the client
            console.log("2FA required for this user, but no OTP provided");
            
            // Return a special flag to indicate 2FA is required
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              role: user.role,
              isApproved: user.isApproved,
              requiresTwoFactor: true
            };
          } 
          // If 2FA is required and OTP was provided, we'll verify it here
          else if (isTwoFactorRequired && credentials.otp) {
            console.log(`Checking OTP verification for ${credentials.email} with code ${credentials.otp}`);
            
            // First check if this OTP was already verified through the API endpoint
            // If so, the user record should have the OTP field cleared
            if (!user.otp) {
              console.log("OTP not found for user - this could mean it was already verified");
              
              // Check if this is a recently verified OTP (within last 2 minutes)
              const twoMinutesAgo = new Date();
              twoMinutesAgo.setMinutes(twoMinutesAgo.getMinutes() - 2);
              
              if (user.otpVerifiedAt && user.otpVerifiedAt > twoMinutesAgo) {
                console.log("User recently verified OTP through API, allowing login");
                return {
                  id: user.id,
                  email: user.email,
                  name: user.name,
                  role: user.role,
                  isApproved: user.isApproved
                };
              }
              
              // If there's no recent verification, reject the login
              console.log("No OTP found and no recent verification");
              return null;
            }
            
            // Normal OTP verification flow
            if (user.otp !== credentials.otp) {
              console.log(`Invalid OTP: expected ${user.otp}, got ${credentials.otp}`);
              return null;
            }
            
            if (user.otpExpiry && new Date() > user.otpExpiry) {
              console.log("OTP expired");
              return null;
            }
            
            // Clear the OTP and expiry after successful login
            const now = new Date();
            await prisma.user.update({
              where: { id: user.id },
              data: {
                otp: null,
                otpExpiry: null,
                otpVerifiedAt: now
              },
            });
            
            console.log("OTP verified successfully, authentication complete");
            
            // Return user WITHOUT the requiresTwoFactor flag to indicate 2FA is complete
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              role: user.role,
              isApproved: user.isApproved
              // No requiresTwoFactor flag means 2FA is complete
            };
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            isApproved: user.isApproved
          };
        } catch (error) {
          console.error("Auth error:", error);
          if (error instanceof Error) {
            throw error; // Re-throw the error to show the message to the user
          }
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      // Handle Microsoft SSO sign in
      if (account?.provider === "azure-ad") {
        try {
          // Verify email domain for SSO
          const emailDomain = user.email?.split('@')[1];
          if (emailDomain !== IG_EMAIL_DOMAIN) {
            console.log(`SSO attempt from non-IG domain: ${emailDomain}`);
            throw new Error("Only IG employees can use Microsoft SSO");
          }

          // Check if user exists
          const existingUser = await prisma.user.findUnique({
            where: { email: user.email! },
          });

          if (!existingUser) {
            // Create new user for Microsoft SSO
            await prisma.user.create({
              data: {
                email: user.email!,
                name: user.name!,
                role: "EMPLOYEE", // Set role as EMPLOYEE for SSO users
                password: "", // Empty password for SSO users
                isApproved: true, // Auto-approve SSO users
                approvedAt: new Date(),
              },
            });
          } else if (!existingUser.isApproved && existingUser.role !== "ADMIN") {
            // Check approval status for existing users
            throw new Error("Your account is pending approval.");
          }

          return true;
        } catch (error) {
          console.error("Error in Microsoft SSO sign in:", error);
          if (error instanceof Error) {
            throw error; // Re-throw the error to show the message to the user
          }
          return false;
        }
      }

      // For credentials sign in, check if the user is approved
      if (user.role !== "ADMIN" && !user.isApproved) {
        throw new Error("Your account is pending approval.");
      }

      return true;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role || "EMPLOYEE"; // Default to EMPLOYEE role for SSO
        token.isApproved = user.isApproved;
        if ('requiresTwoFactor' in user) {
          token.requiresTwoFactor = user.requiresTwoFactor;
        }
      }

      // If it's an OAuth sign in, get or create the user and set their role
      if (account?.provider === "azure-ad") {
        const dbUser = await prisma.user.findUnique({
          where: { email: token.email! },
          select: { id: true, role: true, isApproved: true },
        });
        if (dbUser) {
          token.id = dbUser.id;
          token.role = dbUser.role;
          token.isApproved = dbUser.isApproved;
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.role = token.role as string;
        session.user.requiresTwoFactor = token.requiresTwoFactor;
        session.user.isApproved = token.isApproved;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
  },
}; 