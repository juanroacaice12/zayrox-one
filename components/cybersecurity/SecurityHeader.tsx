import { ShieldCheck } from "lucide-react";

export default function SecurityHeader() {
  return (
    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-4xl font-black text-slate-900 dark:text-white">
          Ciberseguridad
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Centro de Operaciones de Seguridad (SOC)
        </p>

      </div>

      <div className="flex items-center gap-3 rounded-2xl bg-green-100 dark:bg-green-900 px-5 py-3">

        <ShieldCheck className="text-green-600" />

        <span className="font-semibold text-green-700 dark:text-green-300">

          Sistema Seguro

        </span>

      </div>

    </div>
  );
}