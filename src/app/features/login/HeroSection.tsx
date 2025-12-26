import { Bot, Target, Users, Trophy } from "lucide-react";

export default function HeroSection() {
  const features = [
    {
      icon: <Bot className="w-6 h-6 text-[#4F46E5]" />,
      title: "AI-Powered Essays",
      description: "Get intelligent writing assistance for all your applications",
    },
    {
      icon: <Target className="w-6 h-6 text-[#4F46E5]" />,
      title: "Complete Test Prep",
      description: "English tests, GMAT/GRE preparation all in one platform",
    },
    {
      icon: <Users className="w-6 h-6 text-[#4F46E5]" />,
      title: "Expert Mentors",
      description: "Human guidance when you need that personal touch",
    },
    {
      icon: <Trophy className="w-6 h-6 text-[#4F46E5]" />,
      title: "End-to-End Success",
      description: "Your complete grad school consultancy platform",
    },
  ];

  return (
    <div className="order-2 lg:order-1">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-6">
          Welcome Back to
          <span className="text-secondary"> AbroadHandy</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
          Continue your graduate school journey. Access AI-powered essay assistance, test prep, and expert mentorship all in one comprehensive platform.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 p-2 bg-white rounded-lg border border-gray-100">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-semibold text-black mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
