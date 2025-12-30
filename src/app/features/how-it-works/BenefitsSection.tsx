import { Bot, Target, CheckCircle } from "lucide-react";
import SoonBadge from "@/app/components/soon-badge/SoonBadge";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "AI-Powered Essay Feedback",
      items: [
        "Advanced AI analyzes your essays for content, structure, and impact",
        "Personalized suggestions to strengthen your arguments and storytelling",
        "Real-time feedback on grammar, style, and admissions appeal",
        "AI-powered content evaluation and improvement recommendations",
        "Instant analysis of essay effectiveness and admissions potential",
        "Continuous optimization suggestions to help you improve your writing",
      ],
      icon: <Bot className="w-6 h-6 text-secondary" />,
    },
    {
      title: "Comprehensive Application Support",
      items: [
        "Expert mentorship from successful graduate students and alumni",
        "Test preparation for IELTS, TOEFL, Duolingo, GMAT, and GRE",
        "Application strategy and timeline planning",
        "University-specific insights and admissions trends",
        "Interview preparation and mock sessions",
        "Resume optimization powered by AI analysis",
      ],
      icon: <Target className="w-6 h-6 text-secondary" />,
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black lg:text-4xl mb-4">
            Powerful Features That Drive Success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform combines cutting-edge technology with human
            expertise to maximize your graduate school admission chances
            worldwide.
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
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-black">
                    {benefit.title}
                  </h3>
                  {benefit.title === "Comprehensive Application Support" && (
                    <SoonBadge />
                  )}
                </div>
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
