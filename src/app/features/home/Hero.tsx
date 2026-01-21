"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";
import { sendGAEvent } from '@next/third-parties/google';

export default function Hero() {
  return (
    <section className="bg-background-light bg-opacity-30 py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <p className="text-base font-semibold tracking-wider text-secondary uppercase">
                Complete Grad School Solution
              </p>
            
            </div>
            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
              Grad school applications, simplified
            </h1>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              <span className="font-semibold">AI-powered essay feedback</span> that improves your writing instantly. 

              <span className="text-secondary font-medium"> Start free, no credit card required.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-16">
              <Button
                href="/essay-ai"
                variant="primary"
                size="lg"
                className="group"
                iconEnd={<ArrowRightIcon className="w-6 h-6 transition-transform group-hover:translate-x-1" />}
                onClick={() =>
                  sendGAEvent('event', 'buttonClicked', {
                    button_name: "Try EssayAI Free",
                    page: "home",
                    location: "hero",
                    destination: "/essay-ai",
                  })
                }
              >
                Try EssayAI Free
              </Button>
              <Button
                href="/register"
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white"
                onClick={() =>
                  sendGAEvent('event', 'buttonClicked', {
                    button_name: "Create Account",
                    page: "home",
                    location: "hero",
                    destination: "/register",
                  })
                }
              >
                Create Account
              </Button>
            </div>

            <p className="mt-6 text-sm text-gray-600">
              ✨ No credit card required • Start improving your essays in seconds
            </p>

            <p className="mt-5 text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                title=""
                className="text-black transition-all duration-200 hover:underline font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>

          <div>
            <Image
              className="w-full"
              src="/hero-image.png"
              alt="Graduate students getting AI-powered essay assistance and mentorship for grad school applications"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
