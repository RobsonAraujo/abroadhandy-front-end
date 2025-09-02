import { IIconProps } from "@/app/types/generic";

const Ray = ({ height, width, fill, style }: IIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill={fill || "none"}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.79183 15.1667L13.1043 10H9.771L10.3752 5.27084L6.521 10.8333H9.41683L8.79183 15.1667ZM6.66683 18.3333L7.50016 12.5H3.3335L10.8335 1.66667H12.5002L11.6668 8.33334H16.6668L8.3335 18.3333H6.66683Z" />
  </svg>
);

export default Ray;
