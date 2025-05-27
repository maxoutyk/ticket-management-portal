"use client";

import React, { useState, useEffect, Suspense } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { AuthCard } from "@/components/auth/AuthCard";
import { FormInput } from "@/components/auth/FormInput";
import { Button } from "@/components/auth/Button";
import { use } from "react";

interface Organization {
  id: string;
  name: string;
}

interface SlaPolicy {
  id: string;
  name: string;
  description: string | null;
  responseTimeHours: number;
  resolutionTimeHours: number;
  active: boolean;
  priorityLevel: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  organizationId: string | null;
  organization: Organization | null;
}

interface TicketDetailProps {
  params: Promise<{ id: string }>;
}

function LoginForm() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const isRegistered = searchParams.get("registered") === "true";
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const authError = searchParams.get("error");
  const requireTwoFactor = searchParams.get("requireTwoFactor") === "true";
  const emailFromUrl = searchParams.get("email");
  
  const [formData, setFormData] = useState({
    email: emailFromUrl || "",
    password: "",
    otp: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(requireTwoFactor);
  const [isRequestingOtp, setIsRequestingOtp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    if (status === "authenticated" && !session?.user?.requiresTwoFactor) {
      router.push("/dashboard");
    }
  }, [status, router, session]);

  // Set error message from URL if available and check for 2FA requirement
  useEffect(() => {
    if (authError) {
      switch (authError) {
        case "CredentialsSignin":
          setError("Invalid email or password");
          break;
        default:
          setError("An error occurred during login");
          break;
      }
    }
  }, [authError]);
  
  // Auto-request OTP if we're showing the OTP input and have an email
  useEffect(() => {
    // Only auto-request OTP if we're redirected from middleware
    // This will only run once when the component mounts if requireTwoFactor is true
    let isMounted = true;
    
    if (requireTwoFactor && formData.email && !otpSent && !isRequestingOtp && isMounted) {
      console.log("Auto-requesting OTP from redirect for", formData.email);
      (async () => {
        await requestOtp();
      })();
    }
    
    return () => {
      isMounted = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);  // We intentionally want this to run only once on mount

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.email || !formData.password) {
      setError("Please provide both email and password");
      return;
    }
    
    setError("");
    setIsLoading(true);

    try {
      // First, check credentials without OTP
      const response = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      // Detailed debugging
      console.log("SignIn Response:", {
        ok: response?.ok,
        status: response?.status,
        url: response?.url,
        error: response?.error,
        complete: JSON.stringify(response)
      });

      if (response?.error) {
        console.log("Login error:", response.error);
        setError("Invalid email or password");
        setIsLoading(false);
        return;
      }

      // If there's an error or no response, stop here
      if (!response) {
        setError("Authentication failed");
        setIsLoading(false);
        return;
      }
      
      // Check if 2FA is required by fetching the session
      // Get the current session to check for requiresTwoFactor flag
      const sessionResponse = await fetch('/api/auth/session');
      const sessionData = await sessionResponse.json();
      
      console.log("Session data after login:", sessionData);
      
      // Check if the user requires 2FA - direct check for requiresTwoFactor flag
      if (sessionData?.user?.requiresTwoFactor === true) {
        console.log("2FA required for this user based on session data");
        
        // Only request OTP if we haven't already sent one
        if (!otpSent) {
          console.log("OTP not yet sent, requesting now");
          await requestOtp();
        } else {
          console.log("OTP already sent, not requesting again");
        }
        
        // Show the OTP input
        setShowOtpInput(true);
        setIsLoading(false);
        return;
      }
      
      // If we get here, no 2FA is required - user can proceed to dashboard
      console.log("No 2FA required, redirecting to:", callbackUrl);
      router.push(callbackUrl);
    } catch (err) {
      console.error("Login error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const requestOtp = async () => {
    setIsRequestingOtp(true);
    try {
      console.log("Requesting OTP for:", formData.email);
      const response = await fetch("/api/auth/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
        }),
      });

      console.log("OTP request response:", {
        status: response.status,
        ok: response.ok
      });

      if (response.ok) {
        setOtpSent(true);
        setShowOtpInput(true); // Ensure OTP input is shown
        console.log("OTP request successful, showing OTP input");
      } else {
        const data = await response.json();
        console.error("OTP request error data:", data);
        throw new Error(data.error || "Failed to send OTP");
      }
    } catch (err) {
      console.error("OTP request error:", err);
      setError("Failed to send verification code. Please try again.");
      setShowOtpInput(false); // Hide OTP input on error
    } finally {
      setIsRequestingOtp(false);
    }
  };

  const handleResendOtp = async (e: React.MouseEvent) => {
    e.preventDefault();
    await requestOtp();
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.otp) {
      setError("Please enter the verification code");
      return;
    }
    
    setIsLoading(true);
    setError("");

    try {
      // First verify the OTP through the API
      const verifyResponse = await fetch("/api/auth/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otp,
        }),
      });

      const responseData = await verifyResponse.json();

      if (!verifyResponse.ok) {
        throw new Error(responseData.error || "Failed to verify code");
      }

      // After OTP is verified, sign in again with the OTP
      const signInResponse = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        otp: formData.otp,
        redirect: false,
      });

      if (signInResponse?.error) {
        throw new Error(signInResponse.error);
      }

      // If successful, redirect to the callback URL
      router.push(callbackUrl);
    } catch (err) {
      console.error("OTP verification error:", err);
      setError(err instanceof Error ? err.message : "Failed to verify code");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthCard title="Sign In">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {isRegistered && (
          <div className="mb-4 rounded-md bg-green-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-green-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  Registration successful! Please sign in.
                </p>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-4 rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-800">{error}</p>
              </div>
            </div>
          </div>
        )}

        <form className="space-y-6" onSubmit={showOtpInput ? handleVerifyOtp : handleSubmit}>
          {!showOtpInput ? (
            <>
              <FormInput
                id="email"
                name="email"
                type="email"
                label="Email address"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />

              <FormInput
                id="password"
                name="password"
                type="password"
                label="Password"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="current-password"
              />

              <div>
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </Button>
              </div>
            </>
          ) : (
            <>
              <FormInput
                id="otp"
                name="otp"
                type="text"
                label="Verification Code"
                value={formData.otp}
                onChange={handleChange}
                required
                autoComplete="one-time-code"
                inputMode="numeric"
                maxLength={6}
              />

              <div>
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying..." : "Verify Code"}
                </Button>
              </div>

              <div className="text-sm text-center">
                <button
                  onClick={handleResendOtp}
                  disabled={isRequestingOtp}
                  className="font-medium text-incite-navy hover:text-blue-500 disabled:opacity-50"
                >
                  {isRequestingOtp ? "Sending..." : "Resend Code"}
                </button>
              </div>
            </>
          )}

          <div className="text-sm text-center">
            <Link
              href="/register"
              className="font-medium text-incite-navy hover:text-blue-500"
            >
              Don't have an account? Register
            </Link>
          </div>
        </form>
      </div>
    </AuthCard>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
} 