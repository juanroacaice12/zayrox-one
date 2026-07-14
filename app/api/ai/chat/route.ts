import { NextRequest, NextResponse } from "next/server";
import { AIEngine } from "@/core/ai/AIEngine";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const engine = new AIEngine();

    const response = await engine.process({
      message: body.message,
      conversationId: body.conversationId,
      companyId: body.companyId,
      userId: body.userId,
    });

    return NextResponse.json(response);

  } catch (error: any) {

  console.error("=================================");
  console.error("ERROR ZAYROX AI");
  console.error("=================================");
  console.error(error);

  return NextResponse.json(
    {
      error: error.message,
      stack: error.stack,
    },
    {
      status: 500,
    }
  );
}
}