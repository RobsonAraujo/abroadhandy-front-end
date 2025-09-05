import { ReactNode } from "react";
import Link from "next/link";

export interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "error"
    | "purple"
    | "white"
    | "outline";
  hoverVariant?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "error"
    | "purple"
    | "white"
    | "outline";
  hoverTextColor?: "black" | "white";
  color?:
    | "black"
    | "white"
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "error"
    | "purple";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
}

const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  hoverVariant,
  hoverTextColor,
  color,
  size = "md",
  className = "",
  disabled = false,
  iconStart,
  iconEnd,
  type = "button",
  target,
  rel,
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: "bg-primary text-black focus:ring-primary/50",
    secondary: "bg-secondary text-white focus:ring-secondary/50",
    accent: "bg-accent text-white focus:ring-accent/50",
    success: "bg-success text-black focus:ring-success/50",
    error: "bg-error text-white focus:ring-error/50",
    purple: "bg-purple text-white focus:ring-purple/50",
    white: "bg-white text-black focus:ring-white/50",
    outline:
      "border-2 border-secondary text-secondary bg-transparent focus:ring-secondary/50",
  };

  const hoverClasses = {
    primary: "hover:bg-primary/90",
    secondary: "hover:bg-secondary/90",
    accent: "hover:bg-accent/90",
    success: "hover:bg-success/90",
    error: "hover:bg-error/90",
    purple: "hover:bg-purple/90",
    white: "hover:bg-gray-100",
    outline: "hover:bg-secondary hover:text-white",
  };

  const hoverTextClasses = {
    black: "hover:text-black",
    white: "hover:text-white",
  };

  const colorClasses = {
    black: "text-black",
    white: "text-white",
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    success: "text-success",
    error: "text-error",
    purple: "text-purple",
  };

  const getHoverClass = () => {
    if (hoverVariant) {
      return hoverClasses[hoverVariant];
    }
    return hoverClasses[variant];
  };

  const getHoverTextClass = () => {
    if (hoverTextColor) {
      return hoverTextClasses[hoverTextColor];
    }
    return "";
  };

  const getColorClass = () => {
    if (color) {
      return colorClasses[color];
    }
    return "";
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const iconSpacing = iconStart || iconEnd ? "gap-2" : "";

  const buttonClasses = `${baseClasses} ${
    variantClasses[variant]
  } ${getHoverClass()} ${getHoverTextClass()} ${getColorClass()} ${
    sizeClasses[size]
  } ${iconSpacing} ${className}`;

  const buttonContent = (
    <>
      {iconStart && <span className="flex-shrink-0">{iconStart}</span>}
      <span>{children}</span>
      {iconEnd && <span className="flex-shrink-0">{iconEnd}</span>}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
