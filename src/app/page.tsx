import Hero from "./components/features/home/hero/Hero";
import HowItWorks from "./components/features/home/how-it-works/HowItWorks";
import CTASimple from "./components/features/home/cta-simple/CTASimple";
import CTA from "./components/cta/CTA";
import CTAGuide from "./components/features/home/cta-guide/CTAGuide";
import WhyChooseUs from "./components/features/home/why-choose-us/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <CTASimple />
      <CTAGuide />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
