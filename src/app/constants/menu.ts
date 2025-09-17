export interface MenuItem {
  href: string;
  label: string;
  isCTA?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    href: "/mentors",
    label: "Find Mentors",
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
