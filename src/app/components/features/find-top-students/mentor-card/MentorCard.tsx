"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Star, MapPin, GraduationCap } from "lucide-react";
import { Mentor } from "@/app/(pages)/find-top-students/page";

interface MentorCardProps {
  mentor: Mentor;
  isSelected?: boolean;
  onSelect?: (mentor: Mentor) => void;
  onHover?: (mentor: Mentor | null) => void;
}

export function MentorCard({
  mentor,
  isSelected = false,
  onSelect,
  onHover,
}: MentorCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedAbout =
    mentor.about.length > 150
      ? mentor.about.substring(0, 150) + "..."
      : mentor.about;

  return (
    <div
      className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
        isSelected
          ? "border-secondary shadow-md ring-2 ring-secondary ring-opacity-20"
          : "border-gray-200 shadow-sm hover:shadow-md hover:border-secondary hover:ring-2 hover:ring-secondary hover:ring-opacity-20"
      }`}
      onClick={() => onSelect?.(mentor)}
      onMouseEnter={() => onHover?.(mentor)}
      onMouseLeave={() => onHover?.(null)}
    >
      {/* Desktop Layout */}
      <div className="hidden md:flex">
        {/* Left Side - Avatar */}
        <div className="flex-shrink-0 p-6">
          <div className="relative">
            <Image
              src={mentor.avatar}
              alt={`${mentor.name} profile`}
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-100"
            />
          </div>
        </div>

        {/* Center - Mentor Info */}
        <div className="flex-1 p-6 pr-4">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-black mb-1">
                {mentor.name}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <div className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>{mentor.university}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{mentor.country}</span>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-800 mb-3">
                {mentor.course}
              </p>
            </div>

            {/* Rating */}
            <div className="text-right">
              <div className="flex items-center gap-1 mb-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-gray-900">
                  {mentor.rating}
                </span>
              </div>
              <p className="text-xs text-gray-500">
                {mentor.totalReviews} reviews
              </p>
            </div>
          </div>
          {/* About Section */}
          <div className="mb-4">
            <p className="text-gray-600 leading-relaxed">
              {isExpanded ? mentor.about : truncatedAbout}
            </p>
            {mentor.about.length > 150 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="text-secondary hover:text-blue-500 font-medium text-sm mt-1"
              >
                {isExpanded ? "Read less" : "Read more"}
              </button>
            )}
          </div>
        </div>

        {/* Right Side - Pricing & CTA */}
        <div className="flex-shrink-0 p-6 pl-4 border-l border-gray-100">
          <div className="flex flex-col justify-between h-full">
            <div className="text-center mb-6">
              <div className="text-2xl font-bold text-black mb-1">
                ${mentor.price30min}
              </div>
              <div className="text-sm text-gray-500 mb-3">per 30 min</div>
              <div className="text-lg font-semibold text-gray-700">
                ${mentor.price60min}
              </div>
              <div className="text-xs text-gray-500">per 60 min</div>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                className="w-full bg-secondary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Book Session
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden p-4">
        {/* Header with Avatar and Basic Info */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0">
            <Image
              src={mentor.avatar}
              alt={`${mentor.name} profile`}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-black mb-1 truncate">
              {mentor.name}
            </h3>
            <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
              <GraduationCap className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{mentor.university}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{mentor.country}</span>
            </div>
            <p className="text-sm font-medium text-gray-800 truncate">
              {mentor.course}
            </p>
          </div>
          <div className="flex-shrink-0 text-right">
            <div className="flex items-center gap-1 mb-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-gray-900 text-sm">
                {mentor.rating}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {mentor.totalReviews} reviews
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-4">
          <p className="text-gray-600 leading-relaxed text-sm">
            {isExpanded ? mentor.about : truncatedAbout}
          </p>
          {mentor.about.length > 150 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="text-secondary hover:text-blue-500 font-medium text-sm mt-1"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>

        {/* Pricing and CTA */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-6">
            <div className="text-center">
              <div className="text-lg font-bold text-black">
                ${mentor.price30min}
              </div>
              <div className="text-xs text-gray-500">30min</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-black">
                ${mentor.price60min}
              </div>
              <div className="text-xs text-gray-500">60min</div>
            </div>
          </div>
          <Button
            className="w-full bg-secondary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Book a Session
          </Button>
        </div>
      </div>
    </div>
  );
}
