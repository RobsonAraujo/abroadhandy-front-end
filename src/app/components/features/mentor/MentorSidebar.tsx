"use client";

import { Button } from "@/app/components/ui/button";
import { Heart, MessageCircle, Calendar, Star } from "lucide-react";

interface MentorSidebarProps {
  mentor: {
    id: string;
    name: string;
    price30min: number;
    price60min: number;
    totalReviews: number;
    rating: number;
  };
}

export function MentorSidebar({ mentor }: MentorSidebarProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 sticky top-8 shadow-lg">
      {/* Reviews and Sessions Stats */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-6 h-6 ${
                i < Math.floor(mentor.rating)
                  ? "text-yellow-400 fill-current"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <div className="text-4xl font-bold text-gray-900 mb-2">
          {mentor.rating}
        </div>
        <div className="text-base text-gray-600 mb-4">
          {mentor.totalReviews} reviews
        </div>
        <div className="text-base text-gray-600">
          <span className="font-semibold text-gray-900 text-lg">
            {mentor.totalReviews}
          </span>{" "}
          mentored sessions
        </div>
      </div>
      {/* Pricing */}
      <div className="text-center mb-8">
        <div className="text-5xl font-bold text-gray-900 mb-2">
          ${mentor.price30min}
        </div>
        <div className="text-lg text-gray-600 mb-4">30-min session</div>
        <div className="text-base text-gray-500">
          60-min session:{" "}
          <span className="font-semibold text-gray-700 text-lg">
            ${mentor.price60min}
          </span>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          size="lg"
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
        >
          <div className="flex items-center justify-center">
            <Calendar className="w-5 h-5 mr-2" />
            Book trial session
          </div>
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="w-full h-12 font-semibold"
        >
          <div className="flex items-center justify-center">
            <MessageCircle className="w-5 h-5 mr-2" />
            Send message
          </div>
        </Button>

        <Button
          variant="ghost"
          size="lg"
          className="w-full h-12 text-gray-600 hover:text-red-500 font-semibold"
        >
          <div className="flex items-center justify-center">
            <Heart className="w-5 h-5 mr-2" />
            Save to my list
          </div>
        </Button>
      </div>

      {/* Trust Badge */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="text-center">
          <div className="text-sm font-semibold text-blue-900 mb-1">
            Verified Mentor
          </div>
          <div className="text-xs text-blue-700">
            Background checked and verified by AbroadHandy
          </div>
        </div>
      </div>
    </div>
  );
}
