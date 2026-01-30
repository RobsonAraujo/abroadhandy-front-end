"use client";

interface GamificationStripProps {
  currentStep?: number;
  totalSteps?: number;
  level?: number;
}

export default function GamificationStrip({
  currentStep = 0,
  totalSteps = 9,
  level = 1,
}: GamificationStripProps) {
  const progressPercent =
    totalSteps > 0 ? Math.min(100, (currentStep / totalSteps) * 100) : 0;

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        {/* Character / avatar */}
        <div
          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary"
          aria-hidden
        >
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
          </svg>
        </div>

        {/* Level badge */}
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
            Level {level}
          </span>
          <span className="text-sm text-gray-500">Beginner</span>
        </div>

        {/* Progress bar */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2 text-sm">
            <span className="text-gray-600">Course progress</span>
            <span className="font-medium text-gray-700">
              {currentStep} / {totalSteps}
            </span>
          </div>
          <div
            className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-gray-200"
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Course progress: ${currentStep} of ${totalSteps} steps`}
          >
            <div
              className="h-full rounded-full bg-secondary transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
