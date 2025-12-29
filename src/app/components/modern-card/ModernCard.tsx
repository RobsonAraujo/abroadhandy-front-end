import React from "react";

interface ModernCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: React.ReactNode;
  number?: string;
  disabled?: boolean;
  onClick?: () => void;
  color?: "violet" | "blue" | "green" | "orange" | "purple";
}

export default function ModernCard({
  title,
  description,
  icon,
  badge,
  number = "01",
  disabled = false,
  onClick,
  color = "violet",
}: ModernCardProps) {
  const colorClasses = {
    violet: "bg-violet-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    orange: "bg-orange-500",
    purple: "bg-purple-500",
  };

  return (
    <div
      className={`w-64 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden hover:shadow-[0px_0px_25px_rgba(0,0,0,0.15)] transition-shadow duration-300 ${
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"
      }`}
      onClick={!disabled ? onClick : undefined}
    >
      <div
        className={`w-24 h-24 ${colorClasses[color]} rounded-full absolute -right-5 -top-7`}
      >
        <p className="absolute bottom-6 left-7 text-white text-2xl font-bold">
          {number}
        </p>
      </div>
      <div className="fill-current text-gray-600 w-12">{icon}</div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">{title}</h1>
        {badge && badge}
      </div>
      <p className="text-sm text-zinc-500 leading-6">{description}</p>
    </div>
  );
}
