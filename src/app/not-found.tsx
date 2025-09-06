import { Button } from "@/app/components/ui/button";
import HomeIcon from "@/app/icons/HomeIcon";
import UsersIcon from "@/app/icons/UsersIcon";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background-light via-white to-background-light bg-opacity-50 mb-6">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 blur-3xl rounded-full"></div>
            <div className="relative">
              <h1 className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary mb-6 leading-none">
                404
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Oops! Page not found
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The page you&apos;re looking for seems to have wandered off.
              Don&apos;t worry though - we&apos;ll help you get back on track!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <Button
              href="/"
              variant="primary"
              size="lg"
              className="group h-16 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              iconStart={
                <HomeIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              }
              iconEnd={
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              }
            >
              Back to Home
            </Button>

            <Button
              href="/join"
              variant="secondary"
              size="lg"
              className="group h-16 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              iconStart={
                <UsersIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              }
              iconEnd={
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              }
            >
              Join Us
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-3">
                Become a Guide
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Share your university experience and help students achieve their
                dreams.
              </p>
              <Button
                href="/become-a-mentor"
                variant="outline"
                size="sm"
                className="w-full"
              >
                Get Started
              </Button>
            </div>

            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <HomeIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-3">
                Explore Platform
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Discover guides, universities, and success stories from our
                community.
              </p>
              <Button
                href="/mentors"
                variant="outline"
                size="sm"
                className="w-full"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
