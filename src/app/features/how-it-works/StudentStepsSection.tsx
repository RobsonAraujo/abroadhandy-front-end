import { Globe, Calculator, PenTool, Users } from "lucide-react";

export default function StudentStepsSection() {
  const studentSteps = [
    {
      step: "1",
      title: "Prepare for English Exam",
      description:
        "If needed, get ready for IELTS, TOEFL, or Duolingo with our comprehensive test preparation platform.",
      icon: <Globe className="w-8 h-8 text-[#4F46E5]" />,
      status: "Coming Soon",
    },
    {
      step: "2",
      title: "Prepare for GMAT/GRE",
      description:
        "If required for your program, master the GMAT or GRE with our targeted preparation tools and strategies.",
      icon: <Calculator className="w-8 h-8 text-[#4F46E5]" />,
      status: "Coming Soon",
    },
    {
      step: "3",
      title: "EssayAI - Refine Your Essays",
      description:
        "Use our AI-powered platform to refine your personal statements and essays with intelligent feedback and suggestions.",
      icon: <PenTool className="w-8 h-8 text-[#4F46E5]" />,
      status: "Available Now",
    },
    {
      step: "4",
      title: "Still Need Help? Human Touch",
      description:
        "Connect with expert mentors from your target programs for personalized guidance and one-on-one support.",
      icon: <Users className="w-8 h-8 text-[#4F46E5]" />,
      status: "Coming Soon",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black lg:text-4xl mb-4">
            Your Complete Grad School Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From test preparation to essay refinement to expert guidance - we
            support you through every step of your graduate school application
            process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {studentSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-full flex justify-center items-center mb-6 w-16 h-16 border border-gray-100 mx-auto shadow-sm">
                {step.icon}
              </div>
              <div className="bg-[#4F46E5] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                {step.description}
              </p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  step.status === "Available Now"
                    ? "bg-green-100 text-green-800"
                    : "bg-orange-100 text-orange-800"
                }`}
              >
                {step.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
