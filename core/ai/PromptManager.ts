import { SYSTEM_PROMPT } from "./SystemPrompt";

export interface PromptMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export class PromptManager {

  build(
    userMessage: string,
    agentPrompt: string
  ): PromptMessage[] {

    return [

      {
        role: "system",
        content: SYSTEM_PROMPT,
      },

      {
        role: "system",
        content: agentPrompt,
      },

      {
        role: "user",
        content: userMessage,
      },

    ];

  }

}