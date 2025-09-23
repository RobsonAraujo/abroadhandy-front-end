"use client";

import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Plus, X } from "lucide-react";
import { useState } from "react";

interface TimeSlot {
  id: number;
  startTime: string;
  endTime: string;
}

interface DayAvailability {
  day: string;
  enabled: boolean;
  timeSlots: TimeSlot[];
}

export default function AvailabilitySection() {
  const [availability, setAvailability] = useState<DayAvailability[]>([
    {
      day: "Monday",
      enabled: false,
      timeSlots: [{ id: 1, startTime: "", endTime: "" }],
    },
    {
      day: "Tuesday",
      enabled: false,
      timeSlots: [{ id: 1, startTime: "", endTime: "" }],
    },
    {
      day: "Wednesday",
      enabled: false,
      timeSlots: [{ id: 1, startTime: "", endTime: "" }],
    },
    {
      day: "Thursday",
      enabled: false,
      timeSlots: [{ id: 1, startTime: "", endTime: "" }],
    },
    {
      day: "Friday",
      enabled: false,
      timeSlots: [{ id: 1, startTime: "", endTime: "" }],
    },
    {
      day: "Saturday",
      enabled: false,
      timeSlots: [{ id: 1, startTime: "", endTime: "" }],
    },
    {
      day: "Sunday",
      enabled: false,
      timeSlots: [{ id: 1, startTime: "", endTime: "" }],
    },
  ]);

  const toggleDay = (dayIndex: number) => {
    setAvailability((prev) =>
      prev.map((day, index) =>
        index === dayIndex ? { ...day, enabled: !day.enabled } : day
      )
    );
  };

  const addTimeSlot = (dayIndex: number) => {
    setAvailability((prev) =>
      prev.map((day, index) => {
        if (index === dayIndex) {
          const newId =
            Math.max(...day.timeSlots.map((slot) => slot.id), 0) + 1;
          return {
            ...day,
            timeSlots: [
              ...day.timeSlots,
              { id: newId, startTime: "", endTime: "" },
            ],
          };
        }
        return day;
      })
    );
  };

  const removeTimeSlot = (dayIndex: number, slotId: number) => {
    setAvailability((prev) =>
      prev.map((day, index) => {
        if (index === dayIndex && day.timeSlots.length > 1) {
          return {
            ...day,
            timeSlots: day.timeSlots.filter((slot) => slot.id !== slotId),
          };
        }
        return day;
      })
    );
  };

  const updateTimeSlot = (
    dayIndex: number,
    slotId: number,
    field: "startTime" | "endTime",
    value: string
  ) => {
    setAvailability((prev) =>
      prev.map((day, index) => {
        if (index === dayIndex) {
          return {
            ...day,
            timeSlots: day.timeSlots.map((slot) =>
              slot.id === slotId ? { ...slot, [field]: value } : slot
            ),
          };
        }
        return day;
      })
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Availability</h2>
        <p className="text-gray-600">
          Set when you&apos;re available for sessions. You can add multiple time
          ranges per day.
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Weekly Schedule
        </h3>
        <div className="space-y-3">
          {availability.map((dayAvail, dayIndex) => (
            <div
              key={dayAvail.day}
              className={`transition-all duration-200 rounded-xl border-2 ${
                dayAvail.enabled
                  ? "border-gray-200 bg-gray-50 shadow-sm"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              {/* Day Header */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Checkbox
                      id={`day-${dayIndex}`}
                      checked={dayAvail.enabled}
                      onCheckedChange={() => toggleDay(dayIndex)}
                      className="h-5 w-5"
                    />
                    <label
                      htmlFor={`day-${dayIndex}`}
                      className="font-semibold text-gray-900 cursor-pointer select-none"
                    >
                      {dayAvail.day}
                    </label>
                  </div>
                </div>
              </div>

              {/* Time Slots */}
              {dayAvail.enabled && (
                <div className="px-4 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <div className="space-y-3">
                      {dayAvail.timeSlots.map((slot, slotIndex) => (
                        <div
                          key={slot.id}
                          className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm"
                        >
                          <div className="space-y-3">
                            {/* Desktop Layout */}
                            <div className="hidden sm:flex items-center gap-3">
                              <div className="flex items-center text-xs text-gray-500 font-medium min-w-0">
                                <span className="mr-2">
                                  Time Range {slotIndex + 1}:
                                </span>
                              </div>
                              <div className="flex items-center gap-2 flex-1">
                                <Input
                                  type="time"
                                  value={slot.startTime}
                                  onChange={(e) =>
                                    updateTimeSlot(
                                      dayIndex,
                                      slot.id,
                                      "startTime",
                                      e.target.value
                                    )
                                  }
                                  className="w-32 h-9 text-sm"
                                />
                                <span className="text-gray-400 font-medium text-sm px-1">
                                  →
                                </span>
                                <Input
                                  type="time"
                                  value={slot.endTime}
                                  onChange={(e) =>
                                    updateTimeSlot(
                                      dayIndex,
                                      slot.id,
                                      "endTime",
                                      e.target.value
                                    )
                                  }
                                  className="w-32 h-9 text-sm"
                                />
                              </div>
                              <button
                                onClick={() =>
                                  removeTimeSlot(dayIndex, slot.id)
                                }
                                disabled={dayAvail.timeSlots.length === 1}
                                className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Mobile Layout */}
                            <div className="sm:hidden space-y-3">
                              <div className="text-xs text-gray-500 font-medium">
                                Time Range {slotIndex + 1}:
                              </div>
                              <div className="flex items-center gap-2 justify-center">
                                <Input
                                  type="time"
                                  value={slot.startTime}
                                  onChange={(e) =>
                                    updateTimeSlot(
                                      dayIndex,
                                      slot.id,
                                      "startTime",
                                      e.target.value
                                    )
                                  }
                                  className="w-28 h-9 text-sm"
                                />
                                <span className="text-gray-400 font-medium text-sm px-1">
                                  →
                                </span>
                                <Input
                                  type="time"
                                  value={slot.endTime}
                                  onChange={(e) =>
                                    updateTimeSlot(
                                      dayIndex,
                                      slot.id,
                                      "endTime",
                                      e.target.value
                                    )
                                  }
                                  className="w-28 h-9 text-sm"
                                />
                              </div>
                              {dayAvail.timeSlots.length > 1 && (
                                <div className="flex justify-center pt-2">
                                  <button
                                    onClick={() =>
                                      removeTimeSlot(dayIndex, slot.id)
                                    }
                                    className="px-3 py-1.5 text-xs  hover:text-red-700 hover:bg-red-50 rounded-md transition-all duration-200 font-medium border border-gray-300"
                                  >
                                    Remove this time range
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}

                      <Button
                        variant="outline"
                        size="sm"
                        hoverVariant="ghost"
                        onClick={() => addTimeSlot(dayIndex)}
                        className="h-8 text-xs border-gray-300 text-gray-600 cursor-pointer"
                        iconStart={<Plus className="w-3 h-3" />}
                      >
                        Add Time Range
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Integration Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Calendar Integration
        </h3>
        <p className="text-gray-600 mb-4">
          Connect your calendar to automatically sync your availability and
          avoid double bookings.
        </p>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <span className="font-medium text-gray-900">
                  Google Calendar
                </span>
                <p className="text-sm text-gray-500">
                  Sync with your Google Calendar
                </p>
              </div>
            </div>
            <Button disabled className="opacity-50 cursor-not-allowed">
              Connect
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <span className="font-medium text-gray-900">
                  Outlook Calendar
                </span>
                <p className="text-sm text-gray-500">
                  Sync with your Outlook Calendar
                </p>
              </div>
            </div>
            <Button disabled className="opacity-50 cursor-not-allowed">
              Connect
            </Button>
          </div>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start space-x-2">
            <svg
              className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-sm font-medium text-yellow-800">Coming Soon</p>
              <p className="text-sm text-yellow-700 mt-1">
                Calendar integration will be available soon. For now, please
                manually set your availability above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
