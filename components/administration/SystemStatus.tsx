import { Server } from "lucide-react";

const services = [
  ["API", "Online"],
  ["Base de Datos", "Online"],
  ["Storage", "Online"],
  ["IA", "Online"],
];

export default function SystemStatus() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <h2 className="flex items-center gap-2 text-2xl font-bold dark:text-white mb-6">

        <Server />

        Estado del Sistema

      </h2>

      <div className="space-y-4">

        {services.map(([service, status]) => (

          <div
            key={service}
            className="flex items-center justify-between rounded-xl bg-slate-100 dark:bg-slate-800 p-3"
          >

            <span>{service}</span>

            <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-500">

              {status}

            </span>

          </div>

        ))}

      </div>

    </div>
  );
}