import { OpenAIProvider } from "./providers/OpenAIProvider";

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export class ProviderManager {

  private provider = new OpenAIProvider();

  async chat(messages: ChatMessage[]) {

    return this.provider.chat(messages);

  }

}