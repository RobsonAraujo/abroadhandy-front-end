"use client";

interface GamificationStripProps {
  currentStep?: number;
  totalSteps?: number;
  level?: number;
  xp?: number;
  streak?: number;
}

export default function GamificationStrip({
  currentStep = 0,
  totalSteps = 9,
  level = 1,
  xp = 0,
  streak = 0,
}: GamificationStripProps) {
  const progressPercent =
    totalSteps > 0 ? Math.min(100, (currentStep / totalSteps) * 100) : 0;

  return (
    <div className="w-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Left: Character + Level */}
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-white shadow-md sm:h-20 sm:w-20">
            <svg
              className="h-8 w-8 sm:h-10 sm:w-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-secondary px-4 py-1.5 text-sm font-bold text-white">
                Level {level}
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-600">Beginner</p>
          </div>
        </div>

        {/* Center: XP and Streak */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2">
            <span className="text-lg">⭐</span>
            <span className="text-sm font-bold text-gray-900">{xp} XP</span>
          </div>
          {streak > 0 && (
            <div className="flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2">
              <span className="text-lg">🔥</span>
              <span className="text-sm font-bold text-white">{streak}</span>
            </div>
          )}
        </div>

        {/* Right: Progress */}
        <div className="min-w-0 flex-1 sm:max-w-xs">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium text-gray-700">Progress</span>
            <span className="font-bold text-secondary">
              {currentStep}/{totalSteps}
            </span>
          </div>
          <div
            className="h-3 w-full overflow-hidden rounded-full bg-gray-200"
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
