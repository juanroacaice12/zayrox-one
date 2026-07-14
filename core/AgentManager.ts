import { GeneralAgent } from "./agents/GeneralAgent";
import { CRMAgent } from "./agents/CRMAgent";
import { SecurityAgent } from "./agents/SecurityAgent";
import { AnalyticsAgent } from "./agents/AnalyticsAgent";
import { DocumentsAgent } from "./agents/DocumentsAgent";

export class AgentManager {

  private agents = {
    general: new GeneralAgent(),
    crm: new CRMAgent(),
    security: new SecurityAgent(),
    analytics: new AnalyticsAgent(),
    documents: new DocumentsAgent(),
  };

  get(tool: string) {
    return this.agents[tool as keyof typeof this.agents] ?? this.agents.general;
  }
}