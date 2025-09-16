"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MentorScheduleProps {
  mentorId: string;
}

// Mock timezone options
const timezones = [
  { value: "UTC-5", label: "EST (UTC-5)" },
  { value: "UTC-3", label: "BRT (UTC-3)" },
  { value: "UTC+0", label: "GMT (UTC+0)" },
  { value: "UTC+1", label: "CET (UTC+1)" },
];

// Generate weekly schedule data
const generateWeeklySchedule = (weekOffset: number = 0) => {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() + weekOffset * 7);

  // Get Monday of the current week
  const monday = new Date(startDate);
  monday.setDate(startDate.getDate() - startDate.getDay() + 1);

  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);

    // Mock available times - random for demo
    const allTimes = [
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
    ];
    const availableTimes = allTimes.filter(() => Math.random() > 0.4);

    weekDays.push({
      dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
      dayNumber: date.getDate(),
      fullDate: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      times: availableTimes,
    });
  }

  return weekDays;
};

export function MentorSchedule({}: MentorScheduleProps) {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [selectedTimezone, setSelectedTimezone] = useState("UTC-5");
  const [showFullSchedule, setShowFullSchedule] = useState(false);

  const weekData = generateWeeklySchedule(currentWeek);

  // Calculate week range for header
  const startDate = new Date();
  startDate.setDate(
    startDate.getDate() + currentWeek * 7 - startDate.getDay() + 1
  );
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);

  const weekRange = `${startDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })} - ${endDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })}, ${endDate.getFullYear()}`;

  const goToPreviousWeek = () => {
    if (currentWeek > 0) {
      setCurrentWeek(currentWeek - 1);
    }
  };

  const goToNextWeek = () => {
    setCurrentWeek(currentWeek + 1);
  };

  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Schedule</h2>

      {/* Header */}
      <div className="mb-6">
        {/* Navigation - Desktop */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={goToPreviousWeek}
              disabled={currentWeek === 0}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNextWeek}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="text-lg font-semibold text-gray-900 ml-2">
              {weekRange}
            </span>
          </div>

          {/* Timezone Selector */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Timezone:</span>
            <select
              value={selectedTimezone}
              onChange={(e) => setSelectedTimezone(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {timezones.map((tz) => (
                <option key={tz.value} value={tz.value}>
                  {tz.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Navigation - Mobile */}
        <div className="md:hidden">
          {/* Week Navigation */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={goToPreviousWeek}
              disabled={currentWeek === 0}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-lg font-semibold text-gray-900 text-center min-w-0 flex-1">
              {weekRange}
            </span>
            <button
              onClick={goToNextWeek}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Timezone Selector */}
          <div className="text-center">
            <select
              value={selectedTimezone}
              onChange={(e) => setSelectedTimezone(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              {timezones.map((tz) => (
                <option key={tz.value} value={tz.value}>
                  {tz.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Desktop Schedule Grid */}
      <div className="hidden md:grid grid-cols-7 gap-4">
        {weekData.map((day, index) => (
          <div key={index} className="text-center">
            {/* Day Header with colored line */}
            <div className="mb-4">
              <div
                className={`h-1 rounded-full mb-2 ${
                  day.times.length > 0 ? "bg-yellow-400" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`font-semibold mb-1 ${
                  day.times.length > 0 ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {day.dayName}
              </div>
              <div
                className={`text-sm ${
                  day.times.length > 0 ? "text-gray-600" : "text-gray-400"
                }`}
              >
                {day.dayNumber}
              </div>
            </div>

            {/* Time Slots */}
            <div className="space-y-2">
              {day.times.length > 0 ? (
                day.times.map((time, timeIndex) => (
                  <button
                    key={timeIndex}
                    className="relative group w-full text-xs py-2 px-1 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer"
                    title="Click to schedule"
                  >
                    {time}
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                      Click to schedule
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900"></div>
                    </div>
                  </button>
                ))
              ) : (
                <div className="text-xs text-gray-400 py-2">No times</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Schedule List */}
      <div className="md:hidden space-y-4">
        {weekData
          .slice(0, showFullSchedule ? weekData.length : 2)
          .map((day, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4"
            >
              {/* Day Header */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-3 h-3 rounded-full ${
                    day.times.length > 0 ? "bg-yellow-400" : "bg-gray-300"
                  }`}
                ></div>
                <div
                  className={`font-semibold ${
                    day.times.length > 0 ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  {day.dayName}, {day.fullDate}
                </div>
              </div>

              {/* Time Slots */}
              {day.times.length > 0 ? (
                <div className="grid grid-cols-3 gap-2">
                  {day.times.map((time, timeIndex) => (
                    <button
                      key={timeIndex}
                      className="py-3 px-4 text-sm font-medium border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer bg-white"
                      title="Click to schedule"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-gray-500 italic text-center py-4">
                  No available times
                </div>
              )}
            </div>
          ))}

        {/* See Full Schedule Button */}
        {!showFullSchedule && weekData.length > 2 && (
          <div className="text-center pt-4">
            <button
              onClick={() => setShowFullSchedule(true)}
              className="px-6 py-3 bg-white border border-gray-300 rounded-lg  hover:text-blue-700 hover:border-blue-300 hover:bg-blue-50 font-medium transition-colors"
            >
              See Full Schedule ({weekData.length - 2} more days)
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {showFullSchedule && (
          <div className="text-center pt-4">
            <button
              onClick={() => setShowFullSchedule(false)}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              Show Less
            </button>
          </div>
        )}
      </div>

      {/* Note */}
      <div className="mt-6 text-sm text-gray-600">
        Choose the time for your first session. The timings are displayed in
        your selected timezone.
      </div>
    </div>
  );
}
