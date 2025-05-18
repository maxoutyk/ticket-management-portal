"use client";

import React, { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { AuthCard } from "@/components/auth/AuthCard";
import { FormInput } from "@/components/auth/FormInput";
import { Button } from "@/components/auth/Button";

export default function LoginPage() {
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

  const verifyOtp = async () => {
    if (!formData.otp) {
      setError("Please enter the verification code");
      return;
    }

    setIsLoading(true);
    try {
      console.log("Starting OTP verification with code:", formData.otp);
      
      // Verify OTP
      const otpResponse = await fetch("/api/auth/otp", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otp,
        }),
      });

      if (!otpResponse.ok) {
        const data = await otpResponse.json();
        throw new Error(data.error || "Invalid verification code");
      }

      console.log("OTP verified successfully, completing authentication");
      
      // Add a slight delay to ensure the database update has completed
      await new Promise(resolve => setTimeout(resolve, 500));

      // If OTP is valid, complete sign in WITH the OTP
      const response = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        otp: formData.otp,  // Include the OTP in the credentials
        redirect: false,
      });

      console.log("OTP verification sign-in response:", response);

      if (response?.error) {
        throw new Error(response.error);
      }

      // After successful login, redirect to dashboard
      console.log("Authentication complete, redirecting to:", callbackUrl);
      router.push(callbackUrl);
    } catch (err) {
      console.error("OTP verification error:", err);
      setError(err instanceof Error ? err.message : "Failed to verify code");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async (e: React.MouseEvent) => {
    e.preventDefault();
    await requestOtp();
  };

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-incite-navy"></div>
      </div>
    );
  }

  return (
    <AuthCard title="Sign In">
      {isRegistered && (
        <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
          <p className="text-green-700 text-sm">Account created successfully! Please login.</p>
        </div>
      )}
      
      <form onSubmit={(e) => {
        e.preventDefault();
        if (showOtpInput) {
          verifyOtp();
        } else {
          handleSubmit(e);
        }
      }} className="space-y-6">
        {error && (
          <div className="bg-red-50 border-l-4 border-incite-red p-4 rounded-r">
            <p className="text-incite-red text-sm">{error}</p>
          </div>
        )}

        {otpSent && !error && showOtpInput && (
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
            <p className="text-green-700 text-sm">
              A verification code has been sent to your email address.
            </p>
          </div>
        )}

        {showOtpInput ? (
          <div className="space-y-6">
            <div className="text-sm text-gray-600 mb-4">
              <p>This account requires two-factor authentication for additional security.</p>
              <p className="mt-2">Please enter the verification code sent to <strong>{formData.email}</strong></p>
            </div>
            
            <FormInput
              id="otp"
              name="otp"
              label="Verification Code"
              type="text"
              required
              value={formData.otp}
              onChange={handleChange}
              placeholder="000000"
              autoComplete="one-time-code"
              inputMode="numeric"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              }
            />
            
            <div>
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={isRequestingOtp}
                className="text-incite-navy text-sm hover:underline focus:outline-none"
              >
                {isRequestingOtp ? "Sending..." : "Resend code"}
              </button>
            </div>
          </div>
        ) : (
          <>
        <FormInput
          id="email"
          name="email"
          label="Email address"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          }
        />

        <FormInput
          id="password"
          name="password"
          label="Password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          }
        />
          </>
        )}

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link
              href="/register"
              className="font-medium text-incite-navy hover:text-incite-red transition-colors"
            >
              Don&apos;t have an account? Register
            </Link>
          </div>
        </div>

        <Button
          type="submit"
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : 
           showOtpInput ? "Verify & Sign In" : "Continue"}
        </Button>
      </form>
    </AuthCard>
  );
} 