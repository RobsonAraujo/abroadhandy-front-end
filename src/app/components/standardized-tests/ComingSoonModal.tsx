"use client";

import { useEffect, useState } from "react";
import { X, Gift } from "lucide-react";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  daysUntilLaunch?: number;
}

export default function ComingSoonModal({
  isOpen,
  onClose,
  daysUntilLaunch = 5,
}: ComingSoonModalProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: daysUntilLaunch,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!isOpen) return;

    // Calculate target date (5 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysUntilLaunch);
    targetDate.setHours(0, 0, 0, 0);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [isOpen, daysUntilLaunch]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-slide-up"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Thanks for showing interest!
              </h2>
              <p className="text-gray-600">
                We&apos;re releasing this GMAT course in:
              </p>
            </div>

            <div className="grid grid-cols-4 gap-3 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-gray-900">
                  {timeLeft.days}
                </div>
                <div className="text-xs text-gray-500 mt-1">Days</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-gray-900">
                  {timeLeft.hours}
                </div>
                <div className="text-xs text-gray-500 mt-1">Hours</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-gray-900">
                  {timeLeft.minutes}
                </div>
                <div className="text-xs text-gray-500 mt-1">Minutes</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-gray-900">
                  {timeLeft.seconds}
                </div>
                <div className="text-xs text-gray-500 mt-1">Seconds</div>
              </div>
            </div>

            <div className="mb-6 rounded-lg bg-gray-50 border border-gray-200 p-4">
              <div className="flex items-center gap-2 justify-center">
                <Gift className="w-5 h-5 text-gray-700" />
                <p className="text-sm font-medium text-gray-700">
                  This will be a <strong>free tool</strong> for your use!
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-900 transition-colors"
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
