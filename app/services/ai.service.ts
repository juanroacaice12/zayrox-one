export interface AIChatResponse {
  message: string;
  model: string;
  tokens?: number;
}

export async function sendMessage(message: string): Promise<AIChatResponse> {
  const response = await fetch("/api/ai/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  });

  if (!response.ok) {
    throw new Error("No fue posible comunicarse con ZAYROX AI.");
  }

  return response.json();
}