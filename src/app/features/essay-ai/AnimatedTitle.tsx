import { useEffect, useState } from "react";

export default function AnimatedTitle() {
  const words = ["MSc", "MS", "MA", "MEng", "MBA", "MPA", "MPH", "MEd", "LLM"];
  const colorClasses = [
    "bg-purple-500",
    "bg-blue-500",
    "bg-emerald-500",
    "bg-orange-500",
    "bg-indigo-500",
    "bg-rose-500",
    "bg-amber-500",
    "bg-violet-500",
    "bg-slate-700",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <h1 className="mx-auto text-center text-3xl sm:text-4xl font-semibold leading-snug max-w-xl mb-5">
      Craft your story for{" "}
      <span className="relative inline-block">
        <span className="ml-2 relative z-10 block">
          <span
            key={index}
            className={`inline-block px-2 py-0 rounded text-white ${colorClasses[index]} transition-opacity duration-700 ease-out opacity-0 animate-fade-in text-3xl sm:text-4xl font-semibold`}
          >
            {words[index]}
          </span>
        </span>
      </span>
    </h1>
  );
}
