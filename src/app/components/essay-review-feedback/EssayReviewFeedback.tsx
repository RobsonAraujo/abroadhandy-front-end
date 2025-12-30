"use client";

import { RefreshCw, FileText, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { RefinerFeedback } from "@/app/services/essay-ai/types";
import { Button } from "../ui/button";

enum FEEDBACK_SECTIONS {
  OVERALL = "overall",
  STRENGTHS = "strengths",
  IMPROVEMENTS = "improvements",
  QUICK_WINS = "quick_wins",
}

interface EssayReviewFeedbackProps {
  feedback?: RefinerFeedback;
}

export default function EssayReviewFeedback({
  feedback,
}: EssayReviewFeedbackProps) {
  const [hiddenSections, setHiddenSections] = useState<Set<string>>(new Set());

  const toggleSection = (sectionName: string) => {
    setHiddenSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(sectionName)) {
        newSet.delete(sectionName);
      } else {
        newSet.add(sectionName);
      }
      return newSet;
    });
  };

  const clearAllFeedback = () => {
    setHiddenSections(
      new Set([
        FEEDBACK_SECTIONS.OVERALL,
        FEEDBACK_SECTIONS.STRENGTHS,
        FEEDBACK_SECTIONS.IMPROVEMENTS,
        FEEDBACK_SECTIONS.QUICK_WINS,
      ])
    );
  };

  const allSectionsHidden = () => {
    if (!feedback) return false;

    const availableSections = [FEEDBACK_SECTIONS.OVERALL];
    if (feedback.strengths && feedback.strengths.length > 0)
      availableSections.push(FEEDBACK_SECTIONS.STRENGTHS);
    if (feedback.improvements && feedback.improvements.length > 0)
      availableSections.push(FEEDBACK_SECTIONS.IMPROVEMENTS);
    if (feedback.quick_wins && feedback.quick_wins.length > 0)
      availableSections.push(FEEDBACK_SECTIONS.QUICK_WINS);

    return availableSections.every((section) => hiddenSections.has(section));
  };

  if (!feedback || allSectionsHidden()) {
    return (
      <div className="w-full h-full flex flex-col bg-white">
        <div className="px-6 py-4 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Essay Review
            </h2>
            <p className="text-sm text-gray-600 mt-1">AI-powered feedback</p>
          </div>
        </div>
        <div className="flex-1 p-6 flex items-center justify-center">
          <div className="text-center max-w-md">
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
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
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
          <Button
            onClick={clearAllFeedback}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            iconStart={<RefreshCw className="w-3.5 h-3.5" />}
          >
            Clear Feedback
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {!hiddenSections.has(FEEDBACK_SECTIONS.OVERALL) && (
          <section className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Overall Impression
              </h3>
              <Button
                onClick={() => toggleSection(FEEDBACK_SECTIONS.OVERALL)}
                className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                iconStart={<CheckCircle2 className="w-3 h-3" />}
              >
                Resolve
              </Button>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {feedback.overall_impression}
            </p>
          </section>
        )}

        {/* Strengths */}
        {feedback.strengths &&
          feedback.strengths.length > 0 &&
          !hiddenSections.has(FEEDBACK_SECTIONS.STRENGTHS) && (
            <section className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Strengths
                </h3>
                <Button
                  onClick={() => toggleSection(FEEDBACK_SECTIONS.STRENGTHS)}
                  className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                  iconStart={<CheckCircle2 className="w-3 h-3" />}
                >
                  Resolve
                </Button>
              </div>
              <ul className="space-y-3">
                {feedback.strengths.map((strength, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 leading-relaxed"
                  >
                    <span className="text-gray-400 mt-0.5">•</span>
                    <span className="flex-1">{strength}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

        {/* Improvements */}
        {feedback.improvements &&
          feedback.improvements.length > 0 &&
          !hiddenSections.has(FEEDBACK_SECTIONS.IMPROVEMENTS) && (
            <section className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Areas for Improvement
                </h3>
                <Button
                  onClick={() => toggleSection(FEEDBACK_SECTIONS.IMPROVEMENTS)}
                  className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                  iconStart={<CheckCircle2 className="w-3 h-3" />}
                >
                  Resolve
                </Button>
              </div>
              <div className="space-y-6">
                {feedback.improvements.map((improvement, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-gray-300 pl-6 space-y-4"
                  >
                    <h4 className="text-base font-medium text-gray-900">
                      {improvement.issue}
                    </h4>
                    {improvement.current && (
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                          Current Text
                        </p>
                        <p className="text-gray-700 italic leading-relaxed">
                          &ldquo;{improvement.current}&rdquo;
                        </p>
                      </div>
                    )}
                    {improvement.suggestion && (
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                          Suggestion
                        </p>
                        <p className="text-gray-700 leading-relaxed">
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
        {feedback.quick_wins &&
          feedback.quick_wins.length > 0 &&
          !hiddenSections.has(FEEDBACK_SECTIONS.QUICK_WINS) && (
            <section className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Quick Wins
                </h3>
                <Button
                  onClick={() => toggleSection(FEEDBACK_SECTIONS.QUICK_WINS)}
                  className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                  iconStart={<CheckCircle2 className="w-3 h-3" />}
                >
                  Resolve
                </Button>
              </div>
              <ul className="space-y-3">
                {feedback.quick_wins.map((win, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 leading-relaxed"
                  >
                    <span className="text-gray-400 mt-0.5">•</span>
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
