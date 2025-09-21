"use client";

import { useState, useEffect } from "react";
import { Input } from "@/app/components/ui/input";
import { Slider } from "@/app/components/ui/slider";
import { Search, Filter } from "lucide-react";
import { AutocompleteSelect } from "./AutocompleteSelect";
import { MobileFilterHeader } from "./MobileFilterHeader";
import { MobileFilters } from "./MobileFilters";

interface FiltersProps {
  onFiltersChange: (filters: FilterState) => void;
}

export interface FilterState {
  search: string;
  university: string;
  course: string;
  country: string;
  maxPrice30min: number;
  maxPrice60min: number;
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

export function Filters({ onFiltersChange }: FiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    university: "All Universities",
    course: "All Courses",
    country: "All Countries",
    maxPrice30min: 100,
    maxPrice60min: 200,
  });
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

  useEffect(() => {
    if (isMobileModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileModalOpen]);

  const updateFilter = (key: keyof FilterState, value: string | number) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleMobileFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  return (
    <>
      {isSelectOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 pointer-events-none"
          onClick={() => setIsSelectOpen(false)}
        />
      )}

      {/* Mobile Version */}
      <MobileFilterHeader
        filters={filters}
        onSearchChange={(value) => updateFilter("search", value)}
        onFilterClick={() => setIsMobileModalOpen(true)}
      />

      {/* Mobile Modal */}
      <MobileFilters
        filters={filters}
        onFiltersChange={handleMobileFilterChange}
        onClose={() => setIsMobileModalOpen(false)}
        isOpen={isMobileModalOpen}
      />

      {/* Desktop Version */}
      <div className="hidden md:block bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8 relative z-50">
        <div className="flex items-center gap-2 mb-6">
          <Filter className="w-5 h-5 text-gray-600" />
          <h3 className="text-base font-normal text-gray-700">
            Filter Mentors
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Search Input */}
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Name, university, course..."
                value={filters.search}
                onChange={(e) => updateFilter("search", e.target.value)}
                className="pl-10 h-14 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* University Select */}
          <div className="lg:col-span-1">
            <AutocompleteSelect
              options={universities}
              value={filters.university}
              onValueChange={(value) => updateFilter("university", value)}
              placeholder="All"
              label="University"
              onOpenChange={setIsSelectOpen}
            />
          </div>

          {/* Course Select */}
          <div className="lg:col-span-1">
            <AutocompleteSelect
              options={courses}
              value={filters.course}
              onValueChange={(value) => updateFilter("course", value)}
              placeholder="All"
              label="Course"
              onOpenChange={setIsSelectOpen}
            />
          </div>

          {/* Country Select */}
          <div className="lg:col-span-1">
            <AutocompleteSelect
              options={countries}
              value={filters.country}
              onValueChange={(value) => updateFilter("country", value)}
              placeholder="All"
              label="Country"
              onOpenChange={setIsSelectOpen}
            />
          </div>
        </div>

        {/* Price Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 30-minute Price Slider */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Max Price (30-min session): ${filters.maxPrice30min}
            </label>
            <Slider
              value={[filters.maxPrice30min]}
              onValueChange={(value) => updateFilter("maxPrice30min", value[0])}
              max={100}
              min={10}
              step={5}
              className="w-full"
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
              onValueChange={(value) => updateFilter("maxPrice60min", value[0])}
              max={200}
              min={20}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>$20</span>
              <span>$200</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
