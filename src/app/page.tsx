import Hero from "./features/home/Hero";
import HowItWorks from "./features/home/HowItWorks";
import LearnBanner from "./features/home/LearnBanner";
import Banner from "./components/banner/Banner";
import BecomeAMentorSection from "./features/home/BecomeAMentorSection";
import WhyChooseUs from "./features/home/WhyChooseUs";

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
