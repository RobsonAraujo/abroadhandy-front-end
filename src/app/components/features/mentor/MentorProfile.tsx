"use client";

import { Star, User } from "lucide-react";

interface MentorProfileProps {
  mentor: {
    id: string;
    name: string;
    university: string;
    course: string;
    country: string;
    about: string;
    rating: number;
    totalReviews: number;
    avatar: string;
    status: "current" | "alumni";
    price30min: number;
    price60min: number;
  };
}

// Mock highlights based on course
const getHighlights = (course: string) => {
  const highlights = {
    "Business Administration": [
      "Mock Interviews",
      "Essay Reflection",
      "School Selection",
      "Career Strategy",
    ],
    Medicine: [
      "MCAT Prep",
      "Medical School Essays",
      "Interview Prep",
      "Clinical Experience",
    ],
    Engineering: [
      "Technical Essays",
      "Research Proposals",
      "Program Selection",
      "Industry Insights",
    ],
    "Computer Science": [
      "Technical Interviews",
      "Project Portfolio",
      "Research Experience",
      "Industry Transition",
    ],
    Law: [
      "LSAT Prep",
      "Law School Essays",
      "Mock Interviews",
      "Legal Career Guidance",
    ],
  };

  return (
    highlights[course as keyof typeof highlights] || [
      "University Applications",
      "Essay Writing",
      "Interview Prep",
      "Academic Planning",
    ]
  );
};

export function MentorProfile({ mentor }: MentorProfileProps) {
  const highlights = getHighlights(mentor.course);

  return (
    <div className="py-6">
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
            {mentor.avatar ? (
              <img
                src={mentor.avatar}
                alt={mentor.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <User className="w-16 h-16 text-gray-400" />
              </div>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          {/* Country */}
          <div className="text-sm text-gray-600 mb-1">{mentor.country}</div>

          {/* Name */}
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            {mentor.name}
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            {mentor.course} mentor at {mentor.university} - Helping students
            navigate university applications and achieve academic success
            through personalized guidance and proven strategies.
          </p>

          {/* Highlights */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* University and Status */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="text-lg font-semibold text-gray-900">
              {mentor.university}
            </div>
            <div
               className={`px-3 py-1 rounded-full text-sm font-medium ${
                 mentor.status === "current"
                   ? "bg-green-100 text-green-700"
                   : "bg-yellow-100 text-yellow-700"
               }`}
             >
              {mentor.status === "current" ? "Current Student" : "Alumni"}
            </div>
            <div className="text-gray-600">{mentor.course}</div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(mentor.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-900">
              {mentor.rating}
            </span>
            <span className="text-gray-600">
              ({mentor.totalReviews} reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
