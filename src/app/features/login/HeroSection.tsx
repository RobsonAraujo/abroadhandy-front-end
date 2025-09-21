import { GraduationCap, Users, Shield, Star } from "lucide-react";

export default function HeroSection() {
  const features = [
    {
      icon: <GraduationCap className="w-6 h-6 text-[#4F46E5]" />,
      title: "Expert Mentors",
      description: "Connect with top students from leading universities",
    },
    {
      icon: <Users className="w-6 h-6 text-[#4F46E5]" />,
      title: "Peer Community",
      description: "Join ambitious students worldwide",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#4F46E5]" />,
      title: "Secure Platform",
      description: "Your data is protected with enterprise-grade security",
    },
    {
      icon: <Star className="w-6 h-6 text-[#4F46E5]" />,
      title: "Proven Success",
      description: "Students are achieving their university dreams",
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
          Continue your journey towards university success. Connect with
          mentors, track your progress, and achieve your academic goals.
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
