"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import {
  User,
  LoginRequest,
  RegisterRequest,
  RegisterResponse,
  login as authLogin,
  register as authRegister,
  logout as authLogout,
  validateToken,
  getStoredUser,
  AuthApiError,
} from "@/app/services/auth";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginRequest) => Promise<boolean>;
  register: (data: RegisterRequest) => Promise<RegisterResponse>;
  logout: () => void;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Validate token on app load
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // First, check if we have stored user data for immediate UI
        const storedUser = getStoredUser();
        if (storedUser) {
          setUser(storedUser);
        }

        // Then validate token with the API
        const validatedUser = await validateToken();

        if (validatedUser) {
          setUser(validatedUser);
        } else if (storedUser) {
          // Token was invalid, clear the stored user
          setUser(null);
        }
      } catch (err) {
        console.error("Auth initialization error:", err);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = useCallback(
    async (credentials: LoginRequest): Promise<boolean> => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await authLogin(credentials);
        setUser(response.user);
        return true;
      } catch (err) {
        if (err instanceof AuthApiError) {
          if (err.statusCode === 401) {
            setError("Invalid email or password");
          } else if (err.statusCode === 429) {
            setError("Too many attempts. Please try again later");
          } else {
            setError(err.message || "Login failed. Please try again");
          }
        } else {
          setError("An unexpected error occurred");
        }
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const register = useCallback(
    async (data: RegisterRequest): Promise<RegisterResponse> => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await authRegister(data);
        return response;
      } catch (err) {
        if (err instanceof AuthApiError) {
          if (err.statusCode === 409) {
            setError("Email already registered");
          } else if (err.statusCode === 400) {
            setError("Invalid registration data");
          } else {
            setError(err.message || "Registration failed. Please try again");
          }
        } else {
          setError("An unexpected error occurred");
        }
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const logout = useCallback(() => {
    authLogout();
    setUser(null);
    setError(null);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    login,
    register,
    logout,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
