import { Bot, Users, Globe, BookOpen } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "AI Essay Assistant",
      description:
        "Get AI-powered suggestions and feedback for your personal statements, essays, and application materials. Perfect for MBA, Master's, PhD applications.",
      icon: <Bot className="w-7 h-7 text-[#4F46E5]" />,
    },
    {
      title: "Human Touch Available",
      description:
        "When you need that personal guidance, connect with experts from Harvard MBA, Stanford PhD, Oxford Master's, and other top programs.",
      icon: <Users className="w-7 h-7 text-[#4F46E5]" />,
    },
    {
      title: "Worldwide Programs",
      description:
        "Whether you're applying to US, UK, Canada, Australia, or anywhere else - we support applications to graduate programs worldwide.",
      icon: <Globe className="w-7 h-7 text-[#4F46E5]" />,
    },
    {
      title: "Future Test Prep",
      description:
        "Coming soon: English test preparation for IELTS, TOEFL, Duolingo, plus GMAT and GRE prep to complete your grad school journey.",
      icon: <BookOpen className="w-7 h-7 text-[#4F46E5]" />,
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-16 text-center">
          <h2 className="text-5xl font-bold text-black lg:text-6xl xl:text-7xl leading-tight mb-6">
            Your All-in-One Grad School Platform
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of graduate applicants who chose our comprehensive
            platform for end-to-end support - from AI essays to test prep to
            expert guidance.
          </p>
        </div>

        <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 xl:p-7 xl:w-1/4 "
            >
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 border border-gray-100">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-black mb-3 capitalize transition-all duration-500 ">
                {feature.title}
              </h4>
              <p className="text-sm font-normal text-gray-600 transition-all duration-500 leading-5 ">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
