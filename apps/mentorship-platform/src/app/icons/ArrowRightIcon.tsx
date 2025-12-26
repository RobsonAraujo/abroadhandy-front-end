import { IIconProps } from "@/app/types/generic";

const ArrowRightIcon = ({
  height,
  width,
  fill,
  style,
  className,
}: IIconProps) => (
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
      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
      stroke={fill || "currentColor"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowRightIcon;
