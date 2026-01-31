"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubMenu() {
  const pathname = usePathname();

  const menuItems = [
    {
      label: "Home",
      href: "/dashboard",
    },
    // {
    //   label: "Profile Settings",
    //   href: "/dashboard/profile",
    // },
    {
      label: "Essay Assistant",
      href: "/dashboard/essay-assistant",
    },
    {
      label: "GMAT Prep",
      href: "/dashboard/standardized-tests",
    },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <nav className="flex space-x-8">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || (item.href === "/dashboard/standardized-tests" && pathname?.startsWith("/dashboard/standardized-tests"));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`py-4 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  isActive
                    ? "border-primary "
                    : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
