"use client";

import {
  MessageSquarePlus,
  Bot,
  Shield,
  FileText,
  BarChart3,
  Cloud,
} from "lucide-react";

const conversations = [
  {
    title: "Dashboard Ejecutivo",
    icon: BarChart3,
  },
  {
    title: "CRM Clientes",
    icon: Bot,
  },
  {
    title: "Ciberseguridad",
    icon: Shield,
  },
  {
    title: "Documentación",
    icon: FileText,
  },
  {
    title: "Infraestructura",
    icon: Cloud,
  },
];

export default function ConversationSidebar() {
  return (
    <aside className="w-80 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">

      <div className="p-5">

        <button
          className="
          w-full
          rounded-xl
          bg-blue-600
          text-white
          py-3
          flex
          items-center
          justify-center
          gap-2
          hover:bg-blue-700
          transition
          "
        >
          <MessageSquarePlus size={18} />

          Nueva conversación

        </button>

      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-5">

        {conversations.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.title}
              className="
              w-full
              mb-2
              rounded-xl
              px-4
              py-3
              flex
              items-center
              gap-3
              hover:bg-slate-100
              dark:hover:bg-slate-800
              text-slate-700
              dark:text-slate-300
              transition
              "
            >

              <Icon size={18} />

              <span>

                {item.title}

              </span>

            </button>

          );

        })}

      </div>

    </aside>
  );
}