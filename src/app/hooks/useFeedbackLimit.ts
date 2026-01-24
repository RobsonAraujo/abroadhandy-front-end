"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/app/contexts/AuthContext";

const FEEDBACK_COUNT_KEY = "__sys_3e7b9a2f-4c18-4e91-bd62-8f7c1a0e9d44";
const MAX_FREE_CHECKS = 3;

export function useFeedbackLimit() {
  const { isAuthenticated } = useAuth();
  const [feedbackCount, setFeedbackCount] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(FEEDBACK_COUNT_KEY);
      if (stored) {
        const count = parseInt(stored, 10);
        setFeedbackCount(isNaN(count) ? 0 : count);
      }
    }
  }, []);

  // If user is authenticated, they have unlimited checks
  const canGenerateFeedback =
    isAuthenticated || feedbackCount < MAX_FREE_CHECKS;
  const remainingChecks = isAuthenticated
    ? Infinity
    : Math.max(0, MAX_FREE_CHECKS - feedbackCount);

  const incrementFeedback = useCallback(() => {
    if (isAuthenticated) {
      // Don't increment for authenticated users
      return;
    }

    const newCount = feedbackCount + 1;
    setFeedbackCount(newCount);
    if (typeof window !== "undefined") {
      localStorage.setItem(FEEDBACK_COUNT_KEY, newCount.toString());
    }
  }, [feedbackCount, isAuthenticated]);

  return {
    remainingChecks,
    canGenerateFeedback,
    incrementFeedback,
    maxFreeChecks: MAX_FREE_CHECKS,
  };
}
