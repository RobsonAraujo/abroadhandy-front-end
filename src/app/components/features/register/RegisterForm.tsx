import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import { Checkbox } from "@/app/components/ui/checkbox";

export default function RegisterForm() {
  return (
    <div className="order-1 lg:order-2">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 lg:p-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-black mb-2">
            Create your account
          </h2>
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-secondary hover:text-blue-500"
            >
              Sign in here
            </Link>
          </p>
        </div>
        <form className="space-y-8 md:space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-base md:text-sm font-medium text-gray-700 mb-3"
              >
                First name
              </label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-base md:text-sm font-medium text-gray-700 mb-3"
              >
                Last name
              </label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label className="block text-base md:text-sm font-medium text-gray-700 mb-4">
              I am a
            </label>
            <RadioGroup defaultValue="student" className="space-y-3">
              <div className="flex items-center space-x-3 p-5 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <RadioGroupItem value="student" id="student" />
                <label htmlFor="student" className="flex-1 cursor-pointer">
                  <div className="font-medium text-gray-900">
                    Student seeking guidance
                  </div>
                  <div className="text-sm text-gray-500">
                    Looking for help with university applications
                  </div>
                </label>
              </div>
              <div className="flex items-center space-x-3 p-5 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <RadioGroupItem value="mentor" id="mentor" />
                <label htmlFor="mentor" className="flex-1 cursor-pointer">
                  <div className="font-medium text-gray-900">
                    Top student wanting to mentor others
                  </div>
                  <div className="text-sm text-gray-500">
                    Share your experience and help other students
                  </div>
                </label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              placeholder="Create a strong password"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm password
            </label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              placeholder="Confirm your password"
            />
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox id="agree-terms" required />
            <label
              htmlFor="agree-terms"
              className="text-sm text-gray-900 leading-5"
            >
              I agree to the{" "}
              <Link
                href="/terms"
                className="text-secondary hover:text-blue-500 font-medium"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-secondary hover:text-blue-500 font-medium"
              >
                Privacy Policy
              </Link>
            </label>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full h-14"
          >
            Create account
          </Button>
        </form>
      </div>
    </div>
  );
}
