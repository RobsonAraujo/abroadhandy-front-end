import { IIconProps } from "@/app/types/generic";

const CloseIcon = ({ height, width, fill, style, className }: IIconProps) => (
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
      d="M18 6L6 18M6 6L18 18"
      stroke={fill || "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloseIcon;
