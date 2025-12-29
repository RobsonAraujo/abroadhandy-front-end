"use client";

import Input from "./buttons/input";
import { GraduationCap, FileQuestion } from "lucide-react";

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
  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative p-5 rounded-xl border border-gray-200 bg-white hover:shadow-sm transition-shadow">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 text-gray-400">
              <GraduationCap size={20} />
            </div>
            <div className="flex-1">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                University
              </span>
            </div>
          </div>
          <Input
            label="Which school is this essay for?"
            placeholder="Harvard University"
            value={university}
            onChange={(e) => onUniversityChange(e.target.value)}
          />
        </div>

        <div className="relative p-5 rounded-xl border border-gray-200 bg-white hover:shadow-sm transition-shadow">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 text-gray-400">
              <FileQuestion size={20} />
            </div>
            <div className="flex-1">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                The Essay Question
              </span>
            </div>
          </div>
          <Input
            label="Which question does your essay answer?"
            placeholder="What experiences have shaped ?"
            value={essayPrompt}
            onChange={(e) => onEssayPromptChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
