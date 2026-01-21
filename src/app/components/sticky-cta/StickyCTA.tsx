"use client";

import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { X, Sparkles } from "lucide-react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else if (scrollY <= 300) {
        setIsVisible(false);
      }
    };


    const dismissed = localStorage.getItem("sticky-cta-dismissed");
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem("sticky-cta-dismissed", "true");
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-gradient-to-r from-secondary to-blue-600 rounded-2xl shadow-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-2 border-white/20 backdrop-blur-sm">
          <div className="flex-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Try The Strategist Free - No Sign Up Required
              </h3>
            </div>
            <p className="text-white/90 text-sm sm:text-base">
              Get instant AI-powered essay strategy and feedback. Start improving your writing in seconds.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              href="/essay-ai"
              variant="white"
              size="lg"
              className="whitespace-nowrap font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Try Free Now →
            </Button>
            <button
              onClick={handleDismiss}
              className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
