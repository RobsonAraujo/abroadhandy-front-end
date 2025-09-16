"use client";

import { useParams } from "next/navigation";
import { mentors } from "@/app/mocks/mentors";
import { MentorProfile } from "@/app/components/features/mentor/MentorProfile";
import { MentorAbout } from "@/app/components/features/mentor/MentorAbout";
import { MentorLanguages } from "@/app/components/features/mentor/MentorLanguages";
import { MentorSchedule } from "@/app/components/features/mentor/MentorSchedule";
import { MentorReviews } from "@/app/components/features/mentor/MentorReviews";
import { MentorSidebar } from "@/app/components/features/mentor/MentorSidebar";

export default function MentorPage() {
  const params = useParams();
  const mentorId = params.id as string;

  const mentor = mentors.find((m) => m.id === mentorId);

  if (!mentor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Mentor not found
          </h1>
          <p className="text-gray-600">
            The mentor you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Main Content - 66% (4 columns) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Profile */}
            <MentorProfile mentor={mentor} />

            {/* About Me */}
            <MentorAbout mentor={mentor} />

            {/* Languages */}
            <MentorLanguages />

            {/* Schedule */}
            <MentorSchedule mentorId={mentor.id} />

            {/* Reviews */}
            <MentorReviews mentorId={mentor.id} />
          </div>

          {/* Sidebar - 33% (2 columns) */}
          <div className="lg:col-span-2">
            <MentorSidebar mentor={mentor} />
          </div>
        </div>
      </div>
    </div>
  );
}
