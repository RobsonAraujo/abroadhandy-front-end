import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-background-light bg-opacity-30 py-16 sm:py-24 lg:py-32">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black sm:text-5xl lg:text-6xl xl:text-7xl">
            Become a Mentor
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Share your university experience and help students achieve their
            dreams while earning money doing what you love.
          </p>
          <div className="mt-8">
            <Button
              href="/register"
              variant="primary"
              size="lg"
              className="text-lg px-8 py-4"
              iconEnd={<ArrowRight className="w-6 h-6" />}
            >
              Create your profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
