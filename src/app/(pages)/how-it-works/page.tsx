import Banner from "@/app/components/banner/Banner";
import HeroSection from "@/app/features/how-it-works/HeroSection";
import StudentStepsSection from "@/app/features/how-it-works/StudentStepsSection";
import MentorStepsSection from "@/app/features/how-it-works/MentorStepsSection";
import BenefitsSection from "@/app/features/how-it-works/BenefitsSection";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StudentStepsSection />
      {/* <MentorStepsSection /> */}
      <BenefitsSection />
      <Banner
        page="how-it-works"
        title="Ready to Refine Your Essays?"
        description="Join thousands of graduate applicants using our comprehensive AI platform for end-to-end grad school success."
        primaryButton={{
          href: "/essay-ai",
          text: "Start with EssayAI",
          variant: "white",
          icon: <ArrowRight className="w-5 h-5" />,
        }}
        secondaryButton={{
          href: "/register",
          text: "Create Free Account",
          variant: "outline",
          className:
            "border-white text-white hover:bg-white hover:text-[#4F46E5]",
        }}
        backgroundColor="#4F46E5"
      />
    </div>
  );
}
