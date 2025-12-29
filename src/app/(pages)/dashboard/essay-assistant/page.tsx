"use client";

import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Trash2, Pencil, Check, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/app/components/ui/dialog";
import { SerializedEditorState } from "lexical";

export type Essay = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  editorState?: SerializedEditorState; // Opcional para compatibilidade com essays antigas
};

export default function EssayAssistant() {
  const { isAuthenticated, user, isLoading } = useAuth();
  const router = useRouter();

  const [essays, setEssays] = useState<Essay[]>([]);
  const [loadingEssays, setLoadingEssays] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [essayToDelete, setEssayToDelete] = useState<string | null>(null);
  const [editingEssayId, setEditingEssayId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState<string>("");

  const USER_NOT_AUTHENTICATED = !isLoading && !isAuthenticated;

  useEffect(() => {
    if (USER_NOT_AUTHENTICATED) {
      router.push("/");
    }
  }, [USER_NOT_AUTHENTICATED, router]);

  useEffect(() => {
    if (!USER_NOT_AUTHENTICATED) {
      const storedEssays = localStorage.getItem("essays");
      if (storedEssays) {
        setEssays(JSON.parse(storedEssays));
      }
      setLoadingEssays(false);
    }
  }, [USER_NOT_AUTHENTICATED]);

  const handleNewEssay = () => {
    const newEssay: Essay = {
      id: Date.now().toString(),
      title: `New Essay ${essays.length + 1}`,
      createdAt: new Date().toISOString().split("T")[0],
      body: "",
    };

    const updatedEssays = [newEssay, ...essays];
    setEssays(updatedEssays);
    localStorage.setItem("essays", JSON.stringify(updatedEssays));
    router.push(`/dashboard/essay-assistant/${newEssay.id}`);
  };

  const confirmDeleteEssay = (id: string) => {
    setEssayToDelete(id);
    setDeleteModalOpen(true);
  };

  const handleDeleteEssay = () => {
    if (!essayToDelete) return;
    const updatedEssays = essays.filter((essay) => essay.id !== essayToDelete);
    setEssays(updatedEssays);
    localStorage.setItem("essays", JSON.stringify(updatedEssays));
    setEssayToDelete(null);
    setDeleteModalOpen(false);
  };

  const handleStartEdit = (essay: Essay, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setEditingEssayId(essay.id);
    setEditingTitle(essay.title);
  };

  const handleSaveTitle = (essayId: string) => {
    if (!editingTitle.trim()) {
      setEditingEssayId(null);
      return;
    }

    const updatedEssays = essays.map((essay) =>
      essay.id === essayId ? { ...essay, title: editingTitle.trim() } : essay
    );
    setEssays(updatedEssays);
    localStorage.setItem("essays", JSON.stringify(updatedEssays));
    setEditingEssayId(null);
    setEditingTitle("");
  };

  const handleCancelEdit = () => {
    setEditingEssayId(null);
    setEditingTitle("");
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    essayId: string
  ) => {
    if (e.key === "Enter") {
      handleSaveTitle(essayId);
    } else if (e.key === "Escape") {
      handleCancelEdit();
    }
  };

  if (isLoading || loadingEssays) {
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Essays</h1>
        <Button onClick={handleNewEssay} variant="secondary">
          Create New Essay
        </Button>
      </div>

      {essays.length === 0 ? (
        <div className="text-gray-600">
          You haven’t created any essays yet. Click “New Essay” to get started!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {essays.map((essay) => (
            <div
              key={essay.id}
              className="relative bg-white rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <Link
                href={`/dashboard/essay-assistant/${essay.id}`}
                className="block"
              >
                {editingEssayId === essay.id ? (
                  <div className="flex items-center gap-2 mb-1">
                    <Input
                      value={editingTitle}
                      onChange={(e) => setEditingTitle(e.target.value)}
                      onBlur={() => handleSaveTitle(essay.id)}
                      onKeyDown={(e) => handleKeyDown(e, essay.id)}
                      className="text-md font-semibold h-8 px-2 py-1"
                      autoFocus
                      onClick={(e) => e.stopPropagation()}
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleSaveTitle(essay.id);
                      }}
                      className="h-8 w-8 p-0 text-green-600 hover:text-green-700 hover:bg-green-50"
                    >
                      <Check size={16} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleCancelEdit();
                      }}
                      className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                    >
                      <X size={16} />
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 mb-1 group">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => handleStartEdit(essay, e)}
                      className="h-6 w-6 p-0 text-gray-400  group-hover:opacity-100 hover:text-gray-600 transition-opacity"
                    >
                      <Pencil size={14} />
                    </Button>
                    <h3 className="text-md font-semibold text-gray-900 flex-1">
                      {essay.title}
                    </h3>
                  </div>
                )}
                <p className="text-gray-500 text-sm">
                  Created on {essay.createdAt}
                </p>
              </Link>

              {!editingEssayId && (
                <Button
                  variant="ghost"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    confirmDeleteEssay(essay.id);
                  }}
                  className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                >
                  <Trash2 size={18} />
                </Button>
              )}
            </div>
          ))}
        </div>
      )}

      <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Essay</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this essay? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-end gap-2">
            <Button variant="white" onClick={() => setDeleteModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="error" onClick={handleDeleteEssay}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
