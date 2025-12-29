"use client";

import { useCallback, useMemo } from "react";

interface EssayEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  wordLimit?: number;
  highlights?: HighlightItem[];
  disabled?: boolean;
  minHeight?: string;
}

interface HighlightItem {
  text: string;
  type: "error" | "warning" | "suggestion";
}

const highlightColors = {
  error: "bg-red-100 text-red-900 border-b-2 border-red-400",
  warning: "bg-yellow-100 text-yellow-900 border-b-2 border-yellow-400",
  suggestion: "bg-blue-100 text-blue-900 border-b-2 border-blue-400",
};

export default function EssayEditorTemporary({
  value,
  onChange,
  placeholder = "Start writing or paste your essay here...",
  wordLimit,
  highlights = [],
  disabled = false,
  minHeight = "400px",
}: EssayEditorProps) {
  const wordCount = useMemo(() => {
    if (!value.trim()) return 0;
    return value.trim().split(/\s+/).length;
  }, [value]);

  const getWordCountColor = useCallback(() => {
    if (!wordLimit) return "text-gray-500";
    const ratio = wordCount / wordLimit;
    if (ratio > 1) return "text-red-600";
    if (ratio > 0.9) return "text-yellow-600";
    return "text-gray-500";
  }, [wordCount, wordLimit]);

  const renderHighlightedText = useCallback(() => {
    if (highlights.length === 0 || !value) return null;

    let result = value;
    const parts: { text: string; highlight?: HighlightItem }[] = [];

    highlights.forEach((highlight) => {
      const index = result.toLowerCase().indexOf(highlight.text.toLowerCase());
      if (index !== -1) {
        if (index > 0) {
          parts.push({ text: result.slice(0, index) });
        }
        parts.push({
          text: result.slice(index, index + highlight.text.length),
          highlight,
        });
        result = result.slice(index + highlight.text.length);
      }
    });

    if (result) {
      parts.push({ text: result });
    }

    if (parts.length === 0) return null;

    return (
      <div
        className="absolute inset-0 p-4 pointer-events-none whitespace-pre-wrap break-words text-transparent"
        style={{ minHeight }}
      >
        {parts.map((part, i) =>
          part.highlight ? (
            <span key={i} className={highlightColors[part.highlight.type]}>
              {part.text}
            </span>
          ) : (
            <span key={i}>{part.text}</span>
          )
        )}
      </div>
    );
  }, [value, highlights, minHeight]);

  return (
    <div className="relative">
      <div className="relative bg-white rounded-2xl border-2 border-gray-100 focus-within:border-secondary/30 transition-colors">
        {renderHighlightedText()}
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full p-4 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none resize-none font-mono text-sm leading-relaxed"
          style={{ minHeight }}
        />
      </div>

      <div className="flex items-center justify-between mt-3 px-1">
        <div className="flex items-center gap-4">
          {highlights.length > 0 && (
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded bg-red-200 border border-red-400" />
                <span className="text-gray-500">Errors</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded bg-yellow-200 border border-yellow-400" />
                <span className="text-gray-500">Warnings</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded bg-blue-200 border border-blue-400" />
                <span className="text-gray-500">Suggestions</span>
              </span>
            </div>
          )}
        </div>

        <div className={`text-sm font-medium ${getWordCountColor()}`}>
          {wordCount}
          {wordLimit && ` / ${wordLimit}`} words
        </div>
      </div>
    </div>
  );
}
