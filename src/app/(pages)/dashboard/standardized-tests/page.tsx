"use client";

import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GamificationStrip from "@/app/features/standardized-tests/GamificationStrip";
import CoursePath from "@/app/features/standardized-tests/CoursePath";
import { GMAT_QUANT_PATH } from "@/app/features/standardized-tests/curriculum";

const BASE_PATH = "/dashboard/standardized-tests";

export default function StandardizedTestsPage() {
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
          href="/dashboard"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        <h1 className="mb-1 text-2xl font-semibold text-gray-900">
          GMAT Quant Foundations
        </h1>
        <p className="mb-8 text-gray-600">
          Step-by-step path from diagnostic to score optimization.
        </p>

        <div className="mb-10">
          <GamificationStrip
            currentStep={0}
            totalSteps={GMAT_QUANT_PATH.length}
            level={1}
          />
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <CoursePath nodes={GMAT_QUANT_PATH} basePath={BASE_PATH} />
        </div>
      </div>
    </div>
  );
}
