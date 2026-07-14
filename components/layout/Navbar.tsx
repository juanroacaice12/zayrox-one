"use client";

import {
  Plus,
  Search,
  Settings,
} from "lucide-react";

import ThemeToggle from "@/components/common/ThemeToggle";
import NotificationBell from "@/components/notifications/NotificationBell";

export default function Navbar() {
  return (
    <header className="h-20 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8">

      <div>

        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          ¡Bienvenido Juan Camilo! 👋
        </h1>

        <p className="text-slate-500 dark:text-slate-400">
          Aquí tienes un resumen de tu empresa.
        </p>

      </div>

      <div className="flex items-center gap-4">

        {/* Buscador */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-3 text-slate-400 dark:text-slate-500"
          />

          <input
            placeholder="Buscar..."
            className="
              w-72
              h-11
              rounded-xl
              border
              border-slate-200
              dark:border-slate-800
              bg-white
              dark:bg-slate-900
              text-slate-900
              dark:text-white
              pl-11
              pr-4
              outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

        </div>

        {/* Nuevo */}

        <button className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition">

          <Plus size={18} />

        </button>

        {/* Notificaciones */}

        <NotificationBell />

        {/* Dark Mode */}

        <ThemeToggle />

        {/* Configuración */}

        <button className="w-11 h-11 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition">

          <Settings
            className="mx-auto text-slate-700 dark:text-slate-200"
            size={18}
          />

        </button>

        {/* Usuario */}

        <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

          JR

        </div>

      </div>

    </header>
  );
}