"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@/app/icons/MenuIcon";
import CloseMenuIcon from "@/app/icons/CloseMenuIcon";
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
            <Link href="/" title="" className="flex">
              <Image
                className="w-auto h-8"
                src="/logo.svg"
                alt="Abroad Handy Logo"
                width={120}
                height={32}
                priority
              />
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
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {MENU_ITEMS.filter((item) => item.isCTA).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              title=""
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-primary hover:text-black focus:text-black focus:bg-primary font-semibold text-white bg-accent rounded-full"
              role="button"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3  border-t border-gray-200">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                title=""
                className={`block px-3 py-2 text-base transition-all duration-200 rounded-md ${
                  item.isCTA
                    ? "mt-4 font-semibold text-white bg-accent rounded-full text-center hover:bg-gray-800"
                    : "text-black hover:text-opacity-80 hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
