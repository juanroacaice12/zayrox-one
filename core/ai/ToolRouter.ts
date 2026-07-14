export class ToolRouter {

  detect(message: string) {

    const text = message.toLowerCase();

    if (text.includes("cliente"))
      return "crm";

    if (text.includes("venta"))
      return "analytics";

    if (text.includes("documento"))
      return "documents";

    if (text.includes("seguridad"))
      return "security";

    return "general";

  }

}