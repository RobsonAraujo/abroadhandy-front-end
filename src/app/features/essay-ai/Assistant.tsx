"use client";

import { useState, useMemo } from "react";
import { Button } from "@/app/components/ui/button";
import EssayEditor from "@/app/components/essay-editor/EssayEditor";
import { refinerService, RefinerFeedback } from "@/app/services/essay-ai";
import AssistantFeedback from "./AssistantFeedback";
import AssistantLoading from "./AssistantLoading";
import { SCHOOLS } from "@/app/mocks/schools";

interface EditorHighlight {
  text: string;
  type: "error" | "warning" | "suggestion";
}

export default function Assistant() {
  const [essay, setEssay] = useState("");
  const [essayPrompt, setEssayPrompt] = useState("");
  const [question, setQuestion] = useState("");
  const [school, setSchool] = useState(SCHOOLS[0]);
  const [wordLimit, setWordLimit] = useState(500);

  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<RefinerFeedback | null>(null);
  const [wordCount, setWordCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const highlights = useMemo<EditorHighlight[]>(() => {
    if (!feedback) return [];

    const items: EditorHighlight[] = [];

    feedback.grammar_corrections.forEach((correction) => {
      if (correction.original) {
        items.push({ text: correction.original, type: "error" });
      }
    });

    feedback.improvements.forEach((improvement) => {
      if (improvement.current) {
        items.push({ text: improvement.current, type: "warning" });
      }
    });

    return items;
  }, [feedback]);

  const canAnalyze = essay.trim().length > 50;

  const handleAnalyze = async () => {
    if (!canAnalyze) return;

    setIsLoading(true);
    setError(null);
    setFeedback(null);

    try {
      const response = await refinerService.getfeedback({
        essay,
        essay_prompt: essayPrompt || "General essay review",
        question: question || "Please review my essay",
        school,
        word_limit: wordLimit,
      });

      setFeedback(response.feedback);
      setWordCount(response.word_count);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFeedback(null);
    setError(null);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Essay Prompt
              </label>
              <input
                type="text"
                value={essayPrompt}
                onChange={(e) => setEssayPrompt(e.target.value)}
                placeholder="e.g., What matters most to you and why?"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target School
              </label>
              <select
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent text-sm"
              >
                {SCHOOLS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specific Question (optional)
              </label>
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="e.g., Is my opening strong enough?"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Word Limit
              </label>
              <input
                type="number"
                value={wordLimit}
                onChange={(e) => setWordLimit(Number(e.target.value))}
                min={100}
                max={2000}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent text-sm"
              />
            </div>
          </div>

          <EssayEditor
            value={essay}
            onChange={setEssay}
            wordLimit={wordLimit}
            highlights={highlights}
            placeholder="Paste or write your essay here...

Start with something like:
'My journey into fintech began unexpectedly. As a product manager at a traditional bank, I noticed how many Brazilians lacked access to basic financial services...'"
            minHeight="350px"
          />

          {error && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              {!canAnalyze && essay.length > 0 && (
                <span className="text-yellow-600">
                  Write at least 50 characters to analyze
                </span>
              )}
            </p>
            <div className="flex items-center gap-3">
              {feedback && (
                <Button variant="ghost" onClick={handleReset}>
                  Clear Feedback
                </Button>
              )}
              <Button
                variant="secondary"
                onClick={handleAnalyze}
                disabled={!canAnalyze || isLoading}
                iconStart={
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                }
              >
                {isLoading ? "Analyzing..." : "Analyze Essay"}
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 min-h-[500px]">
          {isLoading ? (
            <AssistantLoading />
          ) : feedback ? (
            <AssistantFeedback feedback={feedback} wordCount={wordCount} />
          ) : (
            <div className="h-full flex flex-col items-center justify-center bg-white rounded-2xl border-2 border-dashed border-gray-200 p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ready to Analyze
              </h3>
              <p className="text-sm text-gray-500 max-w-xs">
                Write or paste your essay on the left, then click "Analyze
                Essay" to get AI-powered feedback.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
