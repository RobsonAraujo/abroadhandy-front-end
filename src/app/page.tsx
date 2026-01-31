"use client";

import { useAuth } from "./contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Hero from "./features/home/Hero";
import UniversityLogos from "./features/home/UniversityLogos";
import GMATCoursePreview from "./features/home/GMATCoursePreview";
import Banner from "./components/banner/Banner";
// import HowItWorks from "./features/home/HowItWorks";
// import LearnBanner from "./features/home/LearnBanner";
// import BecomeAMentorSection from "./features/home/BecomeAMentorSection";
// import WhyChooseUs from "./features/home/WhyChooseUs";
// import StickyCTA from "./components/sticky-cta/StickyCTA";

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background-light flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (isAuthenticated) {
    return null; // Will redirect to dashboard
  }

  return (
    <>
      <Hero />
      <UniversityLogos />
      <GMATCoursePreview />
      {/* <HowItWorks /> */}
      {/* <LearnBanner /> */}

      {/* <BecomeAMentorSection /> */}
      {/* <WhyChooseUs /> */}
      <Banner page="home" />
      {/* <StickyCTA /> */}
    </>
  );
}
