"use client";

import Image from "next/image";
import { Star, User } from "lucide-react";

interface MentorReviewsProps {
  mentorId: string;
}

// Mock reviews data
const mockReviews = [
  {
    id: "1",
    studentName: "Sarah Johnson",
    avatar: "", // No photo - will use default
    rating: 5,
    date: "September 12, 2025",
    comment:
      "Michael was incredibly helpful with my business school application. His insights on crafting a compelling personal statement were invaluable. Highly recommend!",
  },
  {
    id: "2",
    studentName: "Alex Chen",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    date: "August 28, 2025",
    comment:
      "Great mentor! He helped me understand the nuances of different MBA programs and how to position my background effectively.",
  },
  {
    id: "3",
    studentName: "Jessica Rodriguez",
    avatar: "", // No photo - will use default
    rating: 4,
    date: "August 15, 2025",
    comment:
      "Very knowledgeable about the application process. The session was well-structured and I got clear action items to work on.",
  },
  {
    id: "4",
    studentName: "David Kim",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    date: "July 30, 2025",
    comment:
      "Michael's experience really shows. He provided specific examples and helped me refine my essays significantly. Worth every penny!",
  },
  {
    id: "5",
    studentName: "Emma Thompson",
    avatar: "", // No photo - will use default
    rating: 5,
    date: "July 18, 2025",
    comment:
      "Excellent mentor! He's patient, thorough, and really cares about your success. I felt much more confident after our session.",
  },
];

export function MentorReviews({}: MentorReviewsProps) {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        People I helped so far
      </h2>

      {/* Reviews Grid - 2 per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockReviews.slice(0, 5).map((review) => (
          <div
            key={review.id}
            className="bg-gray-50 border border-gray-200 rounded-lg p-4"
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                  {review.avatar ? (
                    <Image
                      src={review.avatar}
                      alt={review.studentName}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>

              {/* Review Content */}
              <div className="flex-1 min-w-0">
                {/* Name and Date */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <span className="font-semibold text-gray-900 truncate">
                    {review.studentName}
                  </span>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm font-semibold text-gray-900 ml-1">
                    {review.rating}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {review.comment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
