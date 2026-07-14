import { Bot } from "lucide-react";

export default function AIAnalysisCard() {
  return (
    <div className="rounded-3xl border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-slate-900 p-6 h-fit">

      <div className="flex items-center gap-3">

        <Bot className="text-amber-500"/>

        <h2 className="text-xl font-bold dark:text-white">

          ZAYROX AI

        </h2>

      </div>

      <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">

        Analiza automáticamente cualquier documento.

        <br/><br/>

        • Resume contratos.

        <br/>

        • Detecta fechas importantes.

        <br/>

        • Encuentra cláusulas críticas.

        <br/>

        • Extrae información relevante.

        <br/>

        • Detecta riesgos.

      </p>

      <button className="mt-8 w-full rounded-2xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition">

        Analizar con ZAYROX AI

      </button>

    </div>
  );
}