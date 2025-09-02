import { Button as MUIButton, ButtonProps } from "@mui/material";

interface IButtonCustom extends ButtonProps {
  children: React.ReactNode;
}

export default function Button(props: IButtonCustom) {
  const { children, sx } = props;
  return (
    <MUIButton
      sx={{ ...sx, boxShadow: "none", textTransform: "initial" }}
      {...props}
    >
      {children}
    </MUIButton>
  );
}
