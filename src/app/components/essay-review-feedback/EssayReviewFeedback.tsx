"use client";

import { FileText, Eye, CheckCircle2, TrendingUp, Zap } from "lucide-react";
import { RefinerFeedback } from "@/app/services/essay-ai/types";

interface EssayReviewFeedbackProps {
  feedback?: RefinerFeedback;
}

export default function EssayReviewFeedback({
  feedback,
}: EssayReviewFeedbackProps) {
  if (!feedback) {
    return (
      <div className="w-full h-full flex flex-col bg-white">
        <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary/10">
              <FileText className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Essay Review</h2>
              <p className="text-xs text-gray-500 mt-0.5">
                AI-powered feedback
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 p-6 flex items-center justify-center">
          <div className="text-center max-w-md">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mx-auto mb-4">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-600 font-medium mb-1">
              No feedback available yet
            </p>
            <p className="text-sm text-gray-500">
              Generate feedback to see your essay review and suggestions.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col overflow-hidden bg-white">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary/10">
            <FileText className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">Essay Review</h2>
            <p className="text-xs text-gray-500 mt-0.5">AI-powered feedback</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Overall Impression */}
        <section className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-sm flex-shrink-0">
              <Eye className="w-6 h-6 text-gray-700" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Overall Impression
              </h3>
              <div className="h-1 w-16 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed pl-16">
            {feedback.overall_impression}
          </p>
        </section>

        {/* Strengths */}
        {feedback.strengths && feedback.strengths.length > 0 && (
          <section className="bg-white rounded-xl p-6 border border-green-200 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-start gap-4 mb-5">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-200 shadow-sm flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Strengths
                </h3>
                <div className="h-1 w-16 bg-green-400 rounded-full"></div>
              </div>
            </div>
            <ul className="space-y-3 pl-16">
              {feedback.strengths.map((strength, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed"
                >
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-xs font-bold">✓</span>
                  </div>
                  <span className="flex-1">{strength}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Improvements */}
        {feedback.improvements && feedback.improvements.length > 0 && (
          <section className="bg-white rounded-xl p-6 border border-secondary/20 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-start gap-4 mb-5">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/20 shadow-sm flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Areas for Improvement
                </h3>
                <div className="h-1 w-16 bg-secondary rounded-full"></div>
              </div>
            </div>
            <div className="space-y-4 pl-16">
              {feedback.improvements.map((improvement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-secondary/5 to-transparent border-l-4 border-secondary rounded-r-lg p-5 space-y-3 hover:shadow-sm transition-shadow duration-200"
                >
                  <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-white text-xs font-bold">
                      {index + 1}
                    </span>
                    {improvement.issue}
                  </h4>
                  {improvement.current && (
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <p className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                        Current Text
                      </p>
                      <p className="text-sm text-gray-700 italic leading-relaxed">
                        &ldquo;{improvement.current}&rdquo;
                      </p>
                    </div>
                  )}
                  {improvement.suggestion && (
                    <div className="bg-secondary/5 rounded-lg p-3 border border-secondary/20">
                      <p className="text-xs font-semibold text-secondary mb-2 uppercase tracking-wide">
                        Suggestion
                      </p>
                      <p className="text-sm text-gray-800 leading-relaxed">
                        {improvement.suggestion}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Quick Wins */}
        {feedback.quick_wins && feedback.quick_wins.length > 0 && (
          <section className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-start gap-4 mb-5">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/30 shadow-sm flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Quick Wins
                </h3>
                <div className="h-1 w-16 bg-primary rounded-full"></div>
              </div>
            </div>
            <ul className="space-y-3 pl-16">
              {feedback.quick_wins.map((win, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed"
                >
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 mt-0.5 flex-shrink-0">
                    <span className="text-primary text-xs font-bold">⚡</span>
                  </div>
                  <span className="flex-1">{win}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
