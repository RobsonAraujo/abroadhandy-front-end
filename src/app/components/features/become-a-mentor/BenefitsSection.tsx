"use client";

import { CheckCircle, DollarSign, Globe, Users } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Flexible Schedule",
      description:
        "Set your own hours and work from anywhere in the world. Teach when it's convenient for you.",
      icon: <CheckCircle className="w-8 h-8 text-[#4F46E5]" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Competitive Earnings",
      description:
        "Earn money sharing your knowledge and experience with students who need guidance.",
      icon: <DollarSign className="w-8 h-8 text-[#10B981]" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      title: "Global Impact",
      description:
        "Help students from around the world achieve their university application dreams.",
      icon: <Globe className="w-8 h-8 text-[#F59E0B]" />,
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      title: "Build Your Network",
      description:
        "Connect with other top students and expand your professional network.",
      icon: <Users className="w-8 h-8 text-[#8B5CF6]" />,
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Why Become a Mentor?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Join our community of top students and make a real impact while
            building your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div
                className={`${benefit.bgColor} rounded-full flex justify-center items-center mb-6 w-16 h-16 ${benefit.borderColor} border-2 mx-auto`}
              >
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
