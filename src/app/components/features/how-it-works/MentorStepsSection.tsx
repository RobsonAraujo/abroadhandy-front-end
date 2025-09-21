import { Button } from "@/app/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  BookOpen,
} from "lucide-react";

export default function MentorStepsSection() {
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
      title: "Set Your Availability",
      description:
        "Define your schedule, rates, and the types of guidance you're comfortable providing.",
      icon: <Clock className="w-8 h-8 text-[#4F46E5]" />,
    },
    {
      step: "4",
      title: "Start Mentoring & Earning",
      description:
        "Connect with students, provide valuable guidance, and earn money while helping others succeed.",
      icon: <DollarSign className="w-8 h-8 text-[#4F46E5]" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black lg:text-4xl mb-4">
            For Top Students (Mentors)
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Share your knowledge and experience while earning money and building
            your professional network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </section>
  );
}
