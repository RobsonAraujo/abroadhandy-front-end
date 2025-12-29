"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@/app/icons/MenuIcon";
import CloseMenuIcon from "@/app/icons/CloseMenuIcon";
import SparklesIcon from "@/app/icons/SparklesIcon";
import { Button } from "@/app/components/ui/button";
import { MENU_ITEMS } from "@/app/constants/menu";

interface HeaderProps {
  useWhiteBackground?: boolean;
}

export default function Header({ useWhiteBackground = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Block body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={
        useWhiteBackground ? "bg-white" : "bg-background-light bg-opacity-30"
      }
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20">
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
                className={`text-base font-medium transition-all duration-200 flex items-center space-x-2 ${
                  item.isHighlighted
                    ? "text-secondary hover:text-secondary/90 bg-secondary/10 px-3 py-2 rounded-lg"
                    : "text-black hover:text-opacity-80"
                }`}
              >
                {item.hasIcon && (
                  <SparklesIcon className="w-4 h-4 text-secondary" />
                )}
                <span>{item.label}</span>
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

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#000000a6] bg-opacity-10 z-40 lg:hidden transition-opacity duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Slide-in Menu */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 lg:hidden transform translate-x-0 transition-transform duration-300 ease-in-out animate-slide-in-right">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <Link href="/" className="flex items-center space-x-3">
                  <Image
                    className="w-auto h-5"
                    src="/logo.svg"
                    alt="AbroadHandy Logo"
                    width={1}
                    height={1}
                  />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
                >
                  <CloseMenuIcon />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto py-4">
                <div className="px-4 space-y-2">
                  {/* Regular Menu Items */}
                  {MENU_ITEMS.filter((item) => !item.isCTA).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-3 py-3 text-base font-medium transition-all duration-200 rounded-md flex items-center space-x-2 ${
                        item.isHighlighted
                          ? "text-secondary bg-secondary/10 hover:bg-secondary/20"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.hasIcon && (
                        <SparklesIcon className="w-4 h-4 text-secondary" />
                      )}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>

                {/* Auth Section */}
                <div className="px-4 mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href="/login"
                    className="block px-3 py-3 text-base font-medium text-gray-600 transition-all duration-200 rounded-md hover:text-gray-900 hover:bg-gray-50 mb-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Log in
                  </Link>

                  {MENU_ITEMS.filter((item) => item.isCTA).map((item) => (
                    <Button
                      key={item.href}
                      href={item.href}
                      variant="primary"
                      size="md"
                      className="w-full mb-3"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
