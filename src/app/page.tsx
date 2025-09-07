import Hero from "./components/hero/Hero";
import HowItWorks from "./components/how-it-works/HowItWorks";
import CTASimple from "./components/cta-simple/CTASimple";
import CTA from "./components/cta/CTA";
import CTAGuide from "./components/cta-guide/CTAGuide";
import Features from "./components/features/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <CTASimple />
      <CTAGuide />
      <Features />
      <CTA />
    </>
  );
}
