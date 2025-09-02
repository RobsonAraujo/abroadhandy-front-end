"use client";

import { ReactNode } from "react";
import Stack from "@mui/material/Stack";
import { CSSProperties } from "@mui/material";

interface PaperProps {
  children: ReactNode;
  spacing?: number;
  width?: string;
  style?: CSSProperties;
}

export default function Paper({
  children,
  spacing = 2,
  width = "352px",
  style,
}: PaperProps) {
  return (
    <div
      className="bg-[#F5F7F6] rounded-[12px] min-h-[370px] p-6"
      style={{ width, ...style }}
    >
      <Stack spacing={spacing}>{children}</Stack>
    </div>
  );
}
