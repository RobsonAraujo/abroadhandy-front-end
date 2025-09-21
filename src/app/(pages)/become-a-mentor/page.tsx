import HeroSection from "@/app/components/features/become-a-mentor/HeroSection";
import BenefitsSection from "@/app/components/features/become-a-mentor/BenefitsSection";
import HowItWorksSection from "@/app/components/features/become-a-mentor/HowItWorksSection";
import PlatformFeaturesSection from "@/app/components/features/become-a-mentor/PlatformFeaturesSection";
import FAQSection from "@/app/components/features/become-a-mentor/FAQSection";
import FinalCTASection from "@/app/components/features/become-a-mentor/FinalCTASection";

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
