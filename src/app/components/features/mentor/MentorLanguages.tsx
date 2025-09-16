"use client";

// Mock languages data - in real app this would come from mentor profile
const languages = [
  { name: "English", level: "Native" },
  { name: "Portuguese", level: "Fluent" },
  { name: "Spanish", level: "Conversational" },
];

export function MentorLanguages() {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Native":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Fluent":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Conversational":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">I speak</h2>

      <div className="flex flex-wrap gap-3">
        {languages.map((language, index) => (
          <div
            key={index}
            className={`px-3 py-1 rounded-full border text-sm font-medium ${getLevelColor(
              language.level
            )}`}
          >
            <span className="font-semibold">{language.name}</span>
            <span className="ml-2 opacity-80">{language.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
