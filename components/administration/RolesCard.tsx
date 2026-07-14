import { ShieldCheck } from "lucide-react";

const roles = [
  "Administrador",
  "Supervisor",
  "Ventas",
  "Analista",
  "Invitado",
];

export default function RolesCard() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <h2 className="text-2xl font-bold dark:text-white mb-6">

        Roles

      </h2>

      <div className="space-y-4">

        {roles.map((role) => (

          <div
            key={role}
            className="flex items-center gap-3 rounded-xl bg-slate-100 dark:bg-slate-800 p-3"
          >

            <ShieldCheck className="text-blue-600" />

            <span className="dark:text-white">

              {role}

            </span>

          </div>

        ))}

      </div>

    </div>
  );
}