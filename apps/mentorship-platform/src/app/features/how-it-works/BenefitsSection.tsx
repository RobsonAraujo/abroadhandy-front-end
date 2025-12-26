import { Users, Trophy, CheckCircle } from "lucide-react";

export default function BenefitsSection() {
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
    <section className="py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black lg:text-4xl mb-4">
            Why Choose AbroadHandy?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide value for both students and mentors through our carefully
            designed platform.
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
  );
}
