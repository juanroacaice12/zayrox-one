"use client";

import { Plug, ArrowRight } from "lucide-react";

interface Props {
  name: string;
  description: string;
  status: string;
  color: string;
  lastSync: string;
  onOpen: () => void;
}

export default function IntegrationCard({
  name,
  description,
  status,
  color,
  lastSync,
  onOpen,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-xl transition">

      <div className="flex justify-between">

        <div className={`${color} rounded-2xl p-4 text-white`}>

          <Plug />

        </div>

        <div
  className={`
    flex items-center gap-2
    rounded-full
    px-4
    py-2
    text-sm
    font-semibold
    border

    ${
      status === "connected"
        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
        : status === "pending"
        ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
        : "bg-red-500/10 border-red-500/30 text-red-400"
    }
  `}
>

  <div
    className={`
      h-2.5
      w-2.5
      rounded-full

      ${
        status === "connected"
          ? "bg-emerald-400"
          : status === "pending"
          ? "bg-amber-400"
          : "bg-red-400"
      }
    `}
  />

  {

    status === "connected"

      ? "Conectado"

      : status === "pending"

      ? "Pendiente"

      : "Desconectado"

  }

</div>

      </div>

      <h2 className="mt-6 text-xl font-bold dark:text-white">

        {name}

      </h2>

      <p className="mt-2 text-slate-500">

        {description}

      </p>

      <p className="mt-2 text-sm text-slate-400">

        Última sincronización: {lastSync}

      </p>

      <button
        onClick={onOpen}
        className="mt-8 flex items-center gap-2 text-indigo-600 font-semibold"
      >
        Ver detalles

        <ArrowRight size={18} />

      </button>

    </div>
  );
}