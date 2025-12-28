"use client";

import { Book, Lightbulb, Search, Star, Target, WholeWord } from "lucide-react";
import { useEffect, useState } from "react";

const loadingMessages = [
  { text: "Analyzing your profile...", icon: <Search color="#c87dff" /> },
  {
    text: "Checking our database for similar essays...",
    icon: <Book color="#c87dff" />,
  },
  {
    text: "Scraping the web for latest university insights...",
    icon: <WholeWord color="#c87dff" />,
  },
  {
    text: "Finding the most compelling angles...",
    icon: <Lightbulb color="#c87dff" />,
  },
  {
    text: "Crafting personalized suggestions...",
    icon: <Star color="#c87dff" />,
  },
  {
    text: "Almost there! Finalizing your results...",
    icon: <Target color="#c87dff" />,
  },
];

export default function StrategistLoading() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 3000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + Math.random() * 8;
      });
    }, 500);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto text-center py-16">
      <div className="mb-8">
        <div className="w-20 h-20 mx-auto mb-6 relative">
          <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
          <div
            className="absolute inset-0 rounded-full border-4 border-purple border-t-transparent animate-spin"
            style={{ animationDuration: "1s" }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-3xl">
            {loadingMessages[currentIndex].icon}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Generating Creative Essay Ideas
        </h3>

        <div className="h-12 flex items-center justify-center">
          <p key={currentIndex} className="text-gray-600 animate-fade-in">
            {loadingMessages[currentIndex].text}
          </p>
        </div>
      </div>

      <div className="max-w-xs mx-auto">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-gray-500">Progress</span>
          <span className="text-xs font-semibold text-purple">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {loadingMessages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-purple scale-125"
                : index < currentIndex
                ? "bg-purple/50"
                : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
