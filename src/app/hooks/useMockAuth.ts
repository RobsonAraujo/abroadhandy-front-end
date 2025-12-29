"use client";

import { useAuth } from "@/app/contexts/AuthContext";

/**
 * Hook for development/testing purposes
 * Uses real API login with test credentials
 */
export function useMockAuth() {
  const { login } = useAuth();

  const mockLogin = async () => {
    // Use test credentials that exist in your backend
    await login({
      email: "mentor@example.com",
      password: "password123",
    });
  };

  return { mockLogin };
}
