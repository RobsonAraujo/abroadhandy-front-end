"use client";

import { useState } from "react";
import Link from "next/link";
import Strategist from "@/app/features/essay-ai/strategist/Strategist";
import AnimatedTitle from "@/app/features/essay-ai/AnimatedTitle";
import { Button } from "@/app/components/ui/button";

enum ToolType {
  STRATEGIST,
  ASSISTANT,
}

export default function EssayAIPage() {
  const [selectedTool, setSelectedTool] = useState<ToolType>(
    ToolType.STRATEGIST
  );

  return (
    <div className="min-h-screen bg-white from-slate-50 via-white to-blue-50">
      <section className="py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple text-white text-sm font-medium mb-6">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Powered by AI
            </div>

            <AnimatedTitle />

            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Select the tool that best fits your needs and start crafting your
              perfect application essay.
            </p>

            <div className=" max-w-lg mx-auto justify-center">
              <div className="relative flex flex-wrap rounded-lg bg-gray-100 p-1 shadow-[0_0_0_1px_rgba(0,0,0,0.06)] text-sm">
                <label className="flex-1 text-center">
                  <input
                    type="radio"
                    name="tool"
                    className="sr-only"
                    checked={selectedTool === ToolType.STRATEGIST}
                    onChange={() => setSelectedTool(ToolType.STRATEGIST)}
                  />
                  <span
                    className={`flex cursor-pointer items-center justify-center rounded-lg px-6 py-2.5 transition-all duration-150 ease-in-out
                      ${
                        selectedTool === ToolType.STRATEGIST
                          ? "bg-white font-semibold text-slate-700 shadow-sm"
                          : "text-slate-500 hover:text-slate-700"
                      }`}
                  >
                    The Strategist
                  </span>
                </label>
                <label className="flex-1 text-center">
                  <input
                    type="radio"
                    name="tool"
                    className="sr-only"
                    checked={selectedTool === ToolType.ASSISTANT}
                    onChange={() => setSelectedTool(ToolType.ASSISTANT)}
                  />
                  <span
                    className={`flex cursor-pointer items-center justify-center rounded-lg px-6 py-2.5 transition-all duration-150 ease-in-out
                      ${
                        selectedTool === ToolType.ASSISTANT
                          ? "bg-white font-semibold text-slate-700 shadow-sm"
                          : "text-slate-500 hover:text-slate-700"
                      }`}
                  >
                    The Essay Assistant
                  </span>
                </label>
              </div>
            </div>
          </div>

          {selectedTool === ToolType.STRATEGIST ? (
            <Strategist />
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div className="max-w-md w-full bg-white rounded-2xl border border-gray-200 shadow-lg p-8 text-center">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple/10 mb-4">
                    <svg
                      className="w-8 h-8 text-purple"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Please log in to continue
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    This tool will be{" "}
                    <span className="font-semibold text-purple">free</span> when
                    you are logged in.
                  </p>
                </div>
                <Button asChild variant="purple" size="lg" className="w-full">
                  <Link href="/login">Log in</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
