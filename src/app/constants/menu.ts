export interface MenuItem {
  href: string;
  label: string;
  isCTA?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    href: "/find-top-students",
    label: "Find Top Students",
  },
  {
    href: "/become-a-mentor",
    label: "Become a Mentor",
  },
  {
    href: "/about-us",
    label: "About Us",
  },
  {
    href: "/join",
    label: "Get Started",
    isCTA: true,
  },
];
