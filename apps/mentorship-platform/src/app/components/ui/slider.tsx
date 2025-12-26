"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/app/utils/cn";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-3 w-full grow overflow-hidden rounded-full bg-gray-200 shadow-inner">
      <SliderPrimitive.Range className="absolute h-full bg-secondary shadow-sm" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-8 w-6 rounded-md border-2 border-secondary bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30 focus-visible:scale-110 disabled:pointer-events-none disabled:opacity-50 cursor-pointer relative" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
