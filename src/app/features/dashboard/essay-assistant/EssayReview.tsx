import EssayAssistantChat, {
  ChatMessage,
  INITIAL_CHAT_MESSAGE,
} from "@/app/components/essay-assistant-chat/EssayAssistantChat";
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
  essay?: string;
  essayPrompt?: string;
  school?: string;
  onGenerateFeedback?: () => void;
  isModal?: boolean;
}

export default function EssayReview({
  feedback,
  isLoadingFeedback = false,
  essay = "",
  essayPrompt = "",
  school = "",
  onGenerateFeedback,
  isModal = false,
}: EssayReviewProps) {
  const [currentView, setCurrentView] = useState<ReviewView>(ReviewView.REVIEW);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    INITIAL_CHAT_MESSAGE,
  ]);

  const toggleButtonClass = "w-12 h-12 hover:w-20 hover:h-20 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-1 group overflow-hidden";
  const iconClass = "w-5 h-5 group-hover:w-6 group-hover:h-6 transition-all duration-300";

  const renderToggleButton = () => (
    currentView === ReviewView.REVIEW ? (
      <Button
        onClick={() => setCurrentView(ReviewView.CHAT)}
        className={`${toggleButtonClass} bg-gradient-to-br from-blue-500 to-blue-600`}
        title="Ask Anything"
      >
        <Bot className={iconClass} />
      </Button>
    ) : (
      <Button
        onClick={() => setCurrentView(ReviewView.REVIEW)}
        className={`${toggleButtonClass} bg-gradient-to-br from-purple-500 to-purple-600`}
        title="Review"
      >
        <Sparkles className={iconClass} />
      </Button>
    )
  );

  return (
    <div className={`relative w-full h-full ${isModal ? '' : 'm-2'} bg-white rounded-2xl border border-[#ddd] overflow-hidden`}>
      <div className={isModal ? "absolute bottom-4 right-4 z-20" : "fixed bottom-30 right-6 z-20"}>
        {renderToggleButton()}
      </div>

      <div className="w-full h-full">
        {currentView === ReviewView.REVIEW ? (
          isLoadingFeedback ? (
            <LoadingFeedback />
          ) : (
            <EssayReviewFeedback
              feedback={feedback || undefined}
              onGenerateFeedback={onGenerateFeedback}
              isLoadingFeedback={isLoadingFeedback}
            />
          )
        ) : (
          <EssayAssistantChat
            essay={essay}
            essayPrompt={essayPrompt}
            school={school}
            messages={chatMessages}
            setMessages={setChatMessages}
          />
        )}
      </div>
    </div>
  );
}
