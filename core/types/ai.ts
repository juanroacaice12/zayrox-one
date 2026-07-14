export interface ChatMessage {
  id: string;
  role: "system" | "user" | "assistant";
  content: string;
  createdAt: Date;
}

export interface ProviderChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface AIRequest {
  message: string;
  conversationId?: string;
  companyId?: string;
  userId?: string;
}

export interface AIResponse {
  message: string;
  model: string;
  tokens?: number;
}