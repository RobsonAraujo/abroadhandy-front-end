import { CSSProperties } from "react";

type HideOnMobileProps = {
  children: React.ReactNode;
  style?: CSSProperties;
  fullWidth?: boolean;
};

export default function HideOnMobile({
  children,
  style,
  fullWidth,
}: HideOnMobileProps) {
  return (
    <div
      style={{ width: fullWidth ? "100%" : style?.width, ...style }}
      className="max-md:hidden"
    >
      {children}
    </div>
  );
}
