import { CSSProperties } from "react";

export type IIconProps = {
  height?: string;
  width?: string;
  fill?: string;
  style?: CSSProperties;
  className?: string;
};

export type Nullable<T> = T | null | undefined;

export enum ROUTE {
  BUSCAR_EMPRESA = "buscar-empresa",
}
