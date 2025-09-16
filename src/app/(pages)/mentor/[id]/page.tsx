"use client";

import { useParams } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { mentors } from "@/app/mocks/mentors";
import { MentorProfile } from "@/app/components/features/mentor/MentorProfile";
import { MentorAbout } from "@/app/components/features/mentor/MentorAbout";
import { MentorLanguages } from "@/app/components/features/mentor/MentorLanguages";
import { MentorSchedule } from "@/app/components/features/mentor/MentorSchedule";
import { MentorReviews } from "@/app/components/features/mentor/MentorReviews";
import { MentorSidebar } from "@/app/components/features/mentor/MentorSidebar";
import { MentorMobileFooter } from "@/app/components/features/mentor/MentorMobileFooter";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Main Content - 66% (4 columns) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Profile */}
            <MentorProfile mentor={mentor} />

            {/* Send Message Button - Mobile Only */}
            <div className="py-4 md:hidden">
              <Button
                variant="outline"
                size="lg"
                className="w-full rounded"
                color="white"
                iconStart={<MessageCircle className="w-5 h-5" />}
              >
                Send message
              </Button>
            </div>

            {/* About Me */}
            <MentorAbout mentor={mentor} />

            {/* Languages */}
            <MentorLanguages />

            {/* Schedule */}
            <MentorSchedule mentorId={mentor.id} />

            {/* Reviews */}
            <MentorReviews mentorId={mentor.id} />
          </div>

          {/* Sidebar - 33% (2 columns) - Hidden on mobile */}
          <div className="hidden lg:block lg:col-span-2">
            <MentorSidebar mentor={mentor} />
          </div>
        </div>
      </div>

      {/* Mobile Footer - Only visible on mobile */}
      <MentorMobileFooter mentor={mentor} />
    </div>
  );
}
