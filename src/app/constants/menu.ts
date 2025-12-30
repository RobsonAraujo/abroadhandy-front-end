export interface MenuItem {
  href: string;
  label: string;
  isCTA?: boolean;
  hasIcon?: boolean;
  isHighlighted?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    href: "/essay-ai",
    label: "EssayAI",
    hasIcon: true,
    isHighlighted: true,
  },
  // {
  //   href: "/mentors",
  //   label: "Find Mentors",
  // },
  {
    href: "/how-it-works",
    label: "How It Works",
  },
  {
    href: "/register",
    label: "Get Started",
    isCTA: true,
  },
];
