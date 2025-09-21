import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-background-light bg-opacity-30 py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight mb-6">
            How It Works
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform connects ambitious students with successful mentors
            from top universities worldwide. Here&apos;s how we make university
            applications more accessible and successful for everyone.
          </p>
        </div>
        <div className="text-center mt-12">
          <Button
            href="/register"
            variant="primary"
            size="lg"
            iconEnd={<ArrowRight className="w-5 h-5" />}
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
}
