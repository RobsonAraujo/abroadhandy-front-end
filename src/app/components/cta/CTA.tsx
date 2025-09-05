import { ReactNode } from "react";
import Button from "@/app/components/button/Button";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";

export interface CTAProps {
  title?: string;
  description?: string;
  primaryButton?: {
    href: string;
    text: string;
    variant?:
      | "primary"
      | "secondary"
      | "accent"
      | "success"
      | "error"
      | "purple"
      | "white"
      | "outline";
    icon?: ReactNode;
  };
  secondaryButton?: {
    href: string;
    text: string;
    variant?:
      | "primary"
      | "secondary"
      | "accent"
      | "success"
      | "error"
      | "purple"
      | "white"
      | "outline";
    className?: string;
  };
  backgroundColor?:
    | "secondary"
    | "primary"
    | "accent"
    | "success"
    | "error"
    | "purple"
    | "white";
  className?: string;
}

export default function CTA({
  title = "Ready to Start Your Journey?",
  description = "Join thousands of students who are already working with expert mentors to achieve their university dreams.",
  primaryButton = {
    href: "/join",
    text: "Get Started Today",
    variant: "secondary",
    icon: <ArrowRightIcon className="w-5 h-5" />,
  },
  secondaryButton = {
    href: "/mentors",
    text: "Browse Mentors",
    variant: "outline",
    className: "border-white text-white hover:bg-white hover:text-secondary",
  },
  backgroundColor = "secondary",
  className = "",
}: CTAProps) {
  const backgroundClasses = {
    secondary: "bg-secondary",
    primary: "bg-primary",
    accent: "bg-accent",
    success: "bg-success",
    error: "bg-error",
    purple: "bg-purple",
    white: "bg-white",
  };

  const textColorClasses = {
    secondary: "text-white",
    primary: "text-black",
    accent: "text-white",
    success: "text-black",
    error: "text-white",
    purple: "text-white",
    white: "text-black",
  };

  const descriptionColorClasses = {
    secondary: "text-blue-100",
    primary: "text-gray-600",
    accent: "text-white/80",
    success: "text-gray-600",
    error: "text-white/80",
    purple: "text-white/80",
    white: "text-gray-600",
  };

  // Auto-assign button variants based on background color
  const getDefaultPrimaryVariant = () => {
    switch (backgroundColor) {
      case "secondary":
        return "secondary";
      case "primary":
        return "primary";
      case "accent":
        return "accent";
      case "success":
        return "success";
      case "error":
        return "error";
      case "purple":
        return "purple";
      case "white":
        return "primary";
      default:
        return "secondary";
    }
  };

  const getDefaultSecondaryVariant = () => {
    switch (backgroundColor) {
      case "secondary":
        return "outline";
      case "primary":
        return "outline";
      case "accent":
        return "outline";
      case "success":
        return "outline";
      case "error":
        return "outline";
      case "purple":
        return "outline";
      case "white":
        return "outline";
      default:
        return "outline";
    }
  };

  const getDefaultSecondaryClassName = () => {
    switch (backgroundColor) {
      case "secondary":
        return "border-white text-white hover:bg-white hover:text-secondary";
      case "primary":
        return "border-primary text-primary hover:bg-primary hover:text-white";
      case "accent":
        return "border-white text-white hover:bg-white hover:text-accent";
      case "success":
        return "border-success text-success hover:bg-success hover:text-white";
      case "error":
        return "border-white text-white hover:bg-white hover:text-error";
      case "purple":
        return "border-white text-white hover:bg-white hover:text-purple";
      case "white":
        return "border-secondary text-secondary hover:bg-secondary hover:text-white";
      default:
        return "border-white text-white hover:bg-white hover:text-secondary";
    }
  };

  // Use provided variant or auto-assign based on background
  const finalPrimaryButton = {
    ...primaryButton,
    variant: primaryButton.variant || (getDefaultPrimaryVariant() as any),
  };

  const finalSecondaryButton = secondaryButton
    ? {
        ...secondaryButton,
        variant:
          secondaryButton.variant || (getDefaultSecondaryVariant() as any),
        className: secondaryButton.className || getDefaultSecondaryClassName(),
      }
    : null;

  return (
    <section
      className={`py-16 ${backgroundClasses[backgroundColor]} ${className}`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            className={`text-3xl font-bold lg:text-4xl ${textColorClasses[backgroundColor]}`}
          >
            {title}
          </h2>
          <p
            className={`mt-4 text-lg ${descriptionColorClasses[backgroundColor]}`}
          >
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              href={finalPrimaryButton.href}
              variant={finalPrimaryButton.variant}
              size="lg"
              iconEnd={finalPrimaryButton.icon}
            >
              {finalPrimaryButton.text}
            </Button>
            {finalSecondaryButton && (
              <Button
                href={finalSecondaryButton.href}
                variant={finalSecondaryButton.variant}
                size="lg"
                className={finalSecondaryButton.className}
              >
                {finalSecondaryButton.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
