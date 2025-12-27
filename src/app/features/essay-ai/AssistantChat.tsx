"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { refinerService } from "@/app/services/essay-ai";

interface ChatMessage {
  id: string;
  question: string;
  answer: string;
  timestamp: Date;
  isLoading?: boolean;
}

interface AssistantChatProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  essay: string;
  essayPrompt: string;
  school: string;
  wordLimit?: number;
  chatMessages: ChatMessage[];
  onNewMessage: (message: ChatMessage) => void;
}

export default function AssistantChat({
  open,
  onOpenChange,
  essay,
  essayPrompt,
  school,
  wordLimit,
  chatMessages,
  onNewMessage,
}: AssistantChatProps) {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const displayedMessages = chatMessages.filter((msg) => {
    if (msg.id.startsWith("temp-")) {
      return msg.isLoading === true;
    }
    const hasTempForThisQuestion = chatMessages.some(
      (m) => m.id.startsWith("temp-") && m.question === msg.question
    );
    return !hasTempForThisQuestion;
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !essay.trim() || isLoading) return;

    const question = input.trim();
    setInput("");
    setIsLoading(true);

    const tempId = `temp-${Date.now()}`;
    const tempMessage: ChatMessage = {
      id: tempId,
      question,
      answer: "",
      timestamp: new Date(),
      isLoading: true,
    };

    onNewMessage(tempMessage);

    try {
      const response = await refinerService.getfeedback({
        essay,
        essay_prompt: essayPrompt || "General essay review",
        question,
        school: school || "General",
        word_limit: wordLimit || undefined,
      });

      const finalMessage: ChatMessage = {
        id: Date.now().toString(),
        question,
        answer: response.feedback.overall_impression,
        timestamp: new Date(),
      };

      onNewMessage(finalMessage);
    } catch (err) {
      const errorMessage: ChatMessage = {
        id: Date.now().toString(),
        question,
        answer: `Sorry, an error occurred: ${
          err instanceof Error ? err.message : "Unknown error"
        }`,
        timestamp: new Date(),
      };
      onNewMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const canSend = input.trim().length > 0 && essay.trim().length > 50;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl h-[80vh] flex flex-col p-0">
        <DialogHeader className="px-6 py-4 border-b border-gray-200">
          <DialogTitle className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            Essay Assistant Chat
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 bg-gray-50">
          {chatMessages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Start a conversation
              </h3>
              <p className="text-sm text-gray-500 max-w-sm">
                Ask specific questions about your essay to get personalized
                feedback.
              </p>
            </div>
          ) : (
            <>
              {displayedMessages.map((message) => (
                <div key={message.id} className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="inline-block px-4 py-2.5 bg-white rounded-2xl rounded-tl-sm shadow-sm border border-gray-100">
                        <p className="text-sm text-gray-900 leading-relaxed">
                          {message.question}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      {message.isLoading ? (
                        <div className="inline-block px-4 py-2.5 bg-white rounded-2xl rounded-tl-sm shadow-sm border border-gray-100">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                              <div
                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                style={{ animationDelay: "0ms" }}
                              />
                              <div
                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                style={{ animationDelay: "150ms" }}
                              />
                              <div
                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                style={{ animationDelay: "300ms" }}
                              />
                            </div>
                            <span className="text-xs text-gray-500">
                              Thinking...
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="inline-block px-4 py-2.5 bg-white rounded-2xl rounded-tl-sm shadow-sm border border-gray-100">
                          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                            {message.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        <form onSubmit={handleSubmit} className="px-4 py-3 bg-white">
          <div className="flex items-end gap-2 max-w-3xl mx-auto">
            <div className="flex-1 relative">
              <textarea
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  e.target.style.height = "auto";
                  e.target.style.height = `${Math.min(
                    e.target.scrollHeight,
                    200
                  )}px`;
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                placeholder="Message Essay Assistant..."
                disabled={!essay.trim() || isLoading}
                rows={1}
                className="w-full px-4 py-3 pr-12 rounded-2xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-gray-400 resize-none text-sm leading-6 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                style={{ maxHeight: "200px", minHeight: "52px" }}
              />
              <button
                type="submit"
                disabled={!canSend || isLoading}
                className="absolute right-2 bottom-2 w-8 h-8 rounded-lg bg-secondary hover:bg-secondary/90 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                aria-label="Send message"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {!essay.trim() && (
            <p className="text-xs text-gray-400 mt-2 text-center max-w-3xl mx-auto">
              Write your essay first to start chatting
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
