export interface StrategistRequest {
  prompt: string;
}

export interface EssayAngle {
  title: string;
  description: string;
}

export interface StrategistResponse {
  angles: EssayAngle[];
  raw_response: string;
}

export interface RefinerRequest {
  essay: string;
  essay_prompt: string;
  question: string;
  school: string;
  word_limit: number;
}

export interface Improvement {
  issue: string;
  current: string;
  suggestion: string;
}

export interface GrammarCorrection {
  original: string;
  corrected: string;
  explanation: string;
}

export interface RefinerFeedback {
  overall_impression: string;
  answer: string;
  strengths: string[];
  improvements: Improvement[];
  quick_wins: string[];
  grammar_corrections: GrammarCorrection[];
  word_count_note: string;
}

export interface RefinerResponse {
  feedback: RefinerFeedback;
  word_count: number;
  raw_response: string;
}
