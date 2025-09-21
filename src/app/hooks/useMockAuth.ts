"use client";

import { useAuth } from "@/app/contexts/AuthContext";

export function useMockAuth() {
  const { login } = useAuth();

  const mockLogin = () => {
    const mockToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

    const mockUser = {
      id: "1",
      name: "João Silva",
      email: "joao.silva@example.com",
      avatar: undefined, // Vai usar o default-avatar.svg
    };

    login(mockToken, mockUser);
  };

  return { mockLogin };
}
