import { BadgeCheck } from "lucide-react";

export default function LicensesCard() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <h2 className="text-2xl font-bold dark:text-white mb-6">

        Licencia

      </h2>

      <div className="flex items-center gap-3">

        <BadgeCheck className="text-green-600" />

        <div>

          <h3 className="font-bold dark:text-white">

            Enterprise

          </h3>

          <p className="text-slate-500">

            Activa hasta 2030

          </p>

        </div>

      </div>

    </div>
  );
}