"use client";

import { useState } from "react";
import Image from "next/image";

export default function UniversityLogos() {
  // Top universities - generic representation
  const universities = [
    {
      name: "MIT",
      logo: "/universities/mit.svg",
      alt: "Massachusetts Institute of Technology",
    },
    {
      name: "Harvard",
      logo: "/universities/harvard.svg",
      alt: "Harvard University",
    },
    {
      name: "Stanford",
      logo: "/universities/stanford.svg",
      alt: "Stanford University",
    },
    {
      name: "Oxford",
      logo: "/universities/oxford.svg",
      alt: "University of Oxford",
    },
    {
      name: "Cambridge",
      logo: "/universities/cambridge.svg",
      alt: "University of Cambridge",
    },
    { name: "Yale", logo: "/universities/yale.svg", alt: "Yale University" },
    {
      name: "Princeton",
      logo: "/universities/princeton.svg",
      alt: "Princeton University",
    },
    {
      name: "Columbia",
      logo: "/universities/columbia.svg",
      alt: "Columbia University",
    },
  ];

  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const handleImageError = (index: number) => {
    setFailedImages((prev) => new Set(prev).add(index));
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Global Reach
          </p>
          <h2 className="text-3xl font-bold text-black lg:text-4xl xl:text-5xl mb-4">
            Prepared for Leading Programs Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI understands the application requirements and standards of top
            universities across the globe.
          </p>
        </div>

        {/* University Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center">
          {universities.map((university, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-20 lg:h-24 transition-all duration-300"
            >
              {failedImages.has(index) ? (
                // Fallback: Show university name in elegant typography
                <div className="text-center">
                  <span className="text-gray-400 font-semibold text-base lg:text-lg tracking-tight">
                    {university.name}
                  </span>
                </div>
              ) : (
                // Show logo with grayscale effect
                <div className="w-full h-full flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                  <Image
                    src={university.logo}
                    alt={university.alt}
                    width={120}
                    height={60}
                    className="max-h-12 lg:max-h-16 w-auto object-contain"
                    onError={() => handleImageError(index)}
                    unoptimized
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Subtle disclaimer text */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400 max-w-2xl mx-auto">
            Our AI platform is trained on application patterns and requirements
            from leading graduate programs worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
