import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";
import { Bot, Target, Trophy } from "lucide-react";

export default function BenefitsAndStepsSection() {
  const benefits = [
    {
      title: "AI-Powered Platform",
      description:
        "Get intelligent essay assistance and application guidance powered by advanced AI technology.",
      icon: <Bot className="w-8 h-8 text-[#4F46E5]" />,
    },
    {
      title: "Complete Preparation Suite",
      description:
        "Access everything you need: essay writing, test prep, and expert mentorship all in one place.",
      icon: <Target className="w-8 h-8 text-[#4F46E5]" />,
    },
    {
      title: "End-to-End Success",
      description:
        "From your first essay draft to final application submission - we support your entire grad school journey.",
      icon: <Trophy className="w-8 h-8 text-[#4F46E5]" />,
    },
  ];

  return (
    <section className="py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">
              Why Join AbroadHandy?
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-4 mt-1">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background-light p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-black mb-6">
              Get Started in 3 Simple Steps
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-black">
                    Create Your Account
                  </h4>
                  <p className="text-gray-600">
                    Sign up and tell us about your grad school goals and target
                    programs.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-black">
                    Start with EssayAI
                  </h4>
                  <p className="text-gray-600">
                    Use our AI-powered platform to craft compelling essays and
                    personal statements.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-black">
                    Get Expert Support
                  </h4>
                  <p className="text-gray-600">
                    Access test prep, essay refinement, and human mentorship
                    when you need that personal touch.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <Button
                href="/essay-ai"
                variant="primary"
                size="lg"
                className="w-full"
                iconEnd={<ArrowRightIcon className="w-5 h-5" />}
              >
                Start with EssayAI
              </Button>

              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-secondary hover:text-blue-500 font-medium"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
