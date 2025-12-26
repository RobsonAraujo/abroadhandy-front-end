"use client";

import { useState } from "react";

type ToolType = "strategist" | "assistant";

export default function EssayAIPage() {
  const [selectedTool, setSelectedTool] = useState<ToolType>("strategist");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <section className="py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Join students crafting their MBA/grad
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                school story.
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Select the tool that best fits your needs and start crafting your
              perfect application essay.
            </p>

            <div className=" justify-center">
              <div className="relative flex flex-wrap rounded-lg bg-gray-100 p-1 shadow-[0_0_0_1px_rgba(0,0,0,0.06)] text-sm">
                <label className="flex-1 text-center">
                  <input
                    type="radio"
                    name="tool"
                    className="sr-only"
                    checked={selectedTool === "strategist"}
                    onChange={() => setSelectedTool("strategist")}
                  />
                  <span
                    className={`flex cursor-pointer items-center justify-center rounded-lg px-6 py-2.5 transition-all duration-150 ease-in-out
                      ${
                        selectedTool === "strategist"
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
                    checked={selectedTool === "assistant"}
                    onChange={() => setSelectedTool("assistant")}
                  />
                  <span
                    className={`flex cursor-pointer items-center justify-center rounded-lg px-6 py-2.5 transition-all duration-150 ease-in-out
                      ${
                        selectedTool === "assistant"
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
        </div>
      </section>
    </div>
  );
}
