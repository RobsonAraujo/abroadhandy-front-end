import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">AbroadHandy</h3>
            <p className="text-gray-400 mb-4">
              Connecting students with expert mentors to achieve their
              university application dreams.
            </p>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">For Students</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mentors"
                  className="text-gray-400 hover:text-white"
                >
                  Find Mentors
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-400 hover:text-white"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="text-gray-400 hover:text-white"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">For Mentors</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/become-a-mentor"
                  className="text-gray-400 hover:text-white"
                >
                  Become a Mentor
                </Link>
              </li>
              <li>
                <Link
                  href="/mentor-guidelines"
                  className="text-gray-400 hover:text-white"
                >
                  Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href="/mentor-resources"
                  className="text-gray-400 hover:text-white"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} AbroadHandy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
