import {
  Plug,
  CheckCircle2,
  AlertTriangle,
  Cloud,
} from "lucide-react";

const stats = [
  {
    title: "Integraciones",
    value: "16",
    icon: Plug,
    color: "bg-indigo-600",
  },
  {
    title: "Conectadas",
    value: "12",
    icon: CheckCircle2,
    color: "bg-green-600",
  },
  {
    title: "Pendientes",
    value: "3",
    icon: AlertTriangle,
    color: "bg-yellow-500",
  },
  {
    title: "Servicios Cloud",
    value: "5",
    icon: Cloud,
    color: "bg-sky-600",
  },
];

export default function IntegrationStats() {
  return (
    <div className="grid grid-cols-4 gap-6">

      {stats.map((stat) => {

        const Icon = stat.icon;

        return (

          <div
            key={stat.title}
            className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-slate-500 dark:text-slate-400">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-3xl font-black text-slate-900 dark:text-white">
                  {stat.value}
                </h2>

              </div>

              <div className={`${stat.color} rounded-2xl p-3 text-white`}>

                <Icon size={24} />

              </div>

            </div>

          </div>

        );

      })}

    </div>
  );
}