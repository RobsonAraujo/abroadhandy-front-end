"use client";

import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DiagnosticPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  const userNotAuthenticated = !isLoading && !isAuthenticated;

  useEffect(() => {
    if (userNotAuthenticated) {
      router.push("/login");
    }
  }, [userNotAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-primary" />
      </div>
    );
  }

  if (userNotAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/dashboard/standardized-tests"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to course path
        </Link>

        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="mb-2 text-2xl font-semibold text-gray-900">
            Day 1 – Diagnostic
          </h1>
          <p className="mb-6 text-gray-600">
            Module 0: 10-question Quant diagnostic. Content coming soon.
          </p>
          <Link
            href="/dashboard/standardized-tests"
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary/90"
          >
            <ArrowLeft className="h-4 w-4" />
            Return to course path
          </Link>
        </div>
      </div>
    </div>
  );
}
