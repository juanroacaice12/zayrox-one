"use client";

import { useState } from "react";
import { Paperclip, Mic, SendHorizontal } from "lucide-react";
import { sendMessage } from "@/app/services/ai.service";
import ChatMessage from "./ChatMessage";
import ConversationSidebar from "./ConversationSidebar";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIChat() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "👋 Hola Juan, soy ZAYROX AI.\n\nEstoy listo para ayudarte con cualquier proceso de tu empresa.",
    },
  ]);

  async function handleSend() {
    if (!input.trim() || loading) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const result = await sendMessage(userMessage);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: result.message,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "❌ Ocurrió un error comunicándose con ZAYROX AI.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="
      h-full
      rounded-2xl
      border
      border-slate-200
      dark:border-slate-800
      bg-white
      dark:bg-slate-900
      shadow-sm
      flex
      flex-col
      transition-colors
      duration-300
    ">

      {/* Header */}

      <div className="
        border-b
        border-slate-200
        dark:border-slate-800
        px-8
        py-6
      ">

        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          ZAYROX AI
        </h1>

        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Tu asistente inteligente empresarial.
        </p>

      </div>

      {/* Conversación */}

      <div
  className="
    flex-1
    overflow-y-auto
    p-8
    space-y-6
    scrollbar-thin
  "
>

        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            role={message.role}
            message={message.content}
          />
        ))}

        {loading && (
          <div className="text-slate-400 italic mt-4">
            ZAYROX AI está pensando...
          </div>
        )}

      </div>

      {/* Input */}

      <div className="
        border-t
        border-slate-200
        dark:border-slate-800
        bg-white
        dark:bg-slate-900
        p-5
      ">

        <div className="
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-slate-300
          dark:border-slate-700
          bg-white
          dark:bg-slate-800
          px-4
          py-3
        ">

          <Paperclip
            className="text-slate-400"
            size={20}
          />

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            placeholder="Escribe un mensaje..."
            className="
              flex-1
              bg-transparent
              outline-none
              text-slate-900
              dark:text-white
              placeholder:text-slate-400
            "
          />

          <Mic
            className="text-slate-400"
            size={20}
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className="rounded-xl bg-blue-600 p-3 text-white hover:bg-blue-700 transition disabled:opacity-50"
          >
            <SendHorizontal size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}