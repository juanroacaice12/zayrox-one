"use client";

import { X } from "lucide-react";

interface Props {
  integration: any;
  onClose: () => void;
}

export default function IntegrationDrawer({
  integration,
  onClose,
}: Props) {
  if (!integration) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/40">

      <div className="absolute right-0 top-0 h-full w-[480px] bg-white dark:bg-slate-950 shadow-2xl p-8 overflow-auto">

        <div className="flex justify-between">

          <h1 className="text-3xl font-bold dark:text-white">

            {integration.name}

          </h1>

          <button onClick={onClose}>

            <X />

          </button>

        </div>

        <div className="mt-10 space-y-6">

          <div>

            <p className="text-slate-500">

              Estado

            </p>

            <h2 className="font-bold">

              {integration.status}

            </h2>

          </div>

          <div>

            <p className="text-slate-500">

              Última sincronización

            </p>

            <h2 className="font-bold">

              {integration.lastSync}

            </h2>

          </div>

          <div>

            <p className="text-slate-500">

              API Version

            </p>

            <h2 className="font-bold">

              v2.0

            </h2>

          </div>

          <div>

            <p className="text-slate-500">

              Empresa

            </p>

            <h2 className="font-bold">

              ZAYROX ONE

            </h2>

          </div>

        </div>

        <div className="mt-12 space-y-4">

          <button className="w-full rounded-xl bg-green-600 py-3 text-white">

            Probar conexión

          </button>

          <button className="w-full rounded-xl bg-indigo-600 py-3 text-white">

            Configurar

          </button>

          <button className="w-full rounded-xl bg-red-600 py-3 text-white">

            Desconectar

          </button>

        </div>

      </div>

    </div>
  );
}