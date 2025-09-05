import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Checkbox } from "@/app/components/ui/checkbox";
import { GraduationCap, Users, Shield, Star } from "lucide-react";

export default function Login() {
  const features = [
    {
      icon: <GraduationCap className="w-6 h-6 text-[#4F46E5]" />,
      title: "Expert Mentors",
      description: "Connect with top students from leading universities",
    },
    {
      icon: <Users className="w-6 h-6 text-[#4F46E5]" />,
      title: "Peer Community",
      description: "Join thousands of ambitious students worldwide",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#4F46E5]" />,
      title: "Secure Platform",
      description: "Your data is protected with enterprise-grade security",
    },
    {
      icon: <Star className="w-6 h-6 text-[#4F46E5]" />,
      title: "Proven Success",
      description: "1,000+ students achieved their university dreams",
    },
  ];

  return (
    <div className="min-h-screen bg-background-light py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <div className="order-2 lg:order-1">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                Welcome Back to
                <span className="text-secondary"> AbroadHandy</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Continue your journey towards university success. Connect with
                mentors, track your progress, and achieve your academic goals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-black mb-2">
                  Sign in to your account
                </h2>
                <p className="text-gray-600">
                  Or{" "}
                  <Link
                    href="/register"
                    className="font-medium text-secondary hover:text-blue-500"
                  >
                    create a new account
                  </Link>
                </p>
              </div>
              <form className="space-y-6">
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
                    autoComplete="current-password"
                    required
                    placeholder="Enter your password"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember-me" />
                    <label
                      htmlFor="remember-me"
                      className="text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link
                      href="/forgot-password"
                      className="font-medium text-secondary hover:text-blue-500"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Sign in
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
