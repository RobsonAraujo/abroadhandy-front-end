"use client";

import { Button } from "@/app/components/ui/button";
import { Lock, ArrowRight } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

interface LoginPromptProps {
  maxFreeChecks: number;
}

export default function LoginPrompt({ maxFreeChecks }: LoginPromptProps) {
  return (
    <div className="w-full bg-gradient-to-r from-secondary/10 to-blue-50 border-2 border-secondary/20 rounded-xl p-6 lg:p-8">
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4">
          <Lock className="w-8 h-8 text-secondary" />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">
          You&apos;ve used all {maxFreeChecks} free feedback checks
        </h3>

        <p className="text-gray-700 mb-6 max-w-md leading-relaxed">
          Keep using for free in the dashboard after register. You will also be
          able to organize and type multiple essays.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button
            href="/register"
            variant="secondary"
            size="lg"
            className="group"
            iconEnd={
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            }
            onClick={() =>
              sendGAEvent("event", "buttonClicked", {
                button_name: "Register",
                page: "essay_ai",
                location: "login_prompt",
                destination: "/register",
              })
            }
          >
            Create Free Account
          </Button>
          <Button
            href="/login"
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-white"
            onClick={() =>
              sendGAEvent("event", "buttonClicked", {
                button_name: "Log in",
                page: "essay_ai",
                location: "login_prompt",
                destination: "/login",
              })
            }
          >
            Log in
          </Button>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          No credit card required • Free
        </p>
      </div>
    </div>
  );
}
