import { Bot } from "lucide-react";

interface Props {
  company: string;
}

export default function AIInsights({
  company,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <div className="flex items-center gap-3">

        <Bot className="text-blue-600" />

        <h2 className="text-xl font-bold dark:text-white">

          ZAYROX AI

        </h2>

      </div>

      <p className="mt-6 text-slate-500 leading-8">

        {company} representa uno de los clientes más importantes
        de la empresa.

        <br /><br />

        La IA recomienda realizar seguimiento comercial
        durante esta semana.

        <br /><br />

        No existen riesgos comerciales detectados.

      </p>

    </div>
  );
}