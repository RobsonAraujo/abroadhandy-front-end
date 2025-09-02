import { CSSProperties } from "react";

type HideOnDesktopProps = {
  children: React.ReactNode;
  style?: CSSProperties;
  fullWidth?: boolean;
};

export default function HideOnDesktop({
  children,
  style,
  fullWidth,
}: HideOnDesktopProps) {
  return (
    <div
      style={{ width: fullWidth ? "100%" : style?.width, ...style }}
      className="md:hidden"
    >
      {children}
    </div>
  );
}
