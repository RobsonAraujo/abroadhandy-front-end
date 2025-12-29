"use client";

import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Checkbox } from "@/app/components/ui/checkbox";
import { useAuth } from "@/app/contexts/AuthContext";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function LoginForm() {
  const router = useRouter();
  const { login, isLoading, error, clearError } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (error) {
      toast.error("Oops! Something went wrong", {
        description: error,
        duration: 4000,
      });
    }
  }, [error]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    clearError();

    const success = await login({ email, password });

    if (success) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="order-1 lg:order-2">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 lg:p-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-black mb-2">
            Sign in to your account
          </h2>
          <p className="text-gray-600">
            Or{" "}
            <Link
              href="/register"
              className="font-medium text-secondary hover:text-blue-500"
            >
              create a new account
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 md:space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-base md:text-sm font-medium text-gray-700 mb-3"
            >
              Email address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-base md:text-sm font-medium text-gray-700 mb-3"
            >
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember-me" disabled={isLoading} />
              <label htmlFor="remember-me" className="text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                href="/forgot-password"
                className="font-medium text-secondary hover:text-blue-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full h-14"
            disabled={isLoading}
            iconStart={
              isLoading ? (
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              ) : null
            }
          >
            {isLoading ? <>Signing in...</> : "Sign in"}
          </Button>
        </form>
      </div>
    </div>
  );
}
