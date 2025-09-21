"use client";

import Image from "next/image";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Sign up to create your mentor profile",
      description:
        "Complete your profile with your university information, achievements, and areas of expertise to help students find the perfect match.",
      bgColor: "bg-primary",
      textColor: "text-black",
    },
    {
      number: 2,
      title: "Get approved by our team in 5 business days",
      description:
        "Our team reviews your application to ensure quality and verify your credentials from top universities.",
      bgColor: "bg-secondary",
      textColor: "text-white",
    },
    {
      number: 3,
      title: "Start earning by guiding students worldwide",
      description:
        "Begin helping students with their university applications and earn money while making a real difference in their lives.",
      bgColor: "bg-purple",
      textColor: "text-white",
    },
  ];

  return (
    <section className="py-10 bg-background-light sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Make a living by teaching the largest community of learners
            worldwide
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Join thousands of students who are already earning money by sharing
            their university application expertise with students around the
            world.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <Image
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
              width={800}
              height={100}
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            {steps.map((step, index) => (
              <div key={index}>
                <div
                  className={`flex items-center justify-center w-16 h-16 mx-auto ${step.bgColor} border-2 border-gray-200 rounded-full shadow`}
                >
                  <span className={`text-xl font-semibold ${step.textColor}`}>
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  {step.title}
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
