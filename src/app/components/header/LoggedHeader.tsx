"use client";

import { useState } from "react";
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

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <div className="pt-4">
                <div className="px-3 py-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                      {user.avatar ? (
                        <Image
                          src={user.avatar}
                          alt={user.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image
                          src="/default-avatar.svg"
                          alt={user.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/dashboard"
                  className="block px-3 py-2 text-base font-medium text-gray-600 transition-all duration-200 rounded-md hover:text-black hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </Link>

                <Link
                  href="/profile"
                  className="block px-3 py-2 text-base font-medium text-gray-600 transition-all duration-200 rounded-md hover:text-black hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Configurar perfil
                </Link>

                <button
                  onClick={() => {
                    onLogout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 transition-all duration-200 rounded-md hover:text-black hover:bg-gray-50"
                >
                  Sair
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <SubMenu />
    </>
  );
}
