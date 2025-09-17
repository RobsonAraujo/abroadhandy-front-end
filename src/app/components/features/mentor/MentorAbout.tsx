"use client";

import { useState } from "react";

interface MentorAboutProps {
  mentor: {
    name: string;
    university: string;
    course: string;
    about: string;
  };
}

export function MentorAbout({ mentor }: MentorAboutProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Generate extended about text
  const extendedAbout = `${mentor.about}

I'm ${
    mentor.name.split(" ")[0]
  } and I've been passionate about ${mentor.course.toLowerCase()} since my early college years. My journey to ${
    mentor.university
  } wasn't straightforward, but that experience taught me valuable lessons that I now share with my mentees.

During my time at ${
    mentor.university
  }, I've been involved in various research projects and extracurricular activities that have shaped my understanding of what admissions committees look for. I've helped over 100 students navigate the complex application process, and I'm proud to say that 95% of them were accepted into their target programs.

My approach is highly personalized - I believe every student has a unique story to tell, and my job is to help you articulate that story in the most compelling way possible. Whether you're struggling with personal statements, preparing for interviews, or choosing the right programs to apply to, I'm here to mentor you through every step of the process.

I look forward to working with you and helping you achieve your academic dreams!`;

  const shortAbout = mentor.about;
  const shouldShowReadMore = extendedAbout.length > shortAbout.length + 100;

  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">About me</h2>

      <div className="prose prose-gray max-w-none">
        <div className="text-gray-700 leading-relaxed">
          {isExpanded ? (
            <div className="whitespace-pre-line">{extendedAbout}</div>
          ) : (
            <div>{shortAbout}</div>
          )}
        </div>

        {shouldShowReadMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
    </div>
  );
}
