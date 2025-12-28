"use client";

import { Button } from "@/app/components/ui/button";
import { EssayAngle } from "@/app/services/essay-ai";
import { BookCheck, Download, RotateCcw } from "lucide-react";
import Link from "next/link";

interface StrategistResultsProps {
  angles: EssayAngle[];
  onReset: () => void;
}

export default function StrategistResults({
  angles,
  onReset,
}: StrategistResultsProps) {
  const handleDownloadPDF = async () => {
    const content = angles
      .map(
        (angle, index) =>
          `${index + 1}. ${angle.title}\n\n${angle.description}\n\n---\n`
      )
      .join("\n");

    const blob = new Blob([`Essay Angle Suggestions\n\n${content}`], {
      type: "text/plain",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "essay-suggestions.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Analysis Complete
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Your Essay Idea Suggestions
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          We found {angles.length} compelling ideas for your essay. Each one is
          designed to highlight your unique story.
        </p>
      </div>

      <div className="flex justify-center space-y-4 mb-8 flex flex-wrap gap-4">
        {angles.map((angle, index) => (
          <div
            key={index}
            className="group relative bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-80"
          >
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#c87dff]/20 flex items-center justify-center text-[#c87dff] font-bold text-lg shadow-md">
              {index + 1}
            </div>

            <h3 className="text-md font-semibold text-gray-900 group-hover:text-[#c87dff] transition-colors mb-1">
              {angle.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {angle.description}
            </p>

            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#c87dff]/10 rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          variant="white"
          onClick={handleDownloadPDF}
          iconStart={<Download />}
        >
          Download Suggestions
        </Button>
        <Button variant="white" onClick={onReset} iconStart={<RotateCcw />}>
          Start Over
        </Button>
        <Link href="/login">
          <Button variant="purple" iconStart={<BookCheck />}>
            Start Writing
          </Button>
        </Link>
      </div>
    </div>
  );
}
