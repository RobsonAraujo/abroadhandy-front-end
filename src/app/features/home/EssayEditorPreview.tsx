"use client";

import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";
import { sendGAEvent } from '@next/third-parties/google';

export default function EssayEditorPreview() {

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black lg:text-5xl xl:text-6xl mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Try our AI-powered essay editor right now. No sign-up required.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Preview Card */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-2xl overflow-hidden">
            {/* Mock Toolbar */}
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1">
                <button className="p-2 hover:bg-gray-200 rounded opacity-60">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-200 rounded opacity-60">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-200 rounded opacity-60">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </button>
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <div className="flex items-center gap-1">
                <button className="p-2 hover:bg-gray-200 rounded opacity-60">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-200 rounded opacity-60">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-200 rounded opacity-60">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.79 21L3 11.21v2c0 .53.21 1.04.59 1.41l7.79 7.79c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83L12.79 21z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mock Editor Content */}
            <div className="p-8 bg-white min-h-[400px]">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <span className="font-semibold">My passion for computer science</span> began in high school when I first discovered the power of algorithms to solve complex problems. What started as curiosity about how search engines work evolved into a deep fascination with artificial intelligence and machine learning.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  During my undergraduate studies, I developed several projects that combined theoretical knowledge with practical applications. One particular project involved creating a recommendation system using collaborative filtering, which opened my eyes to the real-world impact of data science.
                </p>
                <div className="bg-blue-50 border-l-4 border-secondary p-4 my-4 rounded">
                  <p className="text-sm text-secondary font-semibold mb-1">AI Suggestion:</p>
                  <p className="text-gray-700 text-sm">
                    Consider adding a specific example of how your project improved something or impacted users. This would strengthen your narrative.
                  </p>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This experience solidified my desire to pursue graduate studies, where I hope to contribute to cutting-edge research in natural language processing and develop tools that can make a meaningful difference.
                </p>
              </div>
            </div>

            {/* Mock Feedback Panel */}
            <div className="bg-gradient-to-r from-secondary/10 to-purple-100/50 border-t border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">AI Feedback Available</h4>
                  <p className="text-sm text-gray-600">
                    Get instant suggestions for improving clarity, structure, and impact. Our AI analyzes your essay and provides actionable feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-10">
            <Button
              href="/essay-ai"
              variant="secondary"
              size="lg"
              iconEnd={<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
              onClick={() =>
                sendGAEvent('event', 'buttonClicked', {
                  button_name: "Try EssayAI Free Now",
                  page: "home",
                  location: "essay_preview_section",
                  destination: "/essay-ai",
                })
              }
            >
              Try EssayAI Free Now
            </Button>
          </div>
        </div>

        
      </div>
    </section>
  );
}
