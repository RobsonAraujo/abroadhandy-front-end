"use client";

import { Input } from "@/app/components/ui/input";
import {
  GraduationCap,
  FileQuestion,
  Bot,
  X,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

interface EmpowerEssayInfosProps {
  university: string;
  essayPrompt: string;
  onUniversityChange: (value: string) => void;
  onEssayPromptChange: (value: string) => void;
}

export default function EmpowerEssayInfos({
  university,
  essayPrompt,
  onUniversityChange,
  onEssayPromptChange,
}: EmpowerEssayInfosProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  if (!isExpanded) {
    return (
      <div className="mb-4">
        <div
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer"
          onClick={() => setIsExpanded(true)}
        >
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-700">Essay details</span>
            {university && essayPrompt && (
              <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                In use by AI.
              </span>
            )}
          </div>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-700">Essay details</h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Help AI understand your essay better
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(false)}
          className="flex items-center justify-center w-6 h-6 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative p-5 rounded-xl border border-gray-200 bg-white hover:shadow-sm transition-shadow group">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
              <GraduationCap size={20} />
            </div>
            <div className="flex-1">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                University
              </span>
            </div>
          </div>
          <div className="relative">
            <Input
              placeholder="Drop your dream school here..."
              value={university}
              onChange={(e) => onUniversityChange(e.target.value)}
            />
            {university && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 rounded-full border border-gray-200">
                  <Bot className="w-3 h-3 text-gray-500" />
                  <span className="text-xs text-gray-600">saved</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="relative p-5 rounded-xl border border-gray-200 bg-white hover:shadow-sm transition-shadow group">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 text-gray-400 group-hover:bg-purple-50 group-hover:text-purple-500 transition-colors">
              <FileQuestion size={20} />
            </div>
            <div className="flex-1">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                Essay Question
              </span>
            </div>
          </div>
          <div className="relative">
            <Input
              placeholder="Tell us about a challenge you've overcome..."
              value={essayPrompt}
              onChange={(e) => onEssayPromptChange(e.target.value)}
            />
            {essayPrompt && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 rounded-full border border-gray-200">
                  <Bot className="w-3 h-3 text-gray-500" />
                  <span className="text-xs text-gray-600">saved</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
