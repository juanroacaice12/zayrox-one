import {
  Workflow,
  PlayCircle,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    title: "Automatizaciones",
    value: "28",
    icon: Workflow,
  },
  {
    title: "Ejecuciones Hoy",
    value: "1.248",
    icon: PlayCircle,
  },
  {
    title: "Tiempo Ahorrado",
    value: "38 h",
    icon: Clock3,
  },
  {
    title: "Éxito",
    value: "99.2%",
    icon: CheckCircle2,
  },
];

export default function AutomationStats() {
  return (
    <div className="grid grid-cols-4 gap-6">

      {stats.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6"
          >

            <div className="flex justify-between">

              <div>

                <p className="text-slate-500">

                  {item.title}

                </p>

                <h2 className="mt-3 text-3xl font-black dark:text-white">

                  {item.value}

                </h2>

              </div>

              <div className="rounded-2xl bg-cyan-600 p-3 text-white">

                <Icon />

              </div>

            </div>

          </div>

        );

      })}

    </div>
  );
}