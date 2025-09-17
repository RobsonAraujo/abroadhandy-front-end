"use client";

import { Button } from "@/app/components/ui/button";
import {
  Calendar,
  MessageCircle,
  Star,
  MapPin,
  GraduationCap,
  CheckCircle,
} from "lucide-react";
import { Mentor } from "@/app/(pages)/mentors/page";

interface MentorSidebarProps {
  selectedMentor: Mentor | null;
}

export function MentorSidebar({ selectedMentor }: MentorSidebarProps) {
  if (!selectedMentor) {
    return null;
  }

  // Mock data for universities - in real app this would come from the mentor data
  const universities = selectedMentor.universities || [
    "Harvard University",
    "Stanford University",
    "MIT",
    "Oxford University",
    "Cambridge University",
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      {/* University Card */}
      <div className="mb-6">
        <div className="relative w-full h-44 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100/80 to-gray-200/80 flex items-center justify-center">
            <div className="text-center text-gray-800">
              <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                <GraduationCap className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900">
                {selectedMentor.university}
              </h3>
              <p className="text-sm text-gray-600">{selectedMentor.course}</p>
              <div className="mt-1">
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    selectedMentor.status === "current"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {selectedMentor.status === "current"
                    ? "Current Student"
                    : "Alumni"}
                </span>
              </div>
            </div>
          </div>
          {/* Subtle decorative elements */}
          <div className="absolute top-3 right-3 w-6 h-6 bg-gray-300/30 rounded-full"></div>
          <div className="absolute bottom-3 left-3 w-4 h-4 bg-gray-300/30 rounded-full"></div>
          <div className="absolute top-1/2 left-3 w-3 h-3 bg-gray-300/30 rounded-full"></div>
        </div>

        <div className="text-center">
          <h4 className="font-semibold text-gray-900 mb-1">
            {selectedMentor.name}
          </h4>
          <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mb-2">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span>{selectedMentor.rating}</span>
            <span>({selectedMentor.totalReviews} reviews)</span>
          </div>
          <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
            <MapPin className="w-3 h-3" />
            <span>{selectedMentor.country}</span>
          </div>
        </div>
      </div>

      {/* Universities List */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <GraduationCap className="w-4 h-4 text-blue-600" />
          <h5 className="font-semibold text-gray-900 text-sm">
            Universities Accepted
          </h5>
        </div>
        <div className="space-y-2">
          {universities.map((university, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 p-2 rounded-lg text-sm transition-colors ${
                university === selectedMentor.university
                  ? "bg-blue-50 border border-blue-200 text-blue-700"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <CheckCircle
                className={`w-4 h-4 ${
                  university === selectedMentor.university
                    ? "text-blue-600"
                    : "text-gray-400"
                }`}
              />
              <span className="flex-1">{university}</span>
              {university === selectedMentor.university && (
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                  Current
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button className="w-full  h-12 bg-secondary hover:bg-blue-600 text-white font-semibold">
          <div className="flex items-center justify-center">
            <Calendar className="w-5 h-5 mr-2" />
            View Full Schedule
          </div>
        </Button>

        <Button
          variant="outline"
          className="w-full h-12 border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
        >
          <div className="flex items-center justify-center">
            <MessageCircle className="w-5 h-5 mr-2" />
            View Profile
          </div>
        </Button>
      </div>
    </div>
  );
}
