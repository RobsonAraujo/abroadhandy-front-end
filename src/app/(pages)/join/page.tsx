import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";
import CTA from "@/app/components/cta/CTA";
import { GraduationCap, Target, Star } from "lucide-react";

export default function Join() {
  const benefits = [
    {
      title: "Peer-to-Peer Guidance",
      description:
        "Connect with professionals who have successfully navigated university applications.",
      icon: <GraduationCap className="w-8 h-8 text-[#4F46E5]" />,
    },
    {
      title: "Personalized Guidance",
      description:
        "Get tailored advice based on your specific goals and background.",
      icon: <Target className="w-8 h-8 text-[#4F46E5]" />,
    },
    {
      title: "Proven Results",
      description:
        "Join students who are achieving their university dreams with our help.",
      icon: <Star className="w-8 h-8 text-[#4F46E5]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-background-light">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black">
              Start Your Journey Today
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Join students who are already working with top students from
              leading universities to achieve their university application
              dreams.
            </p>
          </div>
        </div>
      </section>

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
                    <div className="flex-shrink-0 mr-4 mt-1">
                      {benefit.icon}
                    </div>
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
                      Sign up and tell us about your goals and interests.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-black">
                      Find Your Mentor
                    </h4>
                    <p className="text-gray-600">
                      Browse our top students and find the perfect match for
                      your needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-black">
                      Start Your Journey
                    </h4>
                    <p className="text-gray-600">
                      Book your first session and begin working towards your
                      university goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <Button
                  href="/register"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  iconEnd={<ArrowRightIcon className="w-5 h-5" />}
                >
                  Create Free Account
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

      <CTA
        title="Ready to Transform Your Future?"
        description="Don't let another day pass without taking action towards your university dreams."
        primaryButton={{
          href: "/register",
          text: "Join Now - It's Free",
          icon: <ArrowRightIcon className="w-5 h-5" />,
        }}
        secondaryButton={{
          href: "/find-top-students",
          text: "Browse Top Students",
        }}
        backgroundColor="secondary"
      />
    </div>
  );
}
