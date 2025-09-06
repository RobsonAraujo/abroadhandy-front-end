"use client";

import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import {
  CheckCircle,
  DollarSign,
  Users,
  Globe,
  ArrowRight,
  Calendar,
  CreditCard,
  BookOpen,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function BecomeAMentor() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % platformFeatures.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + platformFeatures.length) % platformFeatures.length
    );
  };

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

  const steps = [
    {
      number: 1,
      title: "Sign up to create your guide profile",
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
      title: "Supportive guide community",
      description:
        "Connect with other guides, share experiences, and learn from the community.",
      icon: <Users className="w-6 h-6 text-[#06B6D4]" />,
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
  ];

  const faqs = [
    {
      question: "What qualifications do I need to become a guide?",
      answer:
        "You need to be a current student or recent graduate from a top university with a strong academic record.",
    },
    {
      question: "How much can I earn as a guide?",
      answer:
        "Earnings vary based on your experience and the number of sessions you conduct. Top guides can earn significantly by helping multiple students.",
    },
    {
      question: "How do I get paid?",
      answer:
        "We offer secure payment processing with regular payouts to your preferred payment method.",
    },
    {
      question: "Can I work part-time as a guide?",
      answer:
        "Absolutely! You can set your own schedule and work as many or as few hours as you prefer. Many guides work part-time while studying.",
    },
    {
      question: "How do students find me?",
      answer:
        "Students can search for guides based on university, field of study, and expertise. Your profile will be visible to students looking for guidance in your areas.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-background-light bg-opacity-30 py-16 sm:py-24 lg:py-32">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black sm:text-5xl lg:text-6xl xl:text-7xl">
              Become a Guide
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Share your university experience and help students achieve their
              dreams while earning money doing what you love.
            </p>
            <div className="mt-8">
              <Button
                href="/register"
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4"
                iconEnd={<ArrowRight className="w-6 h-6" />}
              >
                Create your profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
              Why Become a Guide?
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

      {/* How it Works Section */}
      <section className="py-10 bg-background-light sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Make a living by teaching the largest community of learners
              worldwide
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Join thousands of students who are already earning money by
              sharing their university application expertise with students
              around the world.
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

      {/* Platform Features Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
              Guide students from over 180 countries
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              AbroadHandy guides help students globally. Join us and you&apos;ll
              have everything you need to guide successfully.
            </p>
          </div>

          {/* Desktop Grid */}
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

          {/* Mobile Carousel */}
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

              {/* Navigation Buttons */}
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

            {/* Dots Indicator */}
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to know about becoming a guide
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-black mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary">
        <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-lg text-black max-w-2xl mx-auto">
            Join our community of top students and start making a difference in
            students&apos; lives while earning money.
          </p>
          <div className="mt-8">
            <Button
              href="/register"
              variant="black"
              size="lg"
              className="text-lg px-8 py-4"
              iconEnd={<ArrowRight className="w-6 h-6" />}
            >
              Create Your Profile Now
            </Button>
          </div>
          <p className="mt-4 text-sm text-black">
            It takes less than 10 minutes to get started
          </p>
        </div>
      </section>
    </div>
  );
}
