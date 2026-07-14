import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


interface Props {
  role: "user" | "assistant";
  message: string;
}

export default function ChatMessage({
  role,
  message,
}: Props) {
  const isUser = role === "user";

  return (
    <div
      className={`mb-6 flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] rounded-2xl px-5 py-4 whitespace-pre-wrap shadow-sm ${
          isUser
            ? "bg-blue-600 text-white"
            : "rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 text-slate-900 dark:text-white"
        }`}
      >
        <ReactMarkdown
  remarkPlugins={[remarkGfm]}
>
  {message}
</ReactMarkdown>
      </div>
    </div>
  );
}