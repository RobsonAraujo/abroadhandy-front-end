const API_BASE_URL = process.env.NEXT_PUBLIC_ESSAY_AI_API_URL;

const getApiKey = () => {
  const apiKey = process.env.NEXT_PUBLIC_ESSAY_AI_API_KEY;
  if (!apiKey) {
    throw new Error("NEXT_PUBLIC_ESSAY_AI_API_KEY is not defined");
  }
  return apiKey;
};

export const apiClient = {
  async post<T>(endpoint: string, body: Record<string, unknown>): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": getApiKey(),
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  },

  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": getApiKey(),
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  },
};
