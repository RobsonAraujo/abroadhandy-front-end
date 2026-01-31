"use client";

import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { FileText, Languages, Target, FileCheck, Users } from "lucide-react";
import SoonBadge from "@/app/components/soon-badge/SoonBadge";
import AvailableBadge from "@/app/components/available-badge/AvailableBadge";
import ModernCard from "@/app/components/modern-card/ModernCard";

export default function Dashboard() {
  const { isAuthenticated, user, isLoading } = useAuth();
  const router = useRouter();

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

  console.log(user);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Welcome back, {user.name?.split(` `)[0]}! 👋
          </h1>
          <p className="text-gray-600 mt-1">
            Ready to continue your complete grad school application journey?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:gap-8 xl:gap-6 max-w-7xl mx-auto px-4 lg:px-6 xl:px-8">
          <Link href="/dashboard/essay-assistant">
            <ModernCard
              title="Essay Assistant"
              description="AI-powered feedback and suggestions for essays, personal statements, and all application materials"
              icon={<FileText className="w-8 h-8" />}
              badge={<AvailableBadge />}
              number="01"
              color="secondary"
            />
          </Link>

          <ModernCard
            title="English Test Prep"
            description="Complete preparation for IELTS, TOEFL, and Duolingo with practice tests and strategies"
            icon={<Languages className="w-8 h-8" />}
            badge={<SoonBadge />}
            number="02"
            color="orange"
            disabled={true}
          />

          <Link href="/dashboard/standardized-tests">
            <ModernCard
              title="GMAT Prep"
              description="GMAT Quant preparation with comprehensive study materials and practice exams"
              icon={<Target className="w-8 h-8" />}
              badge={<AvailableBadge />}
              number="03"
              color="purple"
            />
          </Link>

          <ModernCard
            title="Resume Builder"
            description="AI-powered resume and CV optimization for graduate school applications"
            icon={<FileCheck className="w-8 h-8" />}
            badge={<SoonBadge />}
            number="04"
            color="green"
            disabled={true}
          />

          <ModernCard
            title="Mentor Network"
            description="Connect with successful alumni from top graduate programs for personalized guidance"
            icon={<Users className="w-8 h-8" />}
            badge={<SoonBadge />}
            number="05"
            color="violet"
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
}
