import EssayAssistantChat from "@/app/components/essay-assistant-chat/EssayAssistantChat";
import EssayReviewFeedback from "@/app/components/essay-review-feedback/EssayReviewFeedback";
import { useState } from "react";
import { Bot, Sparkles } from "lucide-react";
import { Button } from "@/app/components/ui/button";

enum ReviewView {
  REVIEW = "REVIEW",
  CHAT = "CHAT",
}

const feedback = {
  overall_impression:
    "Your opening introduces the topic of fintech and your role in it, which is a solid start. However, it could benefit from a stronger emotional hook that connects your personal values to the broader implications of your work in financial technology.",
  strengths: [
    "The mention of your role as a product manager at a traditional bank provides context and credibility to your journey into fintech.",
    "The focus on a pressing issue—access to basic financial services in Brazil—indicates a relevant and impactful area of concern that aligns with social impact values.",
  ],
  improvements: [
    {
      issue: "Engagement and Emotional Hook",
      current: "My journey into fintech began unexpectedly.",
      suggestion:
        'Start with a personal anecdote or a thought-provoking question that illustrates your passion for financial inclusion. For example, "As I watched a friend struggle to access funds for a medical emergency, I realized that the gap in financial services was not just a statistic—it was a matter of life and death." This approach will draw readers in and set a more personal tone.',
    },
    {
      issue: "Connection to Personal Values",
      current:
        "I noticed how many Brazilians lacked access to basic financial services.",
      suggestion:
        'Elaborate on why this issue matters to you personally. You might say, "This realization ignited a passion within me to bridge the gap between technology and finance, driven by my belief that everyone deserves equal access to financial resources." This will help convey your motivations and values more clearly.',
    },
  ],
  quick_wins: [
    "Consider starting with a vivid image or a brief story that encapsulates your feelings about financial inclusion.",
    "Use more active language to create a sense of urgency and personal investment in the topic.",
  ],
  grammar_corrections: [],
  word_count_note:
    "Current count: 25 words  \nWord limit: 650 words  \nYou have ample space to expand your essay. Use this opportunity to delve deeper into your personal story, values, and the impact you wish to have in the fintech space.",
};

export default function EssayReview() {
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
          <EssayReviewFeedback feedback={undefined} />
        ) : (
          <EssayAssistantChat />
        )}
      </div>
    </div>
  );
}
