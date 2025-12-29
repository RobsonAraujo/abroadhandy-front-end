import { useEffect, useState } from "react";

export default function AnimatedTitle() {
  const words = ["MBA", "PHD", "MPH"];
  const colors = ["success", "purple", "secondary"];
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
            className={`inline-block px-2 py-0 rounded text-white bg-${colors[index]} transition-opacity duration-700 ease-out opacity-0 animate-fade-in text-3xl sm:text-4xl font-semibold`}
          >
            {words[index]}
          </span>
        </span>
      </span>
    </h1>
  );
}
