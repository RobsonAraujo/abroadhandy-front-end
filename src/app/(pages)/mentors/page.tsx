"use client";

import { useState, useEffect } from "react";

import { MentorCard } from "@/app/features/find-top-students/MentorCard";
import { MentorSidebar } from "@/app/features/find-top-students/MentorSidebar";
import {
  Filters,
  FilterState,
} from "@/app/features/find-top-students/filters/Filters";
import { mentors } from "@/app/mocks/mentors";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/app/components/ui/pagination";

export interface Mentor {
  id: number | string;
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
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    university: "All Universities",
    course: "All Courses",
    country: "All Countries",
    maxPrice30min: 100,
    maxPrice60min: 200,
  });

  // Filter mentors based on current filters
  const filteredMentors = mentors.filter((mentor) => {
    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      const searchableText =
        `${mentor.name} ${mentor.university} ${mentor.course} ${mentor.about}`.toLowerCase();
      if (!searchableText.includes(searchTerm)) return false;
    }

    // University filter
    if (
      filters.university !== "All Universities" &&
      mentor.university !== filters.university
    ) {
      return false;
    }

    // Course filter
    if (filters.course !== "All Courses" && mentor.course !== filters.course) {
      return false;
    }

    // Country filter
    if (
      filters.country !== "All Countries" &&
      mentor.country !== filters.country
    ) {
      return false;
    }

    // Price filters
    if (mentor.price30min > filters.maxPrice30min) return false;
    if (mentor.price60min > filters.maxPrice60min) return false;

    return true;
  });

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredMentors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMentors = filteredMentors.slice(startIndex, endIndex);

  // Set first mentor as selected when page loads or mentors change
  useEffect(() => {
    if (currentMentors.length > 0 && !selectedMentor) {
      setSelectedMentor(currentMentors[0]);
    }
  }, [currentMentors, selectedMentor]);

  // Reset to first page when filters change and select first mentor
  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
    setSelectedMentor(null); // Will be set by useEffect
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-6">
            Find Top Student Mentors
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with verified mentors from MIT, Stanford, Harvard, Oxford,
            and other top universities. Get personalized guidance for your
            university application journey.
          </p>
        </div>

        <Filters onFiltersChange={handleFiltersChange} />

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-black">
            {filteredMentors.length.toLocaleString()} Mentors Available
          </h2>
          <p className="text-gray-600 mt-1">
            Showing {startIndex + 1}-
            {Math.min(endIndex, filteredMentors.length)} of{" "}
            {filteredMentors.length} mentors
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
                  onHover={(mentor) => {
                    if (mentor) {
                      setSelectedMentor(mentor);
                    }
                  }}
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
                          window.scrollTo(0, 0);
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
                            window.scrollTo(0, 0);
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
                          window.scrollTo(0, 0);
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
              {selectedMentor && (
                <MentorSidebar selectedMentor={selectedMentor} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
