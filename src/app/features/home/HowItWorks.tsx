import { Bot, Target, Trophy } from "lucide-react";
import SoonBadge from "@/app/components/soon-badge/SoonBadge";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "AI Writing & Strategy",
      description:
        "Start with our AI assistant for essays, personal statements, and application materials. Get intelligent feedback, content suggestions, and strategic guidance—all designed to help you improve your own writing.",
      bgColor: "bg-secondary",
      textColor: "text-white",
    },
    {
      number: 2,
      title: "Comprehensive Preparation",
      description:
        "Master all aspects of your application: English tests (IELTS/TOEFL/Duolingo), standardized exams (GMAT/GRE), and build your complete profile with our integrated tools.",
      bgColor: "bg-purple-600",
      textColor: "text-white",
    },
    {
      number: 3,
      title: "Expert Guidance & Submission",
      description:
        "Connect with mentors from your target programs, refine your applications, and submit with confidence. Your complete grad school success partner from start to finish.",
      bgColor: "bg-primary",
      textColor: "text-white",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-black lg:text-6xl xl:text-7xl">
            Your Complete Application Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {step.number !== 1 && (
                <div className="absolute top-[-10px] left-[87%]">
                  <SoonBadge />
                </div>
              )}

              <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 h-full min-h-[400px] flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`${step.bgColor}  w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${step.textColor}`}
                  >
                    {step.number}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-black">
                    {step.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
