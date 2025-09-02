"use client";

import { Typography } from "@mui/material";
import Warehouse from "@/app/icons/Warehouse";

interface TitleItemProps {
  title: string;
}

export default function TitleItem({ title }: TitleItemProps) {
  return (
    <>
      <div className="flex items-center">
        <Warehouse />
        <Typography marginLeft={1} variant="titleSmall" fontWeight="bold">
          {title}
        </Typography>
      </div>
    </>
  );
}
