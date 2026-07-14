"use client";

import {
  Paperclip,
  Mic,
  SendHorizontal,
} from "lucide-react";

interface Props {
  value: string;
  loading: boolean;
  onChange: (value: string) => void;
  onSend: () => void;
}

export default function ChatInput({
  value,
  loading,
  onChange,
  onSend,
}: Props) {
  return (
    <div className="border-t bg-white p-5">

      <div className="flex items-center gap-3 rounded-2xl border bg-slate-50 px-4 py-3 shadow-sm">

        <Paperclip
          className="text-slate-400"
          size={20}
        />

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSend();
          }}
          placeholder="Pregunta cualquier cosa..."
          className="flex-1 bg-transparent outline-none"
        />

        <Mic
          className="text-slate-400"
          size={20}
        />

        <button
          disabled={loading}
          onClick={onSend}
          className="rounded-xl bg-blue-600 p-3 text-white hover:bg-blue-700 disabled:opacity-50 transition"
        >
          <SendHorizontal size={18} />
        </button>

      </div>

    </div>
  );
}