import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./contexts/AuthContext";
import HeaderWrapper from "./components/header/HeaderWrapper";
import FooterWrapper from "./components/footer/FooterWrapper";
import { Toaster } from "./components/ui/sonner";

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
    "Connect with top students from leading universities for your university applications abroad. Receive personalized guidance and maximize your admission chances.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo-500x500.png",
  },
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

        <AuthProvider>
          <HeaderWrapper />
          {children}
          <FooterWrapper />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
