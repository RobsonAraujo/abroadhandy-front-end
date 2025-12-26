import { IIconProps } from "@/app/types/generic";

const MenuIcon = ({ height, width, fill, style, className }: IIconProps) => (
  <svg
    width={width || "24"}
    height={height || "24"}
    viewBox="0 0 24 24"
    fill={fill || "none"}
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={className}
  >
    <path
      d="M4 8h16M4 16h16"
      stroke={fill || "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MenuIcon;
