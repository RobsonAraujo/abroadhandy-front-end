import { Bot, Target, Users, Trophy } from "lucide-react";

export default function HeroSection() {
  const benefits = [
    {
      icon: <Bot className="w-6 h-6 text-[#4F46E5]" />,
      title: "AI Essay Assistant",
      description: "Get intelligent feedback and suggestions for all your grad applications",
    },
    {
      icon: <Target className="w-6 h-6 text-[#4F46E5]" />,
      title: "Complete Prep Suite",
      description: "English tests, GMAT/GRE, and application support",
    },
    {
      icon: <Users className="w-6 h-6 text-[#4F46E5]" />,
      title: "Expert Mentors",
      description: "Human guidance from Harvard, Stanford, Oxford graduates",
    },
    {
      icon: <Trophy className="w-6 h-6 text-[#4F46E5]" />,
      title: "End-to-End Platform",
      description: "Your complete grad school success solution",
    },
  ];

  return (
    <div className="order-2 lg:order-1">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-6">
          Join the Future of
          <span className="text-secondary"> Grad School Success</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
          Access our comprehensive platform with AI-powered essay feedback, test preparation, and expert mentorship. Everything you need for graduate school success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 p-2 bg-white rounded-lg border border-gray-100">
              {benefit.icon}
            </div>
            <div>
              <h3 className="font-semibold text-black mb-1">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
