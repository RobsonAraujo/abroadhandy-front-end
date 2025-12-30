"use client";

import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState, use, useCallback, useRef } from "react";
import { Essay } from "../page";
import EssayEditor from "@/app/components/essay-editor/EssayEditor";
import { EditorState } from "lexical";
import EssayReview from "@/app/features/dashboard/essay-assistant/EssayReview";
import GetFeedbackButton from "@/app/features/dashboard/essay-assistant/buttons/GetFeedbackButton";
import { refinerService } from "@/app/services/essay-ai/refiner";
import { RefinerFeedback } from "@/app/services/essay-ai/types";
import { extractTextFromEditorState } from "@/app/utils/lexicalUtils";
import EmpowerSwitch from "@/app/features/dashboard/essay-assistant/buttons/EmpowerSwitch";
import EmpowerEssayInfos from "@/app/features/dashboard/essay-assistant/EmpowerEssayInfos";

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
  const [currentEditorState, setCurrentEditorState] =
    useState<EditorState | null>(null);
  const [feedback, setFeedback] = useState<RefinerFeedback | null>(null);
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);
  const [isEmpowerEnabled, setIsEmpowerEnabled] = useState(false);
  const [university, setUniversity] = useState("");
  const [essayPrompt, setEssayPrompt] = useState("");
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const empowerSaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const USER_NOT_AUTHENTICATED = !isLoading && !isAuthenticated;

  useEffect(() => {
    if (USER_NOT_AUTHENTICATED) {
      router.push("/login");
    }
  }, [USER_NOT_AUTHENTICATED, router]);

  useEffect(() => {
    if (!USER_NOT_AUTHENTICATED && essayId) {
      const storedEssays = localStorage.getItem("essays");
      if (storedEssays) {
        const essays: Essay[] = JSON.parse(storedEssays);
        const currentEssay = essays.find((item) => item.id === essayId) || null;
        setEssay(currentEssay);

        if (currentEssay) {
          setUniversity(currentEssay.university || "");
          setEssayPrompt(currentEssay.essay_prompt || "");
          setIsEmpowerEnabled(
            !!(currentEssay.university || currentEssay.essay_prompt)
          );
        }
      } else {
        setEssay(null);
      }
      setLoadingEssay(false);
    }
  }, [essayId, USER_NOT_AUTHENTICATED]);

  const handleEditorChange = useCallback(
    (editorState: EditorState) => {
      if (!essayId) return;

      setCurrentEditorState(editorState);

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

  const handleGenerateFeedback = useCallback(async () => {
    if (isLoadingFeedback) return;

    try {
      setIsLoadingFeedback(true);
      setFeedback(null);

      const editorStateToUse: EditorState | null = currentEditorState;

      // If no current state, try to get from saved essay
      if (!editorStateToUse && essay?.editorState) {
        // We need to parse the serialized state
        // For now, we'll use currentEditorState which should be available
        // If not, we'll need to create a temporary editor to parse it
        // For simplicity, let's require the user to have the editor loaded
      }

      if (!editorStateToUse) {
        alert(
          "Please wait for the editor to load or write some content first."
        );
        setIsLoadingFeedback(false);
        return;
      }

      const essayText = extractTextFromEditorState(editorStateToUse);

      if (!essayText.trim()) {
        setIsLoadingFeedback(false);
        return;
      }

      // Use saved values from essay or empty strings
      const essayPromptValue = essay?.essay_prompt || "";
      const universityValue = essay?.university || "";

      const response = await refinerService.getfeedback({
        essay: essayText,
        essay_prompt: essayPromptValue,
        question: "",
        school: universityValue,
      });

      setFeedback(response.feedback);
    } catch (error) {
      console.error("Error generating feedback:", error);
      alert("Failed to generate feedback. Please try again.");
    } finally {
      setIsLoadingFeedback(false);
    }
  }, [currentEditorState, essay, isLoadingFeedback]);

  const saveEmpowerValues = useCallback(
    (universityValue: string, essayPromptValue: string) => {
      if (!essayId) return;

      if (empowerSaveTimeoutRef.current) {
        clearTimeout(empowerSaveTimeoutRef.current);
      }

      empowerSaveTimeoutRef.current = setTimeout(() => {
        try {
          const storedEssays = localStorage.getItem("essays");
          const essays: Essay[] = storedEssays ? JSON.parse(storedEssays) : [];

          const existingEssayIndex = essays.findIndex((e) => e.id === essayId);

          if (existingEssayIndex >= 0) {
            essays[existingEssayIndex] = {
              ...essays[existingEssayIndex],
              university: universityValue || undefined,
              essay_prompt: essayPromptValue || undefined,
            };
          }

          localStorage.setItem("essays", JSON.stringify(essays));
          const updatedEssay = essays.find((e) => e.id === essayId) || null;
          setEssay(updatedEssay);
        } catch (error) {
          console.error("error saving empower values:", error);
        }
      }, 500);
    },
    [essayId]
  );

  // Handle university change
  const handleUniversityChange = useCallback(
    (value: string) => {
      setUniversity(value);
      if (isEmpowerEnabled) {
        saveEmpowerValues(value, essayPrompt);
      }
    },
    [isEmpowerEnabled, essayPrompt, saveEmpowerValues]
  );

  // Handle essay prompt change
  const handleEssayPromptChange = useCallback(
    (value: string) => {
      setEssayPrompt(value);
      if (isEmpowerEnabled) {
        saveEmpowerValues(university, value);
      }
    },
    [isEmpowerEnabled, university, saveEmpowerValues]
  );

  // Handle empower toggle
  const handleEmpowerToggle = useCallback(
    (enabled: boolean) => {
      setIsEmpowerEnabled(enabled);

      if (enabled) {
        // Save current values when enabling
        saveEmpowerValues(university, essayPrompt);
      } else {
        // Clear values when disabling
        if (essayId) {
          const storedEssays = localStorage.getItem("essays");
          const essays: Essay[] = storedEssays ? JSON.parse(storedEssays) : [];

          const existingEssayIndex = essays.findIndex((e) => e.id === essayId);

          if (existingEssayIndex >= 0) {
            essays[existingEssayIndex] = {
              ...essays[existingEssayIndex],
              university: undefined,
              essay_prompt: undefined,
            };
            localStorage.setItem("essays", JSON.stringify(essays));
            const updatedEssay = essays.find((e) => e.id === essayId) || null;
            setEssay(updatedEssay);
          }
        }
        setUniversity("");
        setEssayPrompt("");
      }
    },
    [essayId, university, essayPrompt, saveEmpowerValues]
  );

  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
      if (empowerSaveTimeoutRef.current) {
        clearTimeout(empowerSaveTimeoutRef.current);
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
    <div className="min-h-full flex bg-gray-50 p-6">
      <div className="flex-2">
        <div className="flex justify-end mt-4 mr-4 mb-4">
          <EmpowerSwitch
            checked={isEmpowerEnabled}
            onChange={handleEmpowerToggle}
          />

          <GetFeedbackButton
            onClick={handleGenerateFeedback}
            isLoading={isLoadingFeedback}
          />
        </div>
        {isEmpowerEnabled && (
          <div className="empower-essay-fade-in">
            <EmpowerEssayInfos
              university={university}
              essayPrompt={essayPrompt}
              onUniversityChange={handleUniversityChange}
              onEssayPromptChange={handleEssayPromptChange}
            />
          </div>
        )}
        <EssayEditor
          initialState={getInitialState()}
          onChange={handleEditorChange}
        />
      </div>
      <div className="flex-1 h-[78vh]">
        <EssayReview
          feedback={feedback}
          isLoadingFeedback={isLoadingFeedback}
          essay={
            currentEditorState
              ? extractTextFromEditorState(currentEditorState)
              : ""
          }
          essayPrompt={essay?.essay_prompt || ""}
          school={essay?.university || ""}
        />
      </div>
    </div>
  );
}
