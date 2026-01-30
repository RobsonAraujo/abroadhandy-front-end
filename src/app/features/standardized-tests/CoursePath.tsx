"use client";

import Link from "next/link";
import { Lock } from "lucide-react";
import type { PathNode } from "./curriculum";

interface CoursePathProps {
  nodes: PathNode[];
  basePath: string;
}

export default function CoursePath({ nodes, basePath }: CoursePathProps) {
  return (
    <div className="relative pl-5 sm:pl-6">
      {/* Vertical line connector - aligned with circle centers */}
      <div
        className="absolute left-5 top-5 bottom-5 w-px bg-gray-200 sm:left-6"
        aria-hidden
      />

      <ul className="relative flex flex-col gap-0">
        {nodes.map((node, index) => {
          const isActive = !node.locked;
          const href =
            node.slug && isActive
              ? `${basePath}/${node.slug}`
              : undefined;

          const nodeContent = (
            <>
              <div
                className={`relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 sm:h-12 sm:w-12 ${
                  isActive
                    ? "border-secondary bg-secondary text-white"
                    : "border-gray-300 bg-gray-100 text-gray-400"
                }`}
              >
                {node.locked ? (
                  <Lock className="h-4 w-4 sm:h-5 sm:w-5" />
                ) : (
                  <span className="text-sm font-semibold sm:text-base">
                    {index + 1}
                  </span>
                )}
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <p
                  className={`font-medium ${
                    isActive ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  {node.title}
                </p>
                {node.subtitle && (
                  <p className="mt-0.5 text-sm text-gray-500">
                    {node.subtitle}
                  </p>
                )}
                {node.locked && (
                  <p className="mt-1 text-xs text-gray-400">
                    Complete previous step
                  </p>
                )}
              </div>
            </>
          );

          return (
            <li
              key={node.id}
              className={`flex items-start gap-4 py-4 sm:gap-5 sm:py-5 ${
                node.locked ? "opacity-60" : ""
              }`}
            >
              {href ? (
                <Link
                  href={href}
                  className="flex w-full items-start gap-4 rounded-lg transition-colors hover:bg-gray-50 sm:gap-5 sm:px-3 sm:py-1 sm:-my-1"
                  aria-label={`Go to ${node.title}`}
                >
                  {nodeContent}
                </Link>
              ) : (
                <div
                  className="flex w-full cursor-not-allowed items-start gap-4 sm:gap-5"
                  aria-disabled="true"
                >
                  {nodeContent}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
