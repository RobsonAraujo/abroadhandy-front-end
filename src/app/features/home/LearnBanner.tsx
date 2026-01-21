import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function LearnBanner() {
  return (
    <section className="py-20 bg-background-light">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-black lg:text-6xl xl:text-7xl mb-4">
            Your complete grad school success platform!
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto mb-8">
            From AI-powered essay feedback to test prep and expert guidance - everything
            you need to get into your dream program, all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/essay-ai"
              variant="primary"
              size="lg"
              className="group"
              iconEnd={<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
            >
              Try EssayAI Free
            </Button>
            <Button
              href="/register"
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white"
            >
              Create Free Account
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
