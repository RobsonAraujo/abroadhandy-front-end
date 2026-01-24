"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import EssayReview from "@/app/features/dashboard/essay-assistant/EssayReview";
import { RefinerFeedback } from "@/app/services/essay-ai/types";

interface EssayReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  feedback: RefinerFeedback | null;
  isLoadingFeedback: boolean;
  essay: string;
  essayPrompt: string;
  school: string;
  onGenerateFeedback: () => void;
}

export default function EssayReviewModal({
  isOpen,
  onClose,
  feedback,
  isLoadingFeedback,
  essay,
  essayPrompt,
  school,
  onGenerateFeedback,
}: EssayReviewModalProps) {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
        <div
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] sm:h-[85vh] flex flex-col animate-slide-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
            <h2 className="text-lg font-semibold text-gray-900">
              Essay Review & Feedback
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden min-h-0 relative">
            <EssayReview
              feedback={feedback}
              isLoadingFeedback={isLoadingFeedback}
              essay={essay}
              essayPrompt={essayPrompt}
              school={school}
              onGenerateFeedback={onGenerateFeedback}
              isModal={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}
