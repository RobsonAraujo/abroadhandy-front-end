import { apiClient } from "../api";
import { RefinerResponse } from "./types";

export const refinerService = {
  async getfeedback(
    request: Record<string, unknown>
  ): Promise<RefinerResponse> {
    return apiClient.post<RefinerResponse>("/refiner", request);
  },
};
