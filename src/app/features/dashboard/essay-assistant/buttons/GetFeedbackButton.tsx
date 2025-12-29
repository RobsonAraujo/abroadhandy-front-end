"use client";

import { Button } from "@/app/components/ui/button";
import "./GetFeedbackButton.css";
import { Sparkles } from "lucide-react";

interface GetFeedbackButtonProps {
  onClick?: () => void;
  isLoading?: boolean;
}

export default function GetFeedbackButton({
  onClick,
  isLoading,
}: GetFeedbackButtonProps) {
  return (
    <Button
      variant="ghost"
      disabled={isLoading}
      onClick={onClick}
      title="Get Feedback"
    >
      <div className="get-feedback-btn">
        <Sparkles className="feedback-icon" size={24} />
        <span className="feedback-text">Analyze Essay</span>
      </div>
    </Button>
  );
}
