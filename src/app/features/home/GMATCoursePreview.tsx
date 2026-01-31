"use client";

import Link from "next/link";
import {
  ArrowRight,
  Target,
  Clock,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { sendGAEvent } from "@next/third-parties/google";

export default function GMATCoursePreview() {
  const previewModules = [
    {
      id: "ch0",
      title: "Module 0 – Diagnostic",
      subtitle: "Day 1",
      status: "available",
    },
    {
      id: "ch1",
      title: "Lesson 1: How GMAT Quant Actually Works",
      status: "locked",
    },
    {
      id: "ch2",
      title: "Lesson 2: Arithmetic That GMAT Loves",
      status: "locked",
    },
    {
      id: "ch3",
      title: "Lesson 3: Algebra Without Overthinking",
      status: "locked",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            <Target className="w-4 h-4" />
            {/* <span>New Feature</span> */}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl xl:text-5xl mb-4">
            Master GMAT Quant with Our
            <span className="text-secondary"> Gamified Course</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Step-by-step preparation that adapts to your level. Track your
            progress, earn XP, and unlock lessons as you advance.
          </p>
        </div>

        {/* Preview Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden max-w-4xl mx-auto">
          {/* Gamification Strip Preview */}
          <div className="bg-white p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-black ring-2 ring-cyan-400 text-white shadow-md">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-black ring-2 ring-cyan-400 px-3 py-1 text-xs font-bold text-white">
                      Level 1
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-gray-600">Beginner</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-black px-3 py-1.5 ring-2 ring-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)]">
                  <span className="text-sm text-cyan-300">💠</span>
                  <span className="text-xs font-bold tracking-wide text-cyan-200">
                    +0 XP
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-gradient-to-br from-slate-900 via-slate-800 to-black ring-2 ring-cyan-400 px-3 py-1.5 shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                  <span className="text-sm text-cyan-300">🔥</span>
                  <span className="text-xs font-bold text-cyan-200">0</span>
                </div>
              </div>

              <div className="min-w-0 flex-1 sm:max-w-xs">
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="font-medium text-gray-700">Progress</span>
                  <span className="font-bold text-secondary">0/8</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-black transition-all duration-300"
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Course Path Preview */}
          <div className="p-6 lg:p-8">
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-6 top-6 bottom-6 w-0.5 rounded-full bg-gray-200"
                aria-hidden
              />

              <div className="space-y-4">
                {previewModules.map((module, index) => {
                  const isAvailable = module.status === "available";

                  return (
                    <div
                      key={module.id}
                      className="relative flex items-start gap-4"
                    >
                      {/* Circle node */}
                      <div className="relative z-10 flex-shrink-0">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-full border-4 border-white shadow-md transition-all ${
                            isAvailable
                              ? "bg-gradient-to-br from-slate-900 via-slate-800 to-black ring-2 ring-cyan-400"
                              : "bg-gray-300"
                          }`}
                        >
                          {isAvailable ? (
                            <span className="text-lg font-bold text-white">
                              {index + 1}
                            </span>
                          ) : (
                            <div className="h-4 w-4 rounded-full bg-gray-400" />
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <div
                          className={`block rounded-xl border-2 p-4 transition-all ${
                            isAvailable
                              ? "border-gray-200 bg-white hover:border-cyan-400 hover:shadow-lg"
                              : "border-gray-200 bg-gray-50 opacity-60"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              {module.subtitle && (
                                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                                  {module.subtitle}
                                </p>
                              )}
                              <h3
                                className={`text-sm font-bold sm:text-base ${
                                  isAvailable
                                    ? "text-gray-900"
                                    : "text-gray-500"
                                }`}
                              >
                                {module.title}
                              </h3>
                            </div>
                            {isAvailable && (
                              <div className="flex-shrink-0">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
                                  <ArrowRight className="h-3 w-3" />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    Personalized Learning
                  </h4>
                  <p className="text-xs text-gray-600">
                    Diagnostic test creates a custom study plan
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    12-Day Program
                  </h4>
                  <p className="text-xs text-gray-600">
                    Structured lessons from Day 1 to Day 12
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <TrendingUp className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    Score Optimization
                  </h4>
                  <p className="text-xs text-gray-600">
                    Focus on what moves your score fastest
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link href="/register">
            <Button
              variant="outline"
              size="lg"
              className="group"
              iconEnd={
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              }
              onClick={() =>
                sendGAEvent("event", "buttonClicked", {
                  button_name: "Start GMAT Course",
                  page: "home",
                  location: "gmat_course_preview",
                  destination: "/register",
                })
              }
            >
              Start Your GMAT Journey
            </Button>
          </Link>
          <p className="mt-4 text-sm text-gray-500">
            Free • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
