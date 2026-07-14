import { Bot } from "lucide-react";

export default function AIRecommendation() {
  return (
    <div className="rounded-3xl border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-slate-900 p-6">

      <div className="flex items-center gap-3">

        <Bot className="text-blue-600" />

        <h2 className="font-bold text-lg dark:text-white">
          ZAYROX AI
        </h2>

      </div>

      <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">

        Se detectó una vulnerabilidad crítica en el servidor web.

        <br /><br />

        Se recomienda actualizar Apache inmediatamente y revisar los permisos de acceso SSH.

      </p>

    </div>
  );
}