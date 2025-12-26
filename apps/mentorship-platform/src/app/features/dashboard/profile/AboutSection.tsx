"use client";

import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { X, Plus } from "lucide-react";
import { useState } from "react";

const predefinedTags = [
  "Essay Writing",
  "Mock Interview",
  "University Selection",
  "Personal Statement",
  "Application Strategy",
  "Scholarship Applications",
  "Resume/CV Writing",
  "MBA Applications",
  "Medical School",
  "Engineering Applications",
  "Study Abroad",
];

export default function AboutSection() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [customTag, setCustomTag] = useState("");

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const addCustomTag = () => {
    if (customTag.trim() && !selectedTags.includes(customTag.trim())) {
      setSelectedTags((prev) => [...prev, customTag.trim()]);
      setCustomTag("");
    }
  };

  const removeTag = (tag: string) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  };
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">About Me</h2>
        <p className="text-gray-600">
          Tell students about your experience and expertise
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Your Story</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Short Description
            </label>
            <Input placeholder="A brief, compelling summary that appears on your profile card. Keep it concise and impactful." />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              About Me
            </label>
            <textarea
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Share your university experience, what you studied, and how you can help students with their applications..."
            />
            <p className="text-sm text-gray-500 mt-1">
              Minimum 100 characters. Be specific about your expertise and
              experience.
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Specializations
            </label>

            {/* Selected Tags */}
            {selectedTags.length > 0 && (
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  Selected specializations:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="flex items-center gap-1 px-3 py-1"
                    >
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Predefined Tags */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">
                Choose from common specializations:
              </p>
              <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto border border-gray-200 rounded-md p-3">
                {predefinedTags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleTag(tag)}
                    className="text-xs h-7"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>

            {/* Custom Tag Input */}
            <div className="flex gap-3">
              <Input
                placeholder="Add custom specialization..."
                value={customTag}
                onChange={(e) => setCustomTag(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addCustomTag()}
                className="flex-1"
              />
              <Button
                onClick={addCustomTag}
                disabled={!customTag.trim()}
                variant="outline"
                className="h-12 px-4 border-2  text-blue-600   disabled:border-gray-200 disabled:text-gray-400 disabled:hover:bg-white"
                iconStart={<Plus className="w-5 h-5" />}
              >
                Add
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Select from predefined options or add your own custom
              specializations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
