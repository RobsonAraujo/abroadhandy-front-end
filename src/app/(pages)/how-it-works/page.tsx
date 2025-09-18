import { Button } from "@/app/components/ui/button";
import CTA from "@/app/components/cta/CTA";
import {
  ArrowRight,
  Users,
  Target,
  MessageCircle,
  CheckCircle,
  DollarSign,
  Clock,
  BookOpen,
  Trophy,
} from "lucide-react";

export default function HowItWorks() {
  const studentSteps = [
    {
      step: "1",
      title: "Create Your Profile",
      description:
        "Sign up and create a detailed profile with your academic background, target universities, and application goals.",
      icon: <Users className="w-8 h-8 text-[#4F46E5]" />,
    },
    {
      step: "2",
      title: "Browse Top Mentors",
      description:
        "Explore our network of successful students from top universities who match your field of study and target schools.",
      icon: <Target className="w-8 h-8 text-[#4F46E5]" />,
    },
    {
      step: "3",
      title: "Connect & Chat",
      description:
        "Start conversations with potential mentors, ask questions, and find the perfect match for your needs.",
      icon: <MessageCircle className="w-8 h-8 text-[#4F46E5]" />,
    },
    {
      step: "4",
      title: "Get Personalized Guidance",
      description:
        "Receive one-on-one mentorship, essay reviews, interview prep, and strategic advice for your applications.",
      icon: <CheckCircle className="w-8 h-8 text-[#4F46E5]" />,
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

  const benefits = [
    {
      title: "For Students",
      items: [
        "Personalized guidance from successful students",
        "Access to insider knowledge and strategies",
        "Essay reviews and feedback",
        "Interview preparation and practice",
        "Application timeline and planning",
        "University-specific insights",
      ],
      icon: <Users className="w-6 h-6 text-[#4F46E5]" />,
    },
    {
      title: "For Mentors",
      items: [
        "Flexible schedule and remote work",
        "Earn money while helping others",
        "Build your professional network",
        "Develop teaching and communication skills",
        "Gain leadership experience",
        "Make a real impact on students' futures",
      ],
      icon: <Trophy className="w-6 h-6 text-[#4F46E5]" />,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-background-light bg-opacity-30 py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight mb-6">
              How It Works
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform connects ambitious students with successful mentors
              from top universities worldwide. Here&apos;s how we make
              university applications more accessible and successful for
              everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black lg:text-4xl mb-4">
              For Students
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get personalized guidance from students who have successfully
              navigated the same application process you&apos;re going through.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              href="/join"
              variant="primary"
              size="lg"
              iconEnd={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black lg:text-4xl mb-4">
              For Top Students (Mentors)
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Share your knowledge and experience while earning money and
              building your professional network.
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

      <section className="py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black lg:text-4xl mb-4">
              Why Choose AbroadHandy?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide value for both students and mentors through our
              carefully designed platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gray-100 rounded-full flex justify-center items-center w-12 h-12 mr-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-black">
                    {benefit.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Get Started?"
        description="Join thousands of students and mentors who are already using AbroadHandy to achieve their university application goals."
        primaryButton={{
          href: "/mentors",
          text: "Find a Mentor",
          variant: "white",
          icon: <ArrowRight className="w-5 h-5" />,
        }}
        secondaryButton={{
          href: "/become-a-mentor",
          text: "Become a Mentor",
          variant: "outline",
          className:
            "border-white text-white hover:bg-white hover:text-[#4F46E5]",
        }}
        backgroundColor="#4F46E5"
      />
    </div>
  );
}
