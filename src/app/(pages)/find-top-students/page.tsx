"use client";

import { useState } from "react";

import { MentorCard } from "@/app/components/features/find-top-students/mentor-card/MentorCard";
import { MentorSidebar } from "@/app/components/features/find-top-students/mentor-sidebar/MentorSidebar";
import { mentors } from "@/app/mocks";

export interface Mentor {
  id: string;
  userId: string;
  name: string;
  university: string;
  course: string;
  country: string;
  about: string;
  price30min: number;
  price60min: number;
  rating: number;
  totalReviews: number;
  avatar: string;
  status: "current" | "alumni";
  universities?: string[];
}

export default function FindTopStudents() {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [hoveredMentor, setHoveredMentor] = useState<Mentor | null>(null);

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Find Top Students & Mentors
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with verified mentors from MIT, Stanford, Harvard, Oxford,
            and other top universities. Get personalized guidance for your
            university application journey.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-black">
            {mentors.length.toLocaleString()} Mentors Available
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          <div className="lg:col-span-7">
            <div className="space-y-6 mb-12">
              {mentors.map((mentor) => (
                <MentorCard
                  key={mentor.id}
                  mentor={mentor}
                  isSelected={selectedMentor?.id === mentor.id}
                  onSelect={setSelectedMentor}
                  onHover={setHoveredMentor}
                />
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-8">
              <MentorSidebar selectedMentor={hoveredMentor || selectedMentor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
