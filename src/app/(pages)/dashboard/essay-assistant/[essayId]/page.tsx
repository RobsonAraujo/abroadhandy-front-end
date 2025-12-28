"use client";

import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState, use } from "react";
import { Essay } from "../page";
import EssayEditor from "@/app/components/essay-editor/EssayEditor";
export default function EssayEdit({
  params,
}: {
  params: Promise<{ essayId: string }>;
}) {
  const { isAuthenticated, user, isLoading } = useAuth();
  const router = useRouter();

  const { essayId } = use(params);
  const [essay, setEssay] = useState<Essay | null>(null);
  const [loadingEssay, setLoadingEssay] = useState(true);

  const USER_NOT_AUTHENTICATED = !isLoading && !isAuthenticated;

  useEffect(() => {
    if (USER_NOT_AUTHENTICATED) {
      router.push("/");
    }
  }, [USER_NOT_AUTHENTICATED, router]);

  useEffect(() => {
    if (!USER_NOT_AUTHENTICATED && essayId) {
      const storedEssays = localStorage.getItem("essays");
      if (storedEssays) {
        const essays: Essay[] = JSON.parse(storedEssays);
        const currentEssay = essays.find((item) => item.id === essayId) || null;
        setEssay(currentEssay);
      } else {
        setEssay(null);
      }
      setLoadingEssay(false);
    }
  }, [essayId, USER_NOT_AUTHENTICATED]);

  if (isLoading || loadingEssay) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <EssayEditor />
    </div>
  );
}
