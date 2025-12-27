import { apiClient } from "../api";
import { StrategistRequest, StrategistResponse } from "./types";

export const strategistService = {
  async getSuggestions(answers: Record<string, string>): Promise<StrategistResponse> {
    const prompt = buildPrompt(answers);
    return apiClient.post<StrategistResponse>("/strategist", { prompt });
  },
};

function buildPrompt(answers: Record<string, string>): string {
  const essayQuestion = answers["essay-context"] || "";
  const background = answers["who-you-are"] || "";
  const achievement = answers["what-youve-done"] || "";
  const leadership = answers["leadership-growth"] || "";
  const whyMba = answers["why-mba-goals"] || "";

  return `I'm ${background}. My biggest achievement was ${achievement}. My toughest leadership moment was ${leadership}. I want to do an MBA because ${whyMba}. Help me brainstorm angles for the following essay question: '${essayQuestion}'`;
}

