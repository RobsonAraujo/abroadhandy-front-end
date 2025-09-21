import { GraduationCap, Users, Shield, Star } from "lucide-react";

export default function HeroSection() {
  const benefits = [
    {
      icon: <GraduationCap className="w-6 h-6 text-[#4F46E5]" />,
      title: "Expert Guidance",
      description: "Connect with top students from leading universities",
    },
    {
      icon: <Users className="w-6 h-6 text-[#4F46E5]" />,
      title: "Peer Support",
      description: "Join a community of ambitious students",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#4F46E5]" />,
      title: "Secure Platform",
      description: "Your data is protected with enterprise-grade security",
    },
    {
      icon: <Star className="w-6 h-6 text-[#4F46E5]" />,
      title: "Proven Results",
      description: "Join students who are achieving their dreams",
    },
  ];

  return (
    <div className="order-2 lg:order-1">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-6">
          Join the Future of
          <span className="text-secondary"> University Applications</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
          Connect with top students from Harvard, MIT, Stanford, and other
          leading universities. Get personalized guidance to maximize your
          admission chances.
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
