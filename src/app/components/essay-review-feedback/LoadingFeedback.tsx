"use client";

import { useState, useEffect } from "react";
import { FileText } from "lucide-react";
import "./style.css";

const loadingMessages = [
  "Analyzing your essay...",
  "Searching the web for successful essays...",
  "Reviewing structure and flow...",
  "Checking grammar and style...",
  "Generating personalized feedback...",
  "Almost done...",
];

export default function LoadingFeedback() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 2000); // Change message every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-6 py-4">
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-gray-700" />
          <h2 className="text-sm font-semibold text-gray-900">Review Essay</h2>
        </div>
      </div>
      <div className="border-b border-gray-200"></div>
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="loader-container">
              <div className="loader">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </div>
          </div>
          <div className="text-center space-y-2">
            <p className="text-base font-semibold text-gray-900">
              {loadingMessages[currentMessageIndex]}
            </p>
            <p className="text-sm text-gray-500">
              This may take a few moments...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
