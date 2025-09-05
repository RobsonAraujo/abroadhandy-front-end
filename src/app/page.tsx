import Hero from "./components/hero/Hero";
import HowItWorks from "./components/how-it-works/HowItWorks";
import CTASimple from "./components/cta-simple/CTASimple";
import CTA from "./components/cta/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <CTASimple />
      <CTA />
    </>
  );
}
