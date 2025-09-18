"use client";

// Mock languages data - in real app this would come from mentor profile
const languages = [
  { name: "English", level: "Native" },
  { name: "Portuguese", level: "Fluent" },
  { name: "Spanish", level: "Conversational" },
];

export function MentorLanguages() {
  const getLevelIndicator = (level: string) => {
    switch (level) {
      case "Native":
        return "bg-purple-500";
      case "Fluent":
        return "bg-blue-500";
      case "Conversational":
        return "bg-yellow-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">I speak</h2>

      <div className="flex flex-wrap gap-3">
        {languages.map((language, index) => (
          <div
            key={index}
            className="flex items-center px-3 py-1 rounded-full border border-gray-200 bg-white text-sm font-medium"
          >
            <div
              className={`w-2 h-2 rounded-full mr-2 ${getLevelIndicator(
                language.level
              )}`}
            ></div>
            <span className="font-semibold text-gray-800">{language.name}</span>
            <span className="ml-2 text-gray-600 font-normal">
              {language.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
