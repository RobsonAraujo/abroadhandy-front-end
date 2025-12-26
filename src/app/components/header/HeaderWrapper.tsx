"use client";

import { useAuth } from "@/app/contexts/AuthContext";
import { usePathname } from "next/navigation";
import Header from "./Header";
import LoggedHeader from "./LoggedHeader";

export default function HeaderWrapper() {
  const { isAuthenticated, user, logout, isLoading } = useAuth();
  const pathname = usePathname();

  const mentorPath =
    pathname === "/mentors" || pathname?.startsWith("/mentor/");
  const essayAiPath = pathname === "/essay-ai";
  const shouldUseWhiteBackground = mentorPath || essayAiPath;

  if (isLoading) {
    return (
      <header
        className={
          shouldUseWhiteBackground
            ? "bg-white"
            : "bg-background-light bg-opacity-30"
        }
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="animate-pulse bg-gray-200 h-6 w-32 rounded"></div>
            <div className="animate-pulse bg-gray-200 h-8 w-8 rounded-full"></div>
          </div>
        </div>
      </header>
    );
  }

  if (isAuthenticated && user) {
    return <LoggedHeader user={user} onLogout={logout} />;
  }

  return <Header useWhiteBackground={shouldUseWhiteBackground} />;
}
