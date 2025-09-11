import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/app/utils/cn";

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void;
  variant?: "default" | "secondary" | "outline";
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ className, children, onRemove, variant = "default", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200";

    const variantClasses = {
      default: "bg-blue-100 text-blue-800 hover:bg-blue-200",
      secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
      outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    };

    return (
      <div
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...props}
      >
        <span>{children}</span>
        {onRemove && (
          <button
            onClick={onRemove}
            className="ml-1 hover:bg-black/10 rounded-full p-0.5 transition-colors"
            type="button"
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>
    );
  }
);
Chip.displayName = "Chip";

export { Chip };
