import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import theme from "@/theme";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Abroad Handy",
    default: "Abroad Handy",
  },
  description:
    "Conecte-se com mentores experientes para suas aplicações universitárias no exterior. Receba orientação personalizada e maximize suas chances de admissão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />

        <StyledEngineProvider injectFirst>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <Header />
              <div className="px-[160px] max-md:px-4 ">{children}</div>
              <Footer />
            </ThemeProvider>
          </AppRouterCacheProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
