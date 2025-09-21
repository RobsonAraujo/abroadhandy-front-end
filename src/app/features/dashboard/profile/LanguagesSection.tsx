"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Plus, X } from "lucide-react";
import { useState } from "react";

interface Language {
  id: number;
  language: string;
  proficiency: string;
}

export default function LanguagesSection() {
  const [languages, setLanguages] = useState<Language[]>([
    { id: 1, language: "English", proficiency: "fluent" },
  ]);

  const addLanguage = () => {
    const newId = Math.max(...languages.map((l) => l.id), 0) + 1;
    setLanguages([...languages, { id: newId, language: "", proficiency: "" }]);
  };

  const removeLanguage = (id: number) => {
    if (languages.length > 1) {
      setLanguages(languages.filter((lang) => lang.id !== id));
    }
  };

  const updateLanguage = (id: number, field: keyof Language, value: string) => {
    setLanguages(
      languages.map((lang) =>
        lang.id === id ? { ...lang, [field]: value } : lang
      )
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Languages</h2>
        <p className="text-gray-600">
          Add languages you can conduct sessions in
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Languages I Speak
        </h3>
        <div className="space-y-4">
          {languages.map((lang) => (
            <div
              key={lang.id}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language
                </label>
                <Input
                  value={lang.language}
                  onChange={(e) =>
                    updateLanguage(lang.id, "language", e.target.value)
                  }
                  placeholder="e.g., English, Portuguese, Spanish"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Proficiency
                </label>
                <Select
                  value={lang.proficiency}
                  onValueChange={(value) =>
                    updateLanguage(lang.id, "proficiency", value)
                  }
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="native">Native</SelectItem>
                    <SelectItem value="fluent">Fluent</SelectItem>
                    <SelectItem value="conversational">
                      Conversational
                    </SelectItem>
                    <SelectItem value="basic">Basic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => removeLanguage(lang.id)}
                  disabled={languages.length === 1}
                  className="h-12 w-12"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-gray-200">
            <Button
              onClick={addLanguage}
              variant="outline"
              className="flex items-center gap-2"
              iconStart={<Plus className="w-4 h-4" />}
            >
              Add Language
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
