import { BarChart3 } from "lucide-react";

export default function AnalyticsHeader() {
  return (
    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-4xl font-black dark:text-white">

          Centro Analítico

        </h1>

        <p className="mt-2 text-slate-500">

          Inteligencia empresarial de ZAYROX ONE

        </p>

      </div>

      <div className="rounded-2xl bg-purple-600 p-4 text-white">

        <BarChart3 size={32} />

      </div>

    </div>
  );
}