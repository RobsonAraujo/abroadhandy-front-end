import { Button } from "@/app/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  DollarSign,
  BookOpen,
  Users,
  MessageCircle,
  Target,
} from "lucide-react";

export default function MentorStepsSection() {
  const studentSteps = [
    {
      step: "1",
      title: "Browse Expert Mentors",
      description:
        "Explore our network of mentors from Harvard MBA, Stanford PhD, Oxford Master's, and other top programs.",
      icon: <Users className="w-8 h-8 text-[#4F46E5]" />,
    },
    {
      step: "2",
      title: "Connect & Schedule",
      description:
        "Find mentors who match your target programs and schedule personalized guidance sessions.",
      icon: <MessageCircle className="w-8 h-8 text-[#4F46E5]" />,
    },
    {
      step: "3",
      title: "Get Personalized Help",
      description:
        "Receive one-on-one guidance for essays, interviews, application strategy, and program-specific advice.",
      icon: <Target className="w-8 h-8 text-[#4F46E5]" />,
    },
  ];

  const mentorSteps = [
    {
      step: "1",
      title: "Apply to Become a Mentor",
      description:
        "Submit your application with your university details, achievements, and areas of expertise.",
      icon: <BookOpen className="w-8 h-8 text-[#4F46E5]" />,
    },
    {
      step: "2",
      title: "Get Verified & Approved",
      description:
        "Our team reviews your application and verifies your credentials to ensure quality mentorship.",
      icon: <CheckCircle className="w-8 h-8 text-[#4F46E5]" />,
    },
    {
      step: "3",
      title: "Start Mentoring & Earning",
      description:
        "Connect with students, provide valuable guidance, and earn money while helping others succeed.",
      icon: <DollarSign className="w-8 h-8 text-[#4F46E5]" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* For Students Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black lg:text-4xl mb-4">
              For Students - Human Touch Available
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              When you need that personal guidance beyond our AI platform,
              connect with expert mentors from your target programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              href="/mentors"
              variant="primary"
              size="lg"
              iconEnd={<ArrowRight className="w-5 h-5" />}
            >
              Find Expert Mentors
            </Button>
          </div>
        </div>

        {/* For Mentors Section */}
        <div className="border-t border-gray-200 pt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black lg:text-4xl mb-4">
              For Mentors - Share Your Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Help the next generation of graduate students while earning money
              and building your professional network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentorSteps.map((step, index) => (
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
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              href="/become-a-mentor"
              variant="black"
              size="lg"
              iconEnd={<ArrowRight className="w-5 h-5" />}
            >
              Become a Mentor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
