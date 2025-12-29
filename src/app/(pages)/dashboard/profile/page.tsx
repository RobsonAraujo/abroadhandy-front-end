"use client";

import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  User,
  GraduationCap,
  Globe,
  DollarSign,
  Calendar,
  Star,
  Save,
  ArrowLeft,
  Shield,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

// Import section components
import BasicInfoSection from "@/app/features/dashboard/profile/BasicInfoSection";
import EducationSection from "@/app/features/dashboard/profile/EducationSection";
import AboutSection from "@/app/features/dashboard/profile/AboutSection";
import PricingSection from "@/app/features/dashboard/profile/PricingSection";
import AvailabilitySection from "@/app/features/dashboard/profile/AvailabilitySection";
import LanguagesSection from "@/app/features/dashboard/profile/LanguagesSection";
import VerificationSection from "@/app/features/dashboard/profile/VerificationSection";

type ProfileSection =
  | "basic"
  | "education"
  | "about"
  | "pricing"
  | "availability"
  | "languages"
  | "verification";

export default function ProfileSettings() {
  const { isAuthenticated, user, isLoading } = useAuth();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<ProfileSection>("basic");

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  const menuItems = [
    { id: "basic" as const, label: "Basic Info", icon: User },
    { id: "education" as const, label: "Education", icon: GraduationCap },
    { id: "about" as const, label: "About Me", icon: Globe },
    { id: "pricing" as const, label: "Pricing", icon: DollarSign },
    { id: "availability" as const, label: "Availability", icon: Calendar },
    { id: "languages" as const, label: "Languages", icon: Star },
    { id: "verification" as const, label: "Verification", icon: Shield },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "basic":
        return <BasicInfoSection user={user} />;
      case "education":
        return <EducationSection />;
      case "about":
        return <AboutSection />;
      case "pricing":
        return <PricingSection />;
      case "availability":
        return <AvailabilitySection />;
      case "languages":
        return <LanguagesSection />;
      case "verification":
        return <VerificationSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Link
              href="/dashboard"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </Link>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Profile Settings
          </h1>
          <p className="text-gray-600 mt-1">
            Complete your mentor profile to start receiving student requests
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Menu */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-8">
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        isActive
                          ? "bg-blue-50 text-blue-700 border-blue-200"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}

            {/* Save Button */}
            <div className="mt-8 flex justify-end">
              <Button iconStart={<Save className="w-4 h-4" />}>
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
