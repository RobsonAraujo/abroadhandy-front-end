"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { strategistService, EssayAngle } from "@/app/services/essay-ai";
import StrategistLoading from "./StrategistLoading";
import StrategistResults from "./StrategistResults";
import { questions } from "./questions";
import { ArrowRight, BadgeCheck, Check, Sparkles } from "lucide-react";

enum ViewState {
  FORM,
  LOADING,
  RESULTS,
}

export default function Strategist() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [viewState, setViewState] = useState<ViewState>(ViewState.FORM);
  const [results, setResults] = useState<EssayAngle[]>([]);
  const [error, setError] = useState<string | null>(null);

  const totalSteps = Math.ceil(questions.length / 2);
  const startIndex = currentStep * 2;
  const currentQuestions = questions.slice(startIndex, startIndex + 2);
  const isLastStep = currentStep === totalSteps - 1;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleInputChange = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const canProceed = currentQuestions.every((q) => answers[q.id]?.trim());

  const handleNext = async () => {
    if (isLastStep) {
      setViewState(ViewState.LOADING);
      setError(null);
      try {
        const response = await strategistService.getSuggestions(answers);
        setResults(response.angles);
        setViewState(ViewState.RESULTS);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setViewState(ViewState.FORM);
      }
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setResults([]);
    setViewState(ViewState.FORM);
    setError(null);
  };

  const completedCount = Object.values(answers).filter((v) => v?.trim()).length;

  if (viewState === ViewState.LOADING) {
    return <StrategistLoading />;
  }

  if (viewState === ViewState.RESULTS) {
    return <StrategistResults angles={results} onReset={handleReset} />;
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600">
              Step {currentStep + 1} of {totalSteps}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full border border-purple-100">
            <BadgeCheck className="text-purple-600" size={18} />
            <span className="text-sm font-semibold text-purple-700">
              {completedCount}/{questions.length} answered
            </span>
          </div>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-6">
        {currentQuestions.map((item) => {
          const isAnswered = answers[item.id]?.trim();
          return (
            <div
              key={item.id}
              className={`bg-gray-50 rounded-xl p-6 border transition-all duration-300 ${
                isAnswered
                  ? "border-purple-200 shadow-md bg-white"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isAnswered
                      ? "bg-purple text-white shadow-md"
                      : "bg-white text-gray-400 border border-gray-200"
                  }`}
                >
                  {isAnswered ? (
                    <Check size={20} />
                  ) : (
                    <div className="w-5 h-5">{item.icon}</div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">
                      {item.category}
                    </span>
                  </div>
                  <label className="block text-gray-900 font-semibold text-lg mb-4">
                    {item.question}
                  </label>
                  <textarea
                    value={answers[item.id] || ""}
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                    placeholder={item.placeholder}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none text-sm leading-relaxed"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex items-center justify-between pt-6 border-t border-gray-200">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={currentStep === 0}
          iconStart={
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          }
        >
          Back
        </Button>

        <Button
          variant="purple"
          onClick={handleNext}
          disabled={!canProceed}
          iconStart={isLastStep ? <Sparkles size={15} /> : undefined}
          iconEnd={!isLastStep ? <ArrowRight size={15} /> : undefined}
        >
          {isLastStep ? "Get Essay Suggestions" : "Continue"}
        </Button>
      </div>
    </div>
  );
}
