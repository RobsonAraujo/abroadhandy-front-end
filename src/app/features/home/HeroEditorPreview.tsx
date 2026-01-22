"use client";

import { useEffect, useState } from "react";
import { Sparkles, TrendingUp, CheckCircle2 } from "lucide-react";

type AnimationStage =
  | "initial"
  | "text_appearing"
  | "highlight_1"
  | "suggestion_card"
  | "text_improved"
  | "complete";

export default function HeroEditorPreview() {
  const [stage, setStage] = useState<AnimationStage>("initial");
  const [showHighlight1, setShowHighlight1] = useState(false);
  const [showSuggestionCard, setShowSuggestionCard] = useState(false);
  const [showImprovedText, setShowImprovedText] = useState(false);
  const [showSuccessBadge, setShowSuccessBadge] = useState(false);

  useEffect(() => {
    const timeline = [
      { delay: 500, action: () => setStage("text_appearing") },
      { delay: 2500, action: () => setShowHighlight1(true) },
      { delay: 4500, action: () => setShowSuggestionCard(true) },
      { delay: 6500, action: () => setShowImprovedText(true) },
      { delay: 7500, action: () => setShowSuccessBadge(true) },
      { delay: 8500, action: () => setStage("complete") },
    ];

    const timeouts = timeline.map(({ delay, action }) =>
      setTimeout(action, delay)
    );

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-full">
      {/* Editor Container */}
      <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
        {/* Toolbar */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-gray-200 rounded transition-colors opacity-60">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-200 rounded transition-colors opacity-60">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
              </svg>
            </button>
          </div>
          <div className="h-4 w-px bg-gray-300"></div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Sparkles className="w-3 h-3 text-secondary" />
            <span>AI Assistant Active</span>
          </div>
        </div>

        {/* Editor Content */}
        <div className="p-4 sm:p-6 bg-white min-h-[300px] sm:min-h-[350px] relative">
          {/* Original Text */}
          <div className="prose max-w-none">
            <p
              className={`text-base text-gray-700 leading-relaxed mb-3 transition-opacity duration-500 ${
                stage === "initial" ? "opacity-0" : "opacity-100"
              }`}
            >
              <span
                className={`font-semibold transition-all duration-300 ${
                  showHighlight1
                    ? "bg-yellow-200 px-1 rounded relative"
                    : ""
                }`}
              >
                My passion for computer science
              </span>{" "}
              began in high school when I first discovered algorithms.
            </p>

            <p
              className={`text-base text-gray-700 leading-relaxed mb-3 transition-opacity duration-500 ${
                stage === "initial" ? "opacity-0" : "opacity-100"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              During my undergraduate studies, I developed several projects
              that combined theoretical knowledge with practical applications.
            </p>

            {/* Improved Text (appears after suggestion) */}
            {showImprovedText && (
              <div className="mb-3 animate-fade-in">
                <p className="text-base text-gray-700 leading-relaxed">
                  <span className="font-semibold">My passion for computer science</span>{" "}
                  began in high school when I first discovered the power of
                  algorithms to solve complex problems.{" "}
                  <span className="text-secondary font-medium">
                    What started as curiosity evolved into a deep fascination
                    with AI and machine learning.
                  </span>
                </p>
              </div>
            )}

            {/* Suggestion Card */}
            {showSuggestionCard && (
              <div className="mb-4 animate-slide-up">
                <div className="bg-gradient-to-r from-secondary/10 to-blue-50 border-l-4 border-secondary rounded-lg p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Sparkles className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 mb-1">
                        AI Suggestion
                      </p>
                      <p className="text-sm text-gray-700">
                        Consider adding more detail about how algorithms solve
                        problems. This would strengthen your narrative.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Success Badge */}
            {showSuccessBadge && (
              <div className="mt-4 flex items-center gap-2 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold border border-green-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Clarity improved by 25%</span>
                </div>
                <div className="inline-flex items-center gap-1 text-xs text-gray-600">
                  <TrendingUp className="w-3.5 h-3.5 text-secondary" />
                  <span>Impact score: +15%</span>
                </div>
              </div>
            )}
          </div>

          {/* AI Feedback Indicator */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-gray-500">
            <div className="flex items-center gap-1.5 px-2 py-1 bg-secondary/10 rounded-full">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span className="text-secondary font-medium">AI Analyzing...</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Stats (optional enhancement) */}
      {showSuccessBadge && (
        <div className="absolute -right-2 lg:-right-4 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <div className="bg-white rounded-xl shadow-lg p-3 lg:p-4 border border-gray-200 animate-slide-in-right">
            <div className="text-center">
              <div className="text-xl lg:text-2xl font-bold text-secondary mb-1">95%</div>
              <div className="text-xs text-gray-600">User Satisfaction</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
