export type NodeType = "diagnostic" | "lesson" | "final";

export interface PathNode {
  id: string;
  type: NodeType;
  title: string;
  subtitle?: string;
  slug?: string;
  locked: boolean;
}

export const GMAT_QUANT_PATH: PathNode[] = [
  {
    id: "ch0",
    type: "diagnostic",
    title: "Module 0 – Diagnostic",
    subtitle: "Day 1",
    slug: "diagnostic",
    locked: false,
  },
  {
    id: "ch1",
    type: "lesson",
    title: "Lesson 1: How GMAT Quant Actually Works",
    locked: true,
  },
  {
    id: "ch2",
    type: "lesson",
    title: "Lesson 2: Arithmetic That GMAT Loves",
    locked: true,
  },
  {
    id: "ch3",
    type: "lesson",
    title: "Lesson 3: Algebra Without Overthinking",
    locked: true,
  },
  {
    id: "ch4",
    type: "lesson",
    title: "Lesson 4: Word Problems & Rate Questions",
    locked: true,
  },
  {
    id: "ch5",
    type: "lesson",
    title: "Lesson 5: Data Sufficiency (Free Points)",
    locked: true,
  },
  {
    id: "ch6",
    type: "lesson",
    title: "Lesson 6: Timing & Decision-Making",
    locked: true,
  },
  {
    id: "ch7",
    type: "lesson",
    title: "Lesson 7: Score Optimization Plan",
    locked: true,
  },
  {
    id: "final",
    type: "final",
    title: "Final Mini Mock",
    subtitle: "Day 12–13",
    locked: true,
  },
];
