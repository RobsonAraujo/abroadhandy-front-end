"use client";

import "./GetFeedbackButton.css";
import { Sparkles } from "lucide-react";

interface GetFeedbackButtonProps {
  onClick?: () => void;
}

export default function GetFeedbackButton({ onClick }: GetFeedbackButtonProps) {
  return (
    <button className="get-feedback-btn" onClick={onClick} title="Get Feedback">
      <Sparkles className="feedback-icon" size={24} />
      <span className="feedback-text">Analyze Essay</span>
    </button>
  );
}
