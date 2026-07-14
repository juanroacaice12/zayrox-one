import { Play, Pause, Workflow, ArrowRight } from "lucide-react";

interface Props {
  name: string;
  status: string;
  runs: number;
}

export default function AutomationCard({
  name,
  status,
  runs,
}: Props) {
  const active = status === "Activa";

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-xl transition">

      <div className="flex items-center justify-between">

        <div className="rounded-2xl bg-cyan-600 p-4 text-white">

          <Workflow />

        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            active
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
              : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
          }`}
        >
          {status}
        </span>

      </div>

      <h2 className="mt-6 text-xl font-bold dark:text-white">

        {name}

      </h2>

      <p className="mt-2 text-slate-500">

        {runs} ejecuciones

      </p>

      <div className="mt-8 flex items-center justify-between">

        <button className="rounded-xl bg-slate-100 dark:bg-slate-800 p-3">

          {active ? <Pause size={18} /> : <Play size={18} />}

        </button>

        <button className="flex items-center gap-2 font-semibold text-cyan-600">

          Ver Flujo

          <ArrowRight size={18} />

        </button>

      </div>

    </div>
  );
}