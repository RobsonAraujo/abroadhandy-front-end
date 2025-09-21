import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-16 bg-primary">
      <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
          Ready to Start Your Journey?
        </h2>
        <p className="mt-4 text-lg text-black max-w-2xl mx-auto">
          Join our community of top students and start making a difference in
          students&apos; lives while earning money.
        </p>
        <div className="mt-8">
          <Button
            href="/register"
            variant="black"
            size="lg"
            className="text-lg px-8 py-4"
            iconEnd={<ArrowRight className="w-6 h-6" />}
          >
            Create Your Profile Now
          </Button>
        </div>
        <p className="mt-4 text-sm text-black">
          It takes less than 10 minutes to get started
        </p>
      </div>
    </section>
  );
}
