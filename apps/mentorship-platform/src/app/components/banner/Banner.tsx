import { ReactNode } from "react";
import { Button } from "@/app/components/ui/button";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";

export interface BannerProps {
  title?: string;
  description?: string;
  primaryButton?: {
    href: string;
    text: string;
    variant?:
      | "primary"
      | "secondary"
      | "black"
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
      | "black"
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
    | "black"
    | "success"
    | "error"
    | "purple"
    | "white"
    | string;
  className?: string;
}

export default function Banner({
  title = "Ready to Start Your Journey?",
  description = "Join students who are already working with top students from leading universities to achieve their university dreams.",
  primaryButton = {
    href: "/join",
    text: "Get Started Today",
    variant: "secondary",
    icon: <ArrowRightIcon className="w-5 h-5" />,
  },
  secondaryButton = {
    href: "/mentors",
    text: "Browse Top Mentors",
    variant: "outline",
    className: "border-white text-white hover:bg-white hover:text-secondary",
  },
  backgroundColor = "secondary",
  className = "",
}: BannerProps) {
  const backgroundClasses = {
    secondary: "bg-secondary",
    primary: "bg-primary",
    black: "bg-black",
    success: "bg-success",
    error: "bg-error",
    purple: "bg-purple",
    white: "bg-white",
  };

  const getBackgroundClass = () => {
    if (
      backgroundColor &&
      backgroundClasses[backgroundColor as keyof typeof backgroundClasses]
    ) {
      return backgroundClasses[
        backgroundColor as keyof typeof backgroundClasses
      ];
    }
    if (backgroundColor && backgroundColor.startsWith("#")) {
      return "";
    }
    return backgroundClasses.secondary;
  };

  const getBackgroundStyle = () => {
    if (backgroundColor && backgroundColor.startsWith("#")) {
      return { backgroundColor };
    }
    return {};
  };

  const textColorClasses = {
    secondary: "text-white",
    primary: "text-black",
    black: "text-white",
    success: "text-black",
    error: "text-white",
    purple: "text-white",
    white: "text-black",
  };

  const descriptionColorClasses = {
    secondary: "text-blue-100",
    primary: "text-gray-600",
    black: "text-white/80",
    success: "text-gray-600",
    error: "text-white/80",
    purple: "text-white/80",
    white: "text-gray-600",
  };

  const getTextColorClass = () => {
    if (backgroundColor && backgroundColor.startsWith("#")) {
      return "text-white";
    }
    if (
      backgroundColor &&
      textColorClasses[backgroundColor as keyof typeof textColorClasses]
    ) {
      return textColorClasses[backgroundColor as keyof typeof textColorClasses];
    }
    return textColorClasses.secondary;
  };

  const getDescriptionColorClass = () => {
    if (backgroundColor && backgroundColor.startsWith("#")) {
      return "text-white/80";
    }
    if (
      backgroundColor &&
      descriptionColorClasses[
        backgroundColor as keyof typeof descriptionColorClasses
      ]
    ) {
      return descriptionColorClasses[
        backgroundColor as keyof typeof descriptionColorClasses
      ];
    }
    return descriptionColorClasses.secondary;
  };

  // Auto-assign button variants based on background color
  const getDefaultPrimaryVariant = ():
    | "primary"
    | "secondary"
    | "black"
    | "success"
    | "error"
    | "purple"
    | "white"
    | "outline" => {
    if (backgroundColor && backgroundColor.startsWith("#")) {
      return "white";
    }
    switch (backgroundColor) {
      case "secondary":
        return "secondary";
      case "primary":
        return "primary";
      case "black":
        return "primary";
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

  const getDefaultSecondaryVariant = ():
    | "primary"
    | "secondary"
    | "black"
    | "success"
    | "error"
    | "purple"
    | "white"
    | "outline" => {
    return "outline";
  };

  const getDefaultSecondaryClassName = () => {
    if (backgroundColor && backgroundColor.startsWith("#")) {
      return `border-white text-white hover:bg-white hover:text-[${backgroundColor}]`;
    }
    switch (backgroundColor) {
      case "secondary":
        return "border-white text-white hover:bg-white hover:text-secondary";
      case "primary":
        return "border-primary text-primary hover:bg-primary hover:text-white";
      case "black":
        return "border-white text-white hover:bg-white hover:text-black";
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
    variant: primaryButton.variant || getDefaultPrimaryVariant(),
  };

  const finalSecondaryButton = secondaryButton
    ? {
        ...secondaryButton,
        variant: secondaryButton.variant || getDefaultSecondaryVariant(),
        className: secondaryButton.className || getDefaultSecondaryClassName(),
      }
    : null;

  return (
    <section
      className={`py-16 ${getBackgroundClass()} ${className}`}
      style={getBackgroundStyle()}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            className={`text-3xl font-bold lg:text-4xl ${getTextColorClass()}`}
          >
            {title}
          </h2>
          <p className={`mt-4 text-lg ${getDescriptionColorClass()}`}>
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
