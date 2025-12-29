"use client";

import { useState } from "react";
import Input from "./buttons/input";
import { GraduationCap, FileQuestion } from "lucide-react";

export default function EmpowerEssayInfos() {
  const [schoolValue, setSchoolValue] = useState("");
  const [questionValue, setQuestionValue] = useState("");

  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative p-5 rounded-xl border border-gray-200 bg-white hover:shadow-sm transition-shadow">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 text-gray-400">
              <GraduationCap size={20} />
            </div>
            <div className="flex-1">
              <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
                University
              </span>
            </div>
          </div>
          <Input
            label="Which school is this essay for?"
            placeholder="Harvard University"
            value={schoolValue}
            onChange={(e) => setSchoolValue(e.target.value)}
          />
        </div>

        <div className="relative p-5 rounded-xl border border-gray-200 bg-white hover:shadow-sm transition-shadow">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 text-gray-400">
              <FileQuestion size={20} />
            </div>
            <div className="flex-1">
              <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
                The Essay Question
              </span>
            </div>
          </div>
          <Input
            label="Which question does your essay answer?"
            placeholder="What experiences have shaped ?"
            value={questionValue}
            onChange={(e) => setQuestionValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
