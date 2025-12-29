"use client";

import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState, use, useCallback, useRef } from "react";
import { Essay } from "../page";
import EssayEditor from "@/app/components/essay-editor/EssayEditor";
import { EditorState } from "lexical";

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
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleEditorChange = useCallback(
    (editorState: EditorState) => {
      if (!essayId) return;

      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }

      // Debounce: save after 500ms of inactivity
      saveTimeoutRef.current = setTimeout(() => {
        try {
          const editorStateJSON = editorState.toJSON();

          const storedEssays = localStorage.getItem("essays");
          let essays: Essay[] = storedEssays ? JSON.parse(storedEssays) : [];

          const existingEssayIndex = essays.findIndex((e) => e.id === essayId);

          if (existingEssayIndex >= 0) {
            essays[existingEssayIndex] = {
              ...essays[existingEssayIndex],
              editorState: editorStateJSON,
            };
          } else {
            const newEssay: Essay = {
              id: essayId,
              title: `New Essay`,
              createdAt: new Date().toISOString().split("T")[0],
              body: "",
              editorState: editorStateJSON,
            };
            essays = [newEssay, ...essays];
          }

          localStorage.setItem("essays", JSON.stringify(essays));
          const updatedEssay = essays.find((e) => e.id === essayId) || null;
          setEssay(updatedEssay);
        } catch (error) {
          console.error("error saving editor state:", error);
        }
      }, 500);
    },
    [essayId]
  );

  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  const getInitialState = () => {
    if (!essay) return undefined;

    if (essay?.editorState) {
      return essay?.editorState;
    }

    return undefined;
  };

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
      <EssayEditor
        initialState={getInitialState()}
        onChange={handleEditorChange}
      />
    </div>
  );
}
