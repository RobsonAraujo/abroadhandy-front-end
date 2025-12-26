import Banner from "@/app/components/banner/Banner";
import HeroSection from "@/app/features/join/HeroSection";
import BenefitsAndStepsSection from "@/app/features/join/BenefitsAndStepsSection";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";

export default function Join() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsAndStepsSection />

      <Banner
        title="Ready to Ace Your Grad School Applications?"
        description="Join thousands using our AI-powered platform for complete graduate school success."
        primaryButton={{
          href: "/essay-ai",
          text: "Start with EssayAI",
          icon: <ArrowRightIcon className="w-5 h-5" />,
        }}
        secondaryButton={{
          href: "/register",
          text: "Create Free Account",
        }}
        backgroundColor="secondary"
      />
    </div>
  );
}
