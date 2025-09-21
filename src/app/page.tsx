import Hero from "./components/features/home/Hero";
import HowItWorks from "./components/features/home/HowItWorks";
import LearnBanner from "./components/features/home/LearnBanner";
import Banner from "./components/banner/Banner";
import BecomeAMentorSection from "./components/features/home/BecomeAMentorSection";
import WhyChooseUs from "./components/features/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <LearnBanner />
      <BecomeAMentorSection />
      <WhyChooseUs />
      <Banner />
    </>
  );
}
