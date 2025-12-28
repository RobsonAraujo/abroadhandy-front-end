"use client";

import { useEffect, useState } from "react";

const loadingMessages = [
  { text: "Reading your essay...", icon: "📖" },
  { text: "Analyzing writing structure...", icon: "🔍" },
  { text: "Checking grammar and style...", icon: "✍️" },
  { text: "Identifying strengths...", icon: "💪" },
  { text: "Finding improvement areas...", icon: "🎯" },
  { text: "Preparing personalized feedback...", icon: "✨" },
];

export default function AssistantLoading() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 2500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + Math.random() * 10;
      });
    }, 400);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="h-full flex flex-col items-center justify-center bg-white rounded-2xl border-2 border-gray-100 p-8">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-6 relative">
          <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
          <div
            className="absolute inset-0 rounded-full border-4 border-secondary border-t-transparent animate-spin"
            style={{ animationDuration: "1s" }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-2xl">
            {loadingMessages[currentIndex].icon}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Analyzing Your Essay
        </h3>

        <div className="h-8 flex items-center justify-center mb-6">
          <p
            key={currentIndex}
            className="text-gray-600 text-sm animate-fade-in"
          >
            {loadingMessages[currentIndex].text}
          </p>
        </div>

        <div className="w-48 mx-auto">
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-secondary rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-1.5">
          {loadingMessages.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-secondary scale-125"
                  : index < currentIndex
                  ? "bg-secondary/50"
                  : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
