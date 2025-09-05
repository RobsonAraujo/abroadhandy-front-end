import { Button } from "@/app/components/ui/button";
import HomeIcon from "@/app/icons/HomeIcon";
import UsersIcon from "@/app/icons/UsersIcon";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-light">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-secondary mb-4">404</h1>
            <h2 className="text-3xl font-bold text-black mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Oops! It looks like this page has moved to a different location.
              Don&apos;t worry, we&apos;ll help you find what you&apos;re
              looking for.
            </p>
          </div>

          <div className="space-y-4">
            <Button
              href="/"
              variant="primary"
              size="lg"
              className="hover:opacity-90"
              iconStart={<HomeIcon className="w-5 h-5" />}
            >
              Back to Home
            </Button>

            <div className="text-sm text-gray-500">or</div>

            <Button
              href="/mentors"
              variant="secondary"
              size="lg"
              className="hover:opacity-90"
              iconStart={<UsersIcon className="w-5 h-5" />}
            >
              Find Top Students
            </Button>
          </div>

          <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-100">
            <h3 className="text-xl font-semibold text-black mb-4">
              Need Help?
            </h3>
            <p className="text-gray-600 mb-4">
              If you&apos;re looking for a specific guide or university
              information, try searching our platform or contact our support
              team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/become-a-mentor" variant="black" size="md">
                Become a Guide
              </Button>
              <Button href="/about-us" size="md" variant="outline">
                About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
