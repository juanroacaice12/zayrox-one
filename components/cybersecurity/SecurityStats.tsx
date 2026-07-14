import {
  Shield,
  AlertTriangle,
  Server,
  Activity,
} from "lucide-react";

const stats = [
  {
    title: "Activos",
    value: "148",
    icon: Server,
    color: "bg-blue-600",
  },
  {
    title: "Alertas",
    value: "12",
    icon: AlertTriangle,
    color: "bg-orange-500",
  },
  {
    title: "Protección",
    value: "96%",
    icon: Shield,
    color: "bg-green-600",
  },
  {
    title: "Eventos",
    value: "5.248",
    icon: Activity,
    color: "bg-purple-600",
  },
];

export default function SecurityStats() {
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

                <h2 className="mt-2 text-3xl font-bold dark:text-white">
                  {item.value}
                </h2>

              </div>

              <div className={`${item.color} rounded-2xl p-3 text-white`}>

                <Icon />

              </div>

            </div>

          </div>

        );

      })}

    </div>
  );
}