import { openai } from "@/config/openai";
import { env } from "@/config/env";
import {
  AIResponse,
  ProviderChatMessage,
} from "@/core/types/ai";

export class OpenAIProvider {

  async chat(
    messages: ProviderChatMessage[]
  ): Promise<AIResponse> {

    const response = await openai.chat.completions.create({

      model: env.OPENAI_MODEL,

      messages,

    });

    return {

      message: response.choices[0]?.message?.content ?? "",

      model: response.model,

      tokens: response.usage?.total_tokens ?? 0,

    };

  }

}