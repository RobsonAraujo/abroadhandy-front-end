"use client";

import { Input } from "@/app/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

export default function EducationSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Education</h2>
        <p className="text-gray-600">
          Add your university and course information
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          University Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              University
            </label>
            <Input placeholder="e.g., Stanford University" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course/Major
            </label>
            <Input placeholder="e.g., Business Administration" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Degree Level
            </label>
            <Select>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select degree" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bachelor">Bachelor&apos;s</SelectItem>
                <SelectItem value="master">Master&apos;s</SelectItem>
                <SelectItem value="phd">PhD</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <Select>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current">Current Student</SelectItem>
                <SelectItem value="alumni">Alumni</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
