import Banner from "@/app/components/banner/Banner";
import HeroSection from "@/app/components/features/how-it-works/HeroSection";
import StudentStepsSection from "@/app/components/features/how-it-works/StudentStepsSection";
import MentorStepsSection from "@/app/components/features/how-it-works/MentorStepsSection";
import BenefitsSection from "@/app/components/features/how-it-works/BenefitsSection";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StudentStepsSection />
      <MentorStepsSection />
      <BenefitsSection />
      <Banner
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
