"use client";

import { useState } from "react";
import { RefinerFeedback } from "@/app/services/essay-ai";

interface AssistantFeedbackProps {
  feedback: RefinerFeedback;
  wordCount: number;
  onOpenChat?: () => void;
}

type TabType = "overview" | "improvements" | "grammar";

export default function AssistantFeedback({
  feedback,
  wordCount,
  onOpenChat,
}: AssistantFeedbackProps) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  const tabs = [
    { id: "overview" as TabType, label: "Overview", count: null },
    {
      id: "improvements" as TabType,
      label: "Improvements",
      count: feedback.improvements.length,
    },
    {
      id: "grammar" as TabType,
      label: "Grammar",
      count: feedback.grammar_corrections.length,
    },
  ];

  return (
    <div className="h-full flex flex-col bg-white rounded-2xl border-2 border-gray-100 overflow-hidden relative">
      <div className="flex-shrink-0 p-4 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-secondary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Analysis Complete</h3>
            <p className="text-xs text-gray-500">{wordCount} words analyzed</p>
          </div>
        </div>

        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeTab === tab.id
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
              {tab.count !== null && tab.count > 0 && (
                <span
                  className={`ml-1 px-1.5 py-0.5 rounded-full text-xs ${
                    activeTab === tab.id
                      ? "bg-secondary/10 text-secondary"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {activeTab === "overview" && (
          <>
            <div className="p-4 bg-gradient-to-br from-secondary/5 to-blue-50 rounded-xl border border-secondary/10">
              <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-lg">💡</span> Overall Impression
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                {feedback.overall_impression}
              </p>
            </div>

            {feedback.strengths.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-lg">✨</span> Strengths
                </h4>
                <div className="space-y-2">
                  {feedback.strengths.map((strength, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100"
                    >
                      <svg
                        className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-green-800">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {feedback.quick_wins.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-lg">⚡</span> Quick Wins
                </h4>
                <div className="space-y-2">
                  {feedback.quick_wins.map((win, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-100"
                    >
                      <svg
                        className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span className="text-sm text-yellow-800">{win}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {feedback.word_count_note && (
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="text-base">📝</span>
                  {feedback.word_count_note}
                </p>
              </div>
            )}
          </>
        )}

        {activeTab === "improvements" && (
          <div className="space-y-4">
            {feedback.improvements.length === 0 ? (
              <div className="text-center py-8 text-gray-500 text-sm">
                No improvements suggested
              </div>
            ) : (
              feedback.improvements.map((improvement, i) => (
                <div
                  key={i}
                  className="p-4 bg-white rounded-xl border-2 border-orange-100 hover:border-orange-200 transition-colors"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-orange-600">
                        {i + 1}
                      </span>
                    </div>
                    <h5 className="font-medium text-gray-900">
                      {improvement.issue}
                    </h5>
                  </div>

                  {improvement.current && (
                    <div className="mb-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-300">
                      <p className="text-xs font-medium text-red-600 mb-1">
                        Current
                      </p>
                      <p className="text-sm text-red-800 italic">
                        &quot;{improvement.current}&quot;
                      </p>
                    </div>
                  )}

                  <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-300">
                    <p className="text-xs font-medium text-green-600 mb-1">
                      Suggestion
                    </p>
                    <p className="text-sm text-green-800">
                      {improvement.suggestion}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === "grammar" && (
          <div className="space-y-3">
            {feedback.grammar_corrections.length === 0 ? (
              <div className="text-center py-8">
                <span className="text-3xl mb-2 block">🎉</span>
                <p className="text-gray-500 text-sm">
                  No grammar issues found!
                </p>
              </div>
            ) : (
              feedback.grammar_corrections.map((correction, i) => (
                <div
                  key={i}
                  className="p-4 bg-white rounded-xl border-2 border-gray-100 hover:border-secondary/20 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded line-through">
                        {correction.original}
                      </span>
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                        {correction.corrected}
                      </span>
                    </div>
                  </div>
                  {correction.explanation && (
                    <p className="text-xs text-gray-500 pl-1">
                      {correction.explanation}
                    </p>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {onOpenChat && (
        <button
          onClick={onOpenChat}
          className="absolute bottom-4 right-4 w-14 h-14 rounded-full bg-gradient-to-br from-secondary via-blue-600 to-indigo-700 text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-200 flex items-center justify-center z-10 cursor-pointer group"
          aria-label="Open AI chat"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75 group-hover:opacity-100" />
            <div className="relative w-8 h-8 flex items-center justify-center">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
