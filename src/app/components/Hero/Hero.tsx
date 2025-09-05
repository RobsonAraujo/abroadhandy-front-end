import Link from "next/link";
import Image from "next/image";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";

export default function Hero() {
  return (
    <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
              University application mentorship
            </p>
            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
              Connect with experienced mentors
            </h1>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              Get personalized guidance for your university applications abroad
              and maximize your admission chances.
            </p>

            <Link
              href="/join"
              title=""
              className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
              role="button"
            >
              Find a mentor
              <ArrowRightIcon className="w-6 h-6 ml-8 -mr-2" />
            </Link>

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
