"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@/app/icons/MenuIcon";
import CloseMenuIcon from "@/app/icons/CloseMenuIcon";
import ProfileDropdown from "./ProfileDropdown";
import SubMenu from "./SubMenu";

interface LoggedHeaderProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  onLogout: () => void;
}

export default function LoggedHeader({ user, onLogout }: LoggedHeaderProps) {
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
    <>
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            <div className="flex-shrink-0">
              <Link
                href="/dashboard"
                title=""
                className="flex items-center space-x-3"
              >
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

            <div className="hidden lg:flex lg:items-center">
              <ProfileDropdown user={user} onLogout={onLogout} />
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

                {/* User Info */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                      {user.avatar ? (
                        <Image
                          src={user.avatar}
                          alt={user.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image
                          src="/default-avatar.svg"
                          alt={user.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto py-4">
                  <div className="px-4 space-y-2">
                    <Link
                      href="/dashboard"
                      className="block px-3 py-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-md hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>

                    <Link
                      href="/dashboard/profile"
                      className="block px-3 py-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-md hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Profile Settings
                    </Link>

                    <button
                      onClick={() => {
                        onLogout();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-md hover:bg-gray-50"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      <SubMenu />
    </>
  );
}
