import { Bot } from "lucide-react";

export default function AIInsights() {
  return (
    <div className="rounded-3xl border border-purple-200 dark:border-purple-900 bg-white dark:bg-slate-900 p-6">

      <div className="flex items-center gap-3">

        <Bot className="text-purple-600"/>

        <h2 className="text-xl font-bold dark:text-white">

          ZAYROX AI

        </h2>

      </div>

      <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">

        Los ingresos crecieron un <strong>18%</strong> respecto al mes anterior.

        <br/><br/>

        CRM representa el mayor volumen de operaciones.

        <br/><br/>

        La IA recomienda fortalecer la captación de nuevos clientes y automatizar el seguimiento comercial.

      </p>

    </div>
  );
}