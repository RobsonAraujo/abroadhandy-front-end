import EssayAssistantChat from "@/app/components/essay-assistant-chat/EssayAssistantChat";
import EssayReviewFeedback from "@/app/components/essay-review-feedback/EssayReviewFeedback";
import LoadingFeedback from "@/app/components/essay-review-feedback/LoadingFeedback";
import { useState } from "react";
import { Bot, Sparkles } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { RefinerFeedback } from "@/app/services/essay-ai/types";

enum ReviewView {
  REVIEW = "REVIEW",
  CHAT = "CHAT",
}

interface EssayReviewProps {
  feedback?: RefinerFeedback | null;
  isLoadingFeedback?: boolean;
}

export default function EssayReview({
  feedback,
  isLoadingFeedback = false,
}: EssayReviewProps) {
  const [currentView, setCurrentView] = useState<ReviewView>(ReviewView.REVIEW);

  return (
    <div className="relative w-full h-full m-2 bg-white rounded-2xl border-2 border-gray-100 overflow-hidden">
      <div className="fixed bottom-30 right-6 z-20">
        {currentView === ReviewView.REVIEW ? (
          <Button
            onClick={() => setCurrentView(ReviewView.CHAT)}
            className="w-12 h-12 hover:w-20 hover:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-1 group overflow-hidden"
            title="Ask Anything"
          >
            <Bot className="w-5 h-5 group-hover:w-6 group-hover:h-6 transition-all duration-300" />
          </Button>
        ) : (
          <Button
            onClick={() => setCurrentView(ReviewView.REVIEW)}
            className="w-12 h-12 hover:w-20 hover:h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-1 group overflow-hidden"
            title="Review"
          >
            <Sparkles className="w-5 h-5 group-hover:w-6 group-hover:h-6 transition-all duration-300" />
          </Button>
        )}
      </div>

      <div className="w-full h-full">
        {currentView === ReviewView.REVIEW ? (
          isLoadingFeedback ? (
            <LoadingFeedback />
          ) : (
            <EssayReviewFeedback feedback={feedback || undefined} />
          )
        ) : (
          <EssayAssistantChat />
        )}
      </div>
    </div>
  );
}
