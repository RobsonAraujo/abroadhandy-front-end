"use client";

import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Search, Filter } from "lucide-react";
import { FilterState } from "./Filters";

interface MobileFilterHeaderProps {
  filters: FilterState;
  onSearchChange: (value: string) => void;
  onFilterClick: () => void;
}

export function MobileFilterHeader({
  filters,
  onSearchChange,
  onFilterClick,
}: MobileFilterHeaderProps) {
  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.search) count++;
    if (filters.university !== "All Universities") count++;
    if (filters.course !== "All Courses") count++;
    if (filters.country !== "All Countries") count++;
    if (filters.maxPrice30min !== 100) count++;
    if (filters.maxPrice60min !== 200) count++;
    return count;
  };

  return (
    <div className="block md:hidden mb-6">
      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Name, university, course..."
            value={filters.search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 h-14 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <Button
          variant="outline"
          size="lg"
          onClick={onFilterClick}
          className="h-14 px-4 border-gray-300 hover:bg-gray-50"
        >
          <Filter className="w-5 h-5 text-gray-600" />
          {getActiveFiltersCount() > 0 && (
            <span className="ml-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {getActiveFiltersCount()}
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}
