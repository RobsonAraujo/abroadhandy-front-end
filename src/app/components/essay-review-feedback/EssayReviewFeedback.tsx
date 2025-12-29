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
      <div className="w-full h-full flex flex-col">
        <div className="px-6 py-4">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-gray-700" />
            <h2 className="text-sm font-semibold text-gray-900">
              Review Essay
            </h2>
          </div>
        </div>
        <div className="border-b border-gray-200"></div>
        <div className="flex-1 p-6 flex items-center justify-center">
          <p className="text-gray-500 text-center">
            No feedback available yet. Generate feedback to see your essay
            review.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div className="px-6 py-4">
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-gray-700" />
          <h2 className="text-sm font-semibold text-gray-900">Review Essay</h2>
        </div>
      </div>

      <div className="border-b border-gray-200"></div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <section className="bg-gray-50 rounded-lg p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 shadow-sm">
              <Eye className="w-5 h-5 text-gray-600" />
            </div>
            <h3 className="text-base font-semibold text-gray-900">
              Overall Impression
            </h3>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed pl-7">
            {feedback.overall_impression}
          </p>
        </section>

        {feedback.strengths && feedback.strengths.length > 0 && (
          <section className="bg-gray-50 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">
                Strengths
              </h3>
            </div>
            <ul className="space-y-2 pl-7">
              {feedback.strengths.map((strength, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-700 leading-relaxed"
                >
                  <span className="text-green-600 mr-2">•</span>
                  {strength}
                </li>
              ))}
            </ul>
          </section>
        )}

        {feedback.improvements && feedback.improvements.length > 0 && (
          <section className="bg-gray-50 rounded-lg p-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 shadow-sm">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">
                Improvements
              </h3>
            </div>
            <div className="space-y-4 pl-7">
              {feedback.improvements.map((improvement, index) => (
                <div
                  key={index}
                  className="bg-white border-l-4 border-purple-500 p-4 rounded-r-md space-y-2"
                >
                  <h4 className="text-sm font-semibold text-gray-900">
                    {improvement.issue}
                  </h4>
                  {improvement.current && (
                    <div>
                      <p className="text-xs font-medium text-gray-600 mb-1">
                        Current:
                      </p>
                      <p className="text-sm text-gray-700 italic">
                        &ldquo;{improvement.current}&rdquo;
                      </p>
                    </div>
                  )}
                  {improvement.suggestion && (
                    <div>
                      <p className="text-xs font-medium text-gray-600 mb-1">
                        Suggestion:
                      </p>
                      <p className="text-sm text-gray-700">
                        {improvement.suggestion}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {feedback.quick_wins && feedback.quick_wins.length > 0 && (
          <section className="bg-gray-50 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 shadow-sm">
                <Zap className="w-5 h-5 text-yellow-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">
                Quick Wins
              </h3>
            </div>
            <ul className="space-y-2 pl-7">
              {feedback.quick_wins.map((win, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-700 leading-relaxed"
                >
                  <span className="text-yellow-600 mr-2">⚡</span>
                  {win}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
