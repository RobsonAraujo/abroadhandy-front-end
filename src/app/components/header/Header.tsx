"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@/app/icons/MenuIcon";
import CloseMenuIcon from "@/app/icons/CloseMenuIcon";
import { Button } from "@/app/components/ui/button";
import { MENU_ITEMS } from "@/app/constants/menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background-light bg-opacity-30">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" title="" className="flex items-center space-x-3">
              <Image
                className="w-auto h-5"
                src="/logo.svg"
                alt="AbroadHandy Logo"
                width={1}
                height={1}
              />
              <span className="text-sm lg:text-sm font-bold text-black">
                AbroadHandy
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <CloseMenuIcon className="block w-6 h-6" />
            ) : (
              <MenuIcon className="block w-6 h-6" />
            )}
          </button>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
            {MENU_ITEMS.filter((item) => !item.isCTA).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                title=""
                className="text-base font-medium text-black transition-all duration-200 hover:text-opacity-80"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              href="/login"
              className="text-base font-medium text-black hover:text-opacity-80 transition-all duration-200"
            >
              Log in
            </Link>
            {MENU_ITEMS.filter((item) => item.isCTA).map((item) => (
              <Button
                key={item.href}
                href={item.href}
                variant="black"
                hoverVariant="primary"
                hoverTextColor="black"
                size="md"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            {/* Regular Menu Items */}
            {MENU_ITEMS.filter((item) => !item.isCTA).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                title=""
                className="block px-3 py-2 text-base font-medium text-black transition-all duration-200 rounded-md hover:text-opacity-80 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Auth Section */}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <Link
                href="/login"
                className="block px-3 py-2 text-base font-medium text-gray-600 transition-all duration-200 rounded-md hover:text-black hover:bg-gray-50 mb-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>

              {MENU_ITEMS.filter((item) => item.isCTA).map((item) => (
                <Button
                  key={item.href}
                  href={item.href}
                  variant="black"
                  size="md"
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
