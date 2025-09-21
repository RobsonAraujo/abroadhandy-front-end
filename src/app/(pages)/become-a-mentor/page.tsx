import HeroSection from "@/app/features/become-a-mentor/HeroSection";
import BenefitsSection from "@/app/features/become-a-mentor/BenefitsSection";
import HowItWorksSection from "@/app/features/become-a-mentor/HowItWorksSection";
import PlatformFeaturesSection from "@/app/features/become-a-mentor/PlatformFeaturesSection";
import FAQSection from "@/app/features/become-a-mentor/FAQSection";
import FinalCTASection from "@/app/features/become-a-mentor/FinalCTASection";

export default function BecomeAMentor() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <PlatformFeaturesSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}
