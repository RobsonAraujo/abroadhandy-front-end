import { PenTool, Users, GraduationCap } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Get AI Essay Assistance",
      description:
        "Tell us about your grad school goals and get AI-powered suggestions for your personal statements, essays, and application materials. Perfect for MBA, Master's, PhD, and Medical School applications.",
      bgColor: "bg-primary",
      textColor: "text-black",
      icon: <PenTool className="w-8 h-8 text-[#4F46E5]" />,
    },
    {
      number: 2,
      title: "Connect with Expert Mentors",
      description:
        "Get matched with mentors from your target programs - Harvard MBA, Stanford PhD, Oxford Master's, and more. Receive personalized guidance from those who've been there.",
      bgColor: "bg-secondary",
      textColor: "text-white",
      icon: <Users className="w-8 h-8 text-[#4F46E5]" />,
    },
    {
      number: 3,
      title: "Submit Winning Applications",
      description:
        "With AI-powered essay assistance, expert mentorship, and future English test prep (IELTS, TOEFL, Duolingo), you'll be ready to submit applications that stand out worldwide.",
      bgColor: "bg-purple",
      textColor: "text-white",
      icon: <GraduationCap className="w-8 h-8 text-[#4F46E5]" />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-black lg:text-6xl xl:text-7xl">
            How it works:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 h-full min-h-[400px] flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`${step.bgColor} w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${step.textColor}`}
                  >
                    {step.number}
                  </div>
                  <div className="bg-white rounded-full flex justify-center items-center w-14 h-14 border border-gray-100">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-black mb-4">
                  {step.title}
                </h3>
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
