import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/button/Button";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";

export default function Hero() {
  return (
    <section className="bg-background-light bg-opacity-30 py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-base font-semibold tracking-wider text-secondary uppercase">
              University application mentorship
            </p>
            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
              Connect with experienced mentors
            </h1>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              Get personalized guidance for your university applications abroad
              and maximize your admission chances.
            </p>

            <Button
              href="/join"
              variant="primary"
              size="lg"
              className="mt-8 lg:mt-16"
              iconEnd={<ArrowRightIcon className="w-6 h-6" />}
            >
              Find a mentor
            </Button>

            <p className="mt-5 text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                title=""
                className="text-black transition-all duration-200 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>

          <div>
            <Image
              className="w-full"
              src="/hero-image.png"
              alt="Students connecting with mentors for university applications abroad"
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
