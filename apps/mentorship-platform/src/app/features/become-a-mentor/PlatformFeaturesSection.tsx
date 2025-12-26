"use client";

import { useState } from "react";
import {
  Users,
  Calendar,
  MessageCircle,
  CreditCard,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function PlatformFeaturesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const platformFeatures = [
    {
      title: "Steady stream of new students",
      description:
        "Our platform connects you with students actively seeking guidance for their university applications.",
      icon: <Users className="w-6 h-6 text-[#4F46E5]" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Smart calendar",
      description:
        "Manage your availability and schedule sessions with students from around the world.",
      icon: <Calendar className="w-6 h-6 text-[#10B981]" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      title: "Interactive classroom",
      description:
        "Use our built-in video platform with screen sharing and collaborative tools.",
      icon: <MessageCircle className="w-6 h-6 text-[#F59E0B]" />,
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      title: "Convenient payment methods",
      description:
        "Get paid securely through multiple payment options with regular payouts.",
      icon: <CreditCard className="w-6 h-6 text-[#8B5CF6]" />,
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      title: "Professional development webinars",
      description:
        "Access training sessions and resources to improve your teaching skills.",
      icon: <BookOpen className="w-6 h-6 text-[#EF4444]" />,
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      title: "Supportive mentor community",
      description:
        "Connect with other mentors, share experiences, and learn from the community.",
      icon: <Users className="w-6 h-6 text-[#06B6D4]" />,
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % platformFeatures.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + platformFeatures.length) % platformFeatures.length
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Mentor students from over 180 countries
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            AbroadHandy mentors help students globally. Join us and you&apos;ll
            have everything you need to mentor successfully.
          </p>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformFeatures.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-lg p-6 border ${feature.borderColor}`}
            >
              <div className="flex items-center mb-4">
                <div className="bg-white rounded-full flex justify-center items-center w-12 h-12 border border-gray-100 mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-black">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {platformFeatures.map((feature, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div
                      className={`${feature.bgColor} rounded-lg p-6 border ${feature.borderColor}`}
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-white rounded-full flex justify-center items-center w-12 h-12 border border-gray-100 mr-4">
                          {feature.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-black">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {platformFeatures.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
