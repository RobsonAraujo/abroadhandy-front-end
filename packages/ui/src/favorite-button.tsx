"use client";

import * as React from "react";
import { Heart } from "lucide-react";
import { cn } from "./utils/cn";

export interface FavoriteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isFavorited?: boolean;
  size?: "sm" | "md" | "lg";
}

const FavoriteButton = React.forwardRef<HTMLButtonElement, FavoriteButtonProps>(
  ({ className, isFavorited = false, size = "md", ...props }, ref) => {
    const [isFav, setIsFav] = React.useState(isFavorited);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsFav(!isFav);
      props.onClick?.(e);
    };

    const sizeClasses = {
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12",
    };

    const iconSizes = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "cursor-pointer rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex items-center justify-center group",
          sizeClasses[size],
          className
        )}
        onClick={handleClick}
        {...props}
      >
        <Heart
          className={cn(
            iconSizes[size],
            "transition-all duration-300 ease-out stroke-2",
            isFav
              ? "text-red-500 fill-red-500 scale-110"
              : "text-red-500 fill-transparent hover:scale-110 group-hover:fill-red-100"
          )}
        />
      </button>
    );
  }
);

FavoriteButton.displayName = "FavoriteButton";

export { FavoriteButton };
