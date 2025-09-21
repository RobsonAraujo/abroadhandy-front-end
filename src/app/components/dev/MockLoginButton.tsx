"use client";

import { Button } from "@/app/components/ui/button";
import { useMockAuth } from "@/app/hooks/useMockAuth";
import { useAuth } from "@/app/contexts/AuthContext";

export default function MockLoginButton() {
  const { mockLogin } = useMockAuth();
  const { isAuthenticated, logout, user } = useAuth();

  // if (process.env.NODE_ENV !== "development") {
  //   return null;
  // }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white p-4 rounded-lg shadow-lg border">
      <p className="text-sm text-gray-600 mb-2">Dev Tools</p>
      {isAuthenticated ? (
        <div className="space-y-2">
          <p className="text-xs text-green-600">Logado como: {user?.name}</p>
          <Button onClick={logout} variant="outline" size="sm">
            Logout
          </Button>
        </div>
      ) : (
        <Button onClick={mockLogin} variant="primary" size="sm">
          Mock Login
        </Button>
      )}
    </div>
  );
}
