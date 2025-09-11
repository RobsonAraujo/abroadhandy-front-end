"use client";

import { useState } from "react";

import { MentorCard } from "@/app/components/features/find-top-students/mentor-card/MentorCard";
import { MentorSidebar } from "@/app/components/features/find-top-students/mentor-sidebar/MentorSidebar";
import { mentors } from "@/app/mocks";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/app/components/ui/pagination";

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
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(mentors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMentors = mentors.slice(startIndex, endIndex);

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
          <p className="text-gray-600 mt-1">
            Showing {startIndex + 1}-{Math.min(endIndex, mentors.length)} of{" "}
            {mentors.length} mentors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          <div className="lg:col-span-7">
            <div className="space-y-6 mb-8">
              {currentMentors.map((mentor) => (
                <MentorCard
                  key={mentor.id}
                  mentor={mentor}
                  isSelected={selectedMentor?.id === mentor.id}
                  onSelect={setSelectedMentor}
                  onHover={setHoveredMentor}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) {
                          setCurrentPage(currentPage - 1);
                        }
                      }}
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  )}

                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) {
                          setCurrentPage(currentPage + 1);
                        }
                      }}
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
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
