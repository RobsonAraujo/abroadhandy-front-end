"use client";

import Link from "next/link";
import { Lock, CheckCircle2 } from "lucide-react";
import type { PathNode } from "./curriculum";

interface CoursePathProps {
  nodes: PathNode[];
  basePath: string;
}

export default function CoursePath({ nodes, basePath }: CoursePathProps) {
  return (
    <div className="relative w-full">
      {/* Vertical line connector */}
      <div
        className="absolute left-8 top-8 bottom-8 w-1 rounded-full bg-gray-200 sm:left-10"
        aria-hidden
      />

      <div className="space-y-6">
        {nodes.map((node, index) => {
          const isActive = !node.locked;
          const isCompleted = false; // TODO: track completion
          const href =
            node.slug && isActive ? `${basePath}/${node.slug}` : undefined;

          return (
            <div key={node.id} className="relative flex items-start gap-4">
              {/* Circle node */}
              <div className="relative z-10 flex-shrink-0">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full  shadow-lg transition-all sm:h-20 sm:w-20 ${
                    isCompleted
                      ? "bg-green-500"
                      : isActive
                        ? "bg-gradient-to-br from-slate-900 via-slate-800 to-black  ring-2 ring-cyan-400 "
                        : "bg-gray-300 border-4 border-white"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-8 w-8 text-white sm:h-10 sm:w-10" />
                  ) : isActive ? (
                    <span className="text-xl font-bold text-white sm:text-2xl">
                      {index + 1}
                    </span>
                  ) : (
                    <Lock className="h-6 w-6 text-gray-500 sm:h-7 sm:w-7" />
                  )}
                </div>
              </div>

              {/* Content card */}
              <div className="flex-1 pt-1">
                {href ? (
                  <Link
                    href={href}
                    className="block rounded-2xl border-2 border-gray-200 bg-white p-5 shadow-md transition-all hover:border-cyan-400 hover:shadow-lg sm:p-6"
                    aria-label={`Go to ${node.title}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        {node.subtitle && (
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                            {node.subtitle}
                          </p>
                        )}
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                          {node.title}
                        </h3>
                      </div>
                      {isActive && (
                        <div className="flex-shrink-0">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-black  text-white sm:h-10 sm:w-10">
                            <svg
                              className="h-5 w-5 sm:h-6 sm:w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                ) : (
                  <div
                    className="block rounded-2xl border-2 border-gray-200 bg-gray-50 p-5 opacity-60 sm:p-6"
                    aria-disabled="true"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        {node.subtitle && (
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                            {node.subtitle}
                          </p>
                        )}
                        <h3 className="text-lg font-bold text-gray-500 sm:text-xl">
                          {node.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-400">
                          Complete previous step to unlock
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
