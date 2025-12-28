import {
  CircleQuestionMark,
  User,
  Trophy,
  Sword,
  Building2,
} from "lucide-react";

interface Question {
  id: string;
  category: string;
  question: string;
  placeholder: string;
  icon: React.ReactNode;
}

export const questions: Question[] = [
  {
    id: "essay-context",
    category: "Essay Context",
    question: "What's the essay question?",
    placeholder:
      "e.g., What experiences have shaped how you invest in others and how you lead? (250 words)",
    icon: <CircleQuestionMark />,
  },
  {
    id: "who-you-are",
    category: "Who You Are",
    question: "What's your background in one sentence?",
    placeholder: "e.g., Software engineer with 5 years in fintech startups...",
    icon: <User />,
  },
  {
    id: "what-youve-done",
    category: "What You've Done",
    question: "What achievement are you most proud of?",
    placeholder: "e.g., Led a product launch that increased revenue by 40%...",
    icon: <Trophy />,
  },
  {
    id: "leadership-growth",
    category: "Leadership / Growth",
    question: "Describe one leadership moment or challenge you faced.",
    placeholder: "e.g., Navigated team conflict during a critical deadline...",
    icon: <Sword />,
  },
  {
    id: "why-mba-goals",
    category: "Why MBA & Goals",
    question: "Why MBA now and what do you want to do after?",
    placeholder:
      "e.g., Transition to strategy consulting to drive healthcare innovation...",
    icon: <Building2 />,
  },
];
