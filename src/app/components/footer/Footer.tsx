import Link from "next/link";
import SoonBadge from "../soon-badge/SoonBadge";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">AbroadHandy</h3>
            <p className="text-gray-400 mb-4">
              Connecting students with top students from leading universities to
              achieve their university application dreams.
            </p>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">For Students</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/find-top-students"
                  className="text-gray-400 hover:text-white"
                >
                  Find Top Students
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-400 hover:text-white"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">
                  Success Stories
                </span>
                <SoonBadge />
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">
                  Pricing
                </span>
                <SoonBadge />
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">For Top Students</h4>
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
                <span className="text-gray-500 cursor-not-allowed">
                  Guidelines
                </span>
                <SoonBadge />
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">
                  Resources
                </span>
                <SoonBadge />
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-500 cursor-not-allowed">
                  Contact Us
                </span>
                <SoonBadge />
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">
                  Help Center
                </span>
                <SoonBadge />
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">
                  Privacy Policy
                </span>
                <SoonBadge />
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">
                  Terms of Service
                </span>
                <SoonBadge />
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
