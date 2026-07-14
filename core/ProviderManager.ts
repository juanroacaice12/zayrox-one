import { OpenAIProvider } from "./providers/OpenAIProvider";
import { ProviderChatMessage } from "./types/ai";

export class ProviderManager {

  private provider = new OpenAIProvider();

  async chat(messages: ProviderChatMessage[]) {

    return this.provider.chat(messages);

  }

}