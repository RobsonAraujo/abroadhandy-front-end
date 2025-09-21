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
        title="Ready to Transform Your Future?"
        description="Don't let another day pass without taking action towards your university dreams."
        primaryButton={{
          href: "/register",
          text: "Join Now - It's Free",
          icon: <ArrowRightIcon className="w-5 h-5" />,
        }}
        secondaryButton={{
          href: "/mentors",
          text: "Browse Top Student Mentors",
        }}
        backgroundColor="secondary"
      />
    </div>
  );
}
