import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

import { cn } from "@/app/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        primary:
          "bg-primary text-black focus-visible:ring-primary/50 hover:bg-primary/90",
        secondary:
          "bg-secondary text-white focus-visible:ring-secondary/50 hover:bg-secondary/90",
        black:
          "bg-black text-white focus-visible:ring-black/50 hover:bg-black/90",
        success:
          "bg-success text-black focus-visible:ring-success/50 hover:bg-success/90",
        error:
          "bg-error text-white focus-visible:ring-error/50 hover:bg-error/90",
        purple:
          "bg-purple text-white focus-visible:ring-purple/50 hover:bg-purple/90",
        white:
          "bg-white text-black focus-visible:ring-white/50 hover:bg-gray-100",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-secondary text-secondary bg-transparent focus-visible:ring-secondary/50 hover:bg-secondary hover:text-white",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-3 text-base",
        sm: "h-8 px-4 py-2 text-sm",
        md: "h-10 px-6 py-3 text-base",
        lg: "h-12 px-8 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  hoverVariant?: VariantProps<typeof buttonVariants>["variant"];
  hoverTextColor?: "black" | "white";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      href,
      target,
      rel,
      iconStart,
      iconEnd,
      hoverVariant,
      hoverTextColor,
      children,
      ...props
    },
    ref
  ) => {
    const buttonContent = (
      <>
        {iconStart && <span className="flex-shrink-0">{iconStart}</span>}
        <span className="w-full">{children}</span>
        {iconEnd && <span className="flex-shrink-0">{iconEnd}</span>}
      </>
    );

    // Create hover classes if hoverVariant is provided
    const hoverClasses = hoverVariant
      ? buttonVariants({ variant: hoverVariant, size })
          .split(" ")
          .filter((cls) => cls.startsWith("hover:"))
          .join(" ")
      : "";

    // Create hover text color class
    const hoverTextClasses = hoverTextColor
      ? `hover:text-${hoverTextColor}`
      : "";

    const buttonClasses = cn(
      buttonVariants({ variant, size, className }),
      hoverClasses,
      hoverTextClasses
    );

    if (href) {
      return (
        <Link
          href={href}
          className={buttonClasses}
          target={target}
          rel={rel}
          onClick={
            props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>
          }
        >
          {buttonContent}
        </Link>
      );
    }

    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={buttonClasses} ref={ref} {...props}>
        {buttonContent}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
