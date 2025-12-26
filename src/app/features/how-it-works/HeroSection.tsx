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
            Our comprehensive platform provides end-to-end support for graduate school applications. From AI-powered essay assistance to test prep and expert guidance - we&apos;re your complete grad school consultancy.
          </p>
        </div>
        <div className="text-center mt-12">
          <Button
            href="/essay-ai"
            variant="primary"
            size="lg"
            iconEnd={<ArrowRight className="w-5 h-5" />}
          >
            Start with EssayAI
          </Button>
        </div>
      </div>
    </section>
  );
}
