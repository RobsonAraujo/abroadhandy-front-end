"use client";

import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  const { isAuthenticated, user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Welcome, {user.name.split(` `)[0]}
          </h1>
          <p className="text-gray-600 mt-1">
            Here&apos;s what&apos;s happening with your mentoring journey today.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Get Started
                </h3>
                <p className="text-gray-600 mb-6">
                  Complete your mentor profile to start connecting with students
                  who need your guidance.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 border-l-4 border-orange-500">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Ready to get started?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Set up your profile and start connecting with students
                    </p>
                  </div>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 h-12 px-6 text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto flex-shrink-0"
                    iconEnd={<ArrowRight className="w-5 h-5" />}
                  >
                    <Link
                      href="/dashboard/profile"
                      className="flex items-center justify-start sm:justify-center"
                    >
                      Complete Setup
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Welcome to AbroadHandy
              </h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  You&apos;re part of our exclusive group of pioneer mentors.
                  Help shape the future of university applications abroad.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-800 font-medium">
                    Early Access Benefits
                  </p>
                  <ul className="text-xs text-blue-700 mt-2 space-y-1">
                    <li>• Priority student matching</li>
                    <li>• Direct feedback channel</li>
                    <li>• Exclusive mentor community</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                What&apos;s Next?
              </h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Set up your mentor profile to start receiving student requests
                  and begin your mentoring journey.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">
                    Profile Setup Tips
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Add a professional photo</li>
                    <li>• Share your university story</li>
                    <li>• Highlight your expertise</li>
                    <li>• Set your availability</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Your Impact
              </h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  As a pioneer mentor, you&apos;ll help students navigate their
                  university application journey.
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-green-800 font-medium">
                    You&apos;ll Help Students With
                  </p>
                  <ul className="text-xs text-green-700 mt-2 space-y-1">
                    <li>• University selection strategy</li>
                    <li>• Application essay guidance</li>
                    <li>• Interview preparation</li>
                    <li>• Scholarship opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
