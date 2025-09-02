/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";

import { Inter } from "next/font/google";
import { Palette, createTheme } from "@mui/material/styles";
interface ICustomPalette {
  light: Palette["primary"];
  lightest: Palette["primary"];
  black: Palette["primary"];
  darkGrey: Palette["primary"];
  lightGrey: Palette["primary"];
  defaultGrey: Palette["primary"];
  golden: Palette["primary"];
}

interface ICustomPaletteOverride {
  light: true;
  lightest: true;
  black: true;
  darkGrey: true;
  lightGrey: true;
  defaultGrey: true;
  golden: true;
}

interface ICustomTypography {
  title: React.CSSProperties;
  hero: React.CSSProperties;
  titleSmall: React.CSSProperties;
}
interface ITypographyVariantOverrides {
  title: true;
  hero: true;
  titleSmall: true;
}

declare module "@mui/material/styles" {
  // Palette
  interface Palette extends ICustomPalette {}
  interface PaletteOptions extends Partial<ICustomPalette> {}

  // Typography
  interface TypographyVariants extends ICustomTypography {}
  interface TypographyVariantsOptions extends Partial<ICustomTypography> {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides extends ICustomPaletteOverride {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsColorOverrides extends ICustomPaletteOverride {}
  interface TypographyPropsVariantOverrides
    extends ITypographyVariantOverrides {}
}

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

let theme = createTheme({});

theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
    hero: {
      fontSize: "44px",
      fontWeight: "normal",
      lineHeight: "80px",
      fontFamily: inter.style.fontFamily,
      color: "#1F2937",
    },
    title: {
      fontSize: "32px",
      fontWeight: "normal",
      lineHeight: "40px",
      fontFamily: inter.style.fontFamily,
      color: "#1F2937",
    },
    titleSmall: {
      fontSize: "20px",
      fontWeight: "normal",
      lineHeight: "40px",
      fontFamily: inter.style.fontFamily,
      color: "#1F2937",
    },
    body1: {
      fontSize: "14px",
      fontWeight: "normal",
      lineHeight: "22px",
      color: "#1F2937",
    },
    body2: {
      fontSize: "14px",
      fontWeight: "bold",
      lineHeight: "22px",
      color: "#1F2937",
    },
    overline: {
      fontSize: "11px",
      fontWeight: "normal",
      lineHeight: "22px",
      color: "#1F2937",
      textTransform: "none",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          hero: "h1",
          title: "h2",
          titleSmall: "h3",
        },
      },
    },
  },

  palette: {
    primary: {
      main: "#1E40AF",
    },
    secondary: {
      main: "#059669",
    },
    text: {
      primary: "#1F2937",
    },
    light: theme.palette.augmentColor({
      color: {
        main: "#DBEAFE",
      },
      name: "light",
    }),
    lightest: theme.palette.augmentColor({
      color: {
        main: "#F0F9FF",
      },
      name: "lightest",
    }),
    black: theme.palette.augmentColor({
      color: {
        main: "#1F2937",
      },
      name: "black",
    }),
    defaultGrey: theme.palette.augmentColor({
      color: {
        main: "#6B7280",
      },
      name: "defaultGrey",
    }),
    lightGrey: theme.palette.augmentColor({
      color: {
        main: "#E5E7EB",
      },
      name: "lightGrey",
    }),
    darkGrey: theme.palette.augmentColor({
      color: {
        main: "#4B5563",
      },
      name: "darkGrey",
    }),
    golden: theme.palette.augmentColor({
      color: {
        main: "#D97706",
      },
      name: "golden",
    }),
  },
});

export default theme;
