import { Plus, MessageSquare } from "lucide-react";

const chats = [
  "Comercial",
  "Ciberseguridad",
  "Terraform",
  "AWS",
  "Clientes",
];

export default function ConversationList() {
  return (
    <div className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">

      <button className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white py-3 flex items-center justify-center gap-2 font-semibold">

        <Plus size={18} />

        Nueva conversación

      </button>

      <div className="mt-8 space-y-2">

        {chats.map((chat) => (

          <button
            key={chat}
            className="w-full rounded-xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-3 text-left text-slate-700 dark:text-slate-300"
          >

            <MessageSquare size={18} />

            {chat}

          </button>

        ))}

      </div>

    </div>
  );
}