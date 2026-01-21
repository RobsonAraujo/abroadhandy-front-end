"use client";

import { useState } from "react";
import Link from "next/link";
import Strategist from "@/app/features/essay-ai/strategist/Strategist";
import AnimatedTitle from "@/app/features/essay-ai/AnimatedTitle";
import { Button } from "@/app/components/ui/button";
import { Users, TrendingUp, Bot } from "lucide-react";
import { sendGAEvent } from '@next/third-parties/google';

enum ToolType {
  STRATEGIST,
  ASSISTANT,
}

export default function EssayAIPage() {
  const [selectedTool, setSelectedTool] = useState<ToolType>(
    ToolType.STRATEGIST
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      <section className="py-12 lg:py-16 relative z-10">
        <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
          {/* Stats Bar */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-lg">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <Bot className="w-4 h-4 text-secondary" />
                <span>AI-Powered Tools</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <Users className="w-4 h-4 text-purple-600" />
                <span>Expert Guidance</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            {/* Enhanced Badge with Glow Effect */}
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-blue-600 rounded-full blur opacity-30"></div>
              <div className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-secondary to-blue-600 text-white text-sm font-semibold shadow-lg">
                <svg
                  className="w-5 h-5"
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
                Powered by Advanced AI
              </div>
            </div>

            <AnimatedTitle />

            <p className="text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
              Improve your application essays with our ethical AI tools that provide suggestions and feedback.
              Choose your path to admission success.
            </p>

            <div className="max-w-lg mx-auto justify-center mb-8">
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

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Content Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/5 to-transparent rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/5 to-transparent rounded-full blur-xl"></div>

            <div className="relative z-10">
              {selectedTool === ToolType.STRATEGIST ? (
                <Strategist />
              ) : (
                <div className="flex flex-col items-center justify-center py-12 px-4">
                  <div className="max-w-md w-full text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                      <svg
                        className="w-8 h-8 text-secondary"
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Please log in to continue
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      This tool will be{" "}
                      <span className="font-semibold text-secondary">free</span>{" "}
                      when you are logged in.
                    </p>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full sm:w-auto"
                      onClick={() =>
                        sendGAEvent('event', 'buttonClicked', {
                          button_name: "Log in",
                          page: "essay_ai",
                          location: "assistant_tab",
                          destination: "/login",
                        })
                      }
                    >
                      <Link href="/login">Log in</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
