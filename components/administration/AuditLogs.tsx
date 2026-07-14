import { History } from "lucide-react";

const logs = [
  "09:12 Usuario inició sesión",
  "09:20 Cliente creado",
  "09:41 Permisos modificados",
  "10:05 API actualizada",
  "10:14 Backup ejecutado",
];

export default function AuditLogs() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <h2 className="flex items-center gap-2 text-2xl font-bold dark:text-white mb-6">

        <History />

        Auditoría

      </h2>

      <div className="space-y-4">

        {logs.map((log) => (

          <div
            key={log}
            className="rounded-xl bg-slate-100 dark:bg-slate-800 p-3"
          >

            {log}

          </div>

        ))}

      </div>

    </div>
  );
}