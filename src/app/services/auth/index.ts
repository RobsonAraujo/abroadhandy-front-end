import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  User,
  AuthApiError,
} from "./types";

const API_BASE_URL = process.env.NEXT_PUBLIC_ABROAD_HANDY_API_URL;

const TOKEN_KEY = "access_token";
const USER_KEY = "user_data";

/**
 * Get the stored JWT token
 */
export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

/**
 * Get the stored user data
 */
export function getStoredUser(): User | null {
  if (typeof window === "undefined") return null;
  const userData = localStorage.getItem(USER_KEY);
  if (!userData) return null;

  try {
    return JSON.parse(userData) as User;
  } catch {
    return null;
  }
}

/**
 * Store authentication data
 */
export function storeAuthData(token: string, user: User): void {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

/**
 * Clear authentication data
 */
export function clearAuthData(): void {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

/**
 * Make an authenticated API request
 */
async function authenticatedFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getToken();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new AuthApiError(
      errorData.message || `Request failed with status ${response.status}`,
      response.status
    );
  }

  return response.json();
}

/**
 * Login user with email and password
 */
export async function login(credentials: LoginRequest): Promise<LoginResponse> {
  const response = await authenticatedFetch<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });

  storeAuthData(response.access_token, response.user);

  return response;
}

/**
 * Register a new user
 */
export async function register(
  data: RegisterRequest
): Promise<RegisterResponse> {
  const response = await authenticatedFetch<RegisterResponse>(
    "/auth/register",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );

  return response;
}

/**
 * Validate current token and get user profile
 * Returns user data if token is valid, null otherwise
 */
export async function validateToken(): Promise<User | null> {
  const token = getToken();

  if (!token) {
    return null;
  }

  try {
    const user = await authenticatedFetch<User>("/profiles/me", {
      method: "GET",
    });

    // Update stored user data with fresh data from API
    storeAuthData(token, user);

    return user;
  } catch (error) {
    // Token is invalid - clear auth data
    if (
      error instanceof AuthApiError &&
      (error.statusCode === 401 || error.statusCode === 403)
    ) {
      clearAuthData();
    }
    return null;
  }
}

/**
 * Logout user
 */
export function logout(): void {
  clearAuthData();
}

export * from "./types";
