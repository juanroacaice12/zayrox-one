import { AIRequest, AIResponse } from "../types/ai";
import { PromptManager } from "./PromptManager";
import { ContextBuilder } from "./ContextBuilder";
import { ToolRouter } from "./ToolRouter";
import { MemoryManager } from "./MemoryManager";
import { ProviderManager } from "../ProviderManager";
import { AgentManager } from "../AgentManager";

export class AIEngine {

  async process(request: AIRequest): Promise<AIResponse> {

    const contextBuilder = new ContextBuilder();
    const toolRouter = new ToolRouter();
    const memory = new MemoryManager();
    const provider = new ProviderManager();
    const prompts = new PromptManager();
    const agents = new AgentManager();

    // 1. Construir contexto
    const context = await contextBuilder.build();

    // 2. Detectar herramienta
    const tool = toolRouter.detect(request.message);

    // 3. Obtener agente
    const agent = agents.get(tool);

    // 4. Obtener prompt del agente
    const agentPrompt = agent.getSystemPrompt();

    // 5. Construir mensajes
    const messages = prompts.build(
      request.message,
      agentPrompt
    );

    // 6. Consultar proveedor IA
    const response = await provider.chat(messages);

    // 7. Guardar memoria
    memory.save();

    console.log({
      context,
      tool,
      agent,
      messages,
    });

    return response;
  }
}