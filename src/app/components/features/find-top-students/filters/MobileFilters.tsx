"use client";

import { Slider } from "@/app/components/ui/slider";
import { Button } from "@/app/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { X } from "lucide-react";
import { FilterState } from "./Filters";

interface MobileFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onClose: () => void;
  isOpen: boolean;
}

const universities = [
  "All Universities",
  "MIT",
  "Stanford",
  "Harvard",
  "Yale",
  "Princeton",
  "Oxford",
  "Cambridge",
  "Columbia",
  "Berkeley",
  "UCLA",
  "Imperial College London",
  "Sorbonne",
  "Seoul National University",
  "Bocconi University",
];

const courses = [
  "All Courses",
  "Business Administration",
  "Medicine",
  "Engineering",
  "Economics",
  "Computer Science",
  "Law",
  "Physics",
  "Journalism",
  "Environmental Science",
  "Film Studies",
  "Aerospace Engineering",
  "French Literature",
  "International Relations",
  "International Business",
];

const countries = [
  "All Countries",
  "United States",
  "United Kingdom",
  "France",
  "South Korea",
  "Italy",
];

export function MobileFilters({
  filters,
  onFiltersChange,
  onClose,
  isOpen,
}: MobileFiltersProps) {
  const updateFilter = (key: keyof FilterState, value: string | number) => {
    const newFilters = { ...filters, [key]: value };
    onFiltersChange(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters: FilterState = {
      search: "",
      university: "All Universities",
      course: "All Courses",
      country: "All Countries",
      maxPrice30min: 100,
      maxPrice60min: 200,
    };
    onFiltersChange(clearedFilters);
    onClose();
  };

  const applyFilters = () => {
    onClose();
  };

  const selectOption = (
    type: "university" | "course" | "country",
    value: string
  ) => {
    updateFilter(type, value);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 md:hidden">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <button
            onClick={clearAllFilters}
            className="text-blue-500 text-sm font-medium"
          >
            Clear all
          </button>
          <h2 className="text-lg font-semibold text-gray-900">Filter</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* University Accordion */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="university"
              className="border border-gray-200 rounded-lg"
            >
              <AccordionTrigger className="px-4 py-4 hover:no-underline">
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-900">
                    University
                  </div>
                  <div className="text-sm text-gray-500">
                    {filters.university}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-0">
                <div className="bg-white border-t border-gray-200">
                  {universities.map((university) => (
                    <button
                      key={university}
                      onClick={() => selectOption("university", university)}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                        filters.university === university
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-900"
                      }`}
                    >
                      {university}
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Course Accordion */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="course"
              className="border border-gray-200 rounded-lg"
            >
              <AccordionTrigger className="px-4 py-4 hover:no-underline">
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-900">
                    Course
                  </div>
                  <div className="text-sm text-gray-500">{filters.course}</div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-0">
                <div className="bg-white border-t border-gray-200">
                  {courses.map((course) => (
                    <button
                      key={course}
                      onClick={() => selectOption("course", course)}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                        filters.course === course
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-900"
                      }`}
                    >
                      {course}
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Country Accordion */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="country"
              className="border border-gray-200 rounded-lg"
            >
              <AccordionTrigger className="px-4 py-4 hover:no-underline">
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-900">
                    Country
                  </div>
                  <div className="text-sm text-gray-500">{filters.country}</div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-0">
                <div className="bg-white border-t border-gray-200">
                  {countries.map((country) => (
                    <button
                      key={country}
                      onClick={() => selectOption("country", country)}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                        filters.country === country
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-900"
                      }`}
                    >
                      {country}
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Price Section */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium text-gray-700">Price Range</h3>

            {/* 30-minute Price Slider */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Max Price (30-min session): ${filters.maxPrice30min}
              </label>
              <Slider
                value={[filters.maxPrice30min]}
                onValueChange={(value) =>
                  updateFilter("maxPrice30min", value[0])
                }
                max={100}
                min={10}
                step={5}
                className="w-full [&_[data-radix-slider-track]]:h-6 [&_[data-radix-slider-range]]:h-6 [&_[data-radix-slider-thumb]]:h-10 [&_[data-radix-slider-thumb]]:w-10 [&_[data-radix-slider-thumb]]:border-4"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$10</span>
                <span>$100</span>
              </div>
            </div>

            {/* 60-minute Price Slider */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Max Price (60-min session): ${filters.maxPrice60min}
              </label>
              <Slider
                value={[filters.maxPrice60min]}
                onValueChange={(value) =>
                  updateFilter("maxPrice60min", value[0])
                }
                max={200}
                min={20}
                step={10}
                className="w-full [&_[data-radix-slider-track]]:h-6 [&_[data-radix-slider-range]]:h-6 [&_[data-radix-slider-thumb]]:h-10 [&_[data-radix-slider-thumb]]:w-10 [&_[data-radix-slider-thumb]]:border-4"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$20</span>
                <span>$200</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Bottom Button */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <Button
            onClick={applyFilters}
            className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium"
          >
            Show {14} Mentors
          </Button>
        </div>
      </div>
    </div>
  );
}
