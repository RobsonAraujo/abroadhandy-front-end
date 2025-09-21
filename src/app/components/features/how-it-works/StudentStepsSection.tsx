import { Users, Target, MessageCircle, CheckCircle } from "lucide-react";

export default function StudentStepsSection() {
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

  return (
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
      </div>
    </section>
  );
}
