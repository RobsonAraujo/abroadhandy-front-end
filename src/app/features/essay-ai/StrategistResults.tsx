"use client";

import { Button } from "@/app/components/ui/button";
import { EssayAngle } from "@/app/services/essay-ai";

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
          Your Essay Angle Suggestions
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          We found {angles.length} compelling angles for your essay. Each one is
          designed to highlight your unique story.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {angles.map((angle, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-secondary/30 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary font-bold">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-secondary transition-colors">
                  {angle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {angle.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          variant="secondary"
          onClick={handleDownloadPDF}
          iconStart={
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          }
        >
          Download Suggestions
        </Button>
        <Button
          variant="outline"
          onClick={onReset}
          iconStart={
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          }
        >
          Start Over
        </Button>
        <Button
          variant="outline"
          onClick={() => alert("Coming soon")}
          iconStart={
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 3.5L21 8l-9.5 9.5H7v-4.5L16.5 3.5z"
              />
            </svg>
          }
        >
          Start Writing
        </Button>
      </div>
    </div>
  );
}
