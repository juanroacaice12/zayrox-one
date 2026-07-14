import { Settings } from "lucide-react";

export default function AdministrationHeader() {
  return (
    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-4xl font-black dark:text-white">

          Administración

        </h1>

        <p className="mt-2 text-slate-500">

          Configuración general de ZAYROX ONE.

        </p>

      </div>

      <div className="rounded-2xl bg-slate-900 dark:bg-blue-600 p-4 text-white">

        <Settings size={30} />

      </div>

    </div>
  );
}