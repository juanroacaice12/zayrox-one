import { Plug } from "lucide-react";

export default function IntegrationsHeader() {
  return (
    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-4xl font-black dark:text-white">

          Centro de Integraciones

        </h1>

        <p className="mt-2 text-slate-500">

          Conecta ZAYROX ONE con tus plataformas favoritas.

        </p>

      </div>

      <div className="rounded-2xl bg-indigo-600 p-4 text-white">

        <Plug size={32} />

      </div>

    </div>
  );
}