import { Users, Globe, Target, Trophy } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "One-on-One Mentorship",
      description:
        "Get personalized support from top students who have successfully navigated the same application process you're going through.",
      icon: <Users className="w-7 h-7 text-[#4F46E5]" />,
    },
    {
      title: "Top University Network",
      description:
        "Connect with students from Harvard, MIT, Stanford, Oxford, and other leading universities who understand the application process inside and out.",
      icon: <Globe className="w-7 h-7 text-[#4F46E5]" />,
    },
    {
      title: "Proven Strategies",
      description:
        "Learn the exact strategies and techniques that helped our mentors get accepted to their dream universities, from essay writing to interview preparation.",
      icon: <Target className="w-7 h-7 text-[#4F46E5]" />,
    },
    {
      title: "Real Success Stories",
      description:
        "Get insights from students who have actually been accepted to top universities, sharing their real experiences and what made their applications stand out.",
      icon: <Trophy className="w-7 h-7 text-[#4F46E5]" />,
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-16 text-center">
          <h2 className="text-5xl font-bold text-black lg:text-6xl xl:text-7xl leading-tight mb-6">
            Why Students Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join students who have successfully navigated their university
            applications with guidance from top students at leading
            universities.
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
