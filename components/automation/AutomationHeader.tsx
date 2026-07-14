import { Plus } from "lucide-react";

export default function AutomationHeader() {
  return (
    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-4xl font-black dark:text-white">
          Automatizaciones
        </h1>

        <p className="mt-2 text-slate-500">
          Automatiza procesos empresariales con ZAYROX ONE.
        </p>

      </div>

      <button className="rounded-2xl bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700 transition">

        <div className="flex items-center gap-2">

          <Plus size={18} />

          Nueva Automatización

        </div>

      </button>

    </div>
  );
}