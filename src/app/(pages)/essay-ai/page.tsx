"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import AnimatedTitle from "@/app/features/essay-ai/AnimatedTitle";
import { Button } from "@/app/components/ui/button";
import { Users, TrendingUp, Bot, Sparkles } from "lucide-react";
import { sendGAEvent } from '@next/third-parties/google';
import EssayEditor from "@/app/components/essay-editor/EssayEditor";
import { EditorState } from "lexical";
import { extractTextFromEditorState } from "@/app/utils/lexicalUtils";
import { refinerService } from "@/app/services/essay-ai/refiner";
import { RefinerFeedback } from "@/app/services/essay-ai/types";
import EmpowerEssayInfos from "@/app/features/dashboard/essay-assistant/EmpowerEssayInfos";
import EssayReviewModal from "@/app/components/essay-review-modal/EssayReviewModal";
import LoginPrompt from "@/app/components/essay-ai/LoginPrompt";
import { useFeedbackLimit } from "@/app/hooks/useFeedbackLimit";

const EDITOR_STATE_KEY = "essay-ai-editor-state";
const UNIVERSITY_KEY = "essay-ai-university";
const ESSAY_PROMPT_KEY = "essay-ai-essay-prompt";

export default function EssayAIPage() {
  const [currentEditorState, setCurrentEditorState] = useState<EditorState | null>(null);
  const [feedback, setFeedback] = useState<RefinerFeedback | null>(null);
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [university, setUniversity] = useState("");
  const [essayPrompt, setEssayPrompt] = useState("");
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const {
    remainingChecks,
    canGenerateFeedback,
    incrementFeedback,
    maxFreeChecks,
  } = useFeedbackLimit();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedUniversity = localStorage.getItem(UNIVERSITY_KEY);
      const savedPrompt = localStorage.getItem(ESSAY_PROMPT_KEY);

      if (savedUniversity) setUniversity(savedUniversity);
      if (savedPrompt) setEssayPrompt(savedPrompt);
    }
  }, []);

  const handleEditorChange = useCallback((editorState: EditorState) => {
    setCurrentEditorState(editorState);

    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);

    saveTimeoutRef.current = setTimeout(() => {
      try {
        const editorStateJSON = editorState.toJSON();
        localStorage.setItem(EDITOR_STATE_KEY, JSON.stringify(editorStateJSON));
      } catch (error) {
        console.error("Error saving editor state:", error);
      }
    }, 500);
  }, []);

  const handleGenerateFeedback = useCallback(async () => {
    if (isLoadingFeedback || !canGenerateFeedback) return;

    if (!currentEditorState) {
      alert("Please write some content in the editor first.");
      return;
    }

    const essayText = extractTextFromEditorState(currentEditorState);

    if (!essayText.trim()) {
      alert("Please write some content in the editor first.");
      return;
    }

    try {
      setIsLoadingFeedback(true);
      setFeedback(null);
      setIsModalOpen(true);

      const response = await refinerService.getfeedback({
        essay: essayText,
        essay_prompt: essayPrompt,
        question: "",
        school: university,
      });

      setFeedback(response.feedback);
      incrementFeedback();

      sendGAEvent('event', 'buttonClicked', {
        button_name: "Get Feedback",
        page: "essay_ai",
        location: "essay_editor",
        remaining_checks: remainingChecks - 1,
      });
    } catch (error) {
      console.error("Error generating feedback:", error);
      alert("Failed to generate feedback. Please try again.");
    } finally {
      setIsLoadingFeedback(false);
    }
  }, [
    currentEditorState,
    essayPrompt,
    university,
    isLoadingFeedback,
    canGenerateFeedback,
    incrementFeedback,
    remainingChecks,
  ]);

  const handleUniversityChange = useCallback((value: string) => {
    setUniversity(value);
    localStorage.setItem(UNIVERSITY_KEY, value);
  }, []);

  const handleEssayPromptChange = useCallback((value: string) => {
    setEssayPrompt(value);
    localStorage.setItem(ESSAY_PROMPT_KEY, value);
  }, []);

  const getInitialState = () => {
    if (typeof window === "undefined") return undefined;

    const savedState = localStorage.getItem(EDITOR_STATE_KEY);
    if (!savedState) return undefined;

    try {
      return JSON.parse(savedState);
    } catch {
      return undefined;
    }
  };

  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-50">
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

            <p className="text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              Improve your application essays with our ethical AI tools that provide suggestions and feedback.
            </p>

            {!canGenerateFeedback ? (
              <div className="mb-6">
                <LoginPrompt maxFreeChecks={maxFreeChecks} />
              </div>
            ) : remainingChecks < maxFreeChecks ? (
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                <Sparkles className="w-4 h-4" />
                <span>
                  {remainingChecks} free feedback{remainingChecks !== 1 ? "s" : ""} remaining
                </span>
              </div>
            ) : null}
          </div>

          {/* Editor Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl p-6 lg:p-8 relative overflow-hidden max-w-5xl mx-auto">
            {/* Content Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/5 to-transparent rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/5 to-transparent rounded-full blur-xl"></div>

            <div className="relative z-10">
              {/* EmpowerEssayInfos */}
              <EmpowerEssayInfos
                university={university}
                essayPrompt={essayPrompt}
                onUniversityChange={handleUniversityChange}
                onEssayPromptChange={handleEssayPromptChange}
              />

              {/* Essay Editor */}
              <EssayEditor
                initialState={getInitialState()}
                onChange={handleEditorChange}
              />

              {/* Get Feedback Button */}
              {canGenerateFeedback && (
                <div className="mt-6 flex justify-center">
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={handleGenerateFeedback}
                    disabled={isLoadingFeedback}
                    className="group"
                    iconStart={
                      isLoadingFeedback ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Sparkles className="w-5 h-5" />
                      )
                    }
                  >
                    {isLoadingFeedback ? "Generating Feedback..." : "Get Feedback"}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Review Modal */}
      <EssayReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        feedback={feedback}
        isLoadingFeedback={isLoadingFeedback}
        essay={
          currentEditorState
            ? extractTextFromEditorState(currentEditorState)
            : ""
        }
        essayPrompt={essayPrompt}
        school={university}
        onGenerateFeedback={handleGenerateFeedback}
      />
    </div>
  );
}
