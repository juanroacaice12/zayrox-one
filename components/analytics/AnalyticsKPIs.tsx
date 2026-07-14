import {
  DollarSign,
  Users,
  TrendingUp,
  Smile,
} from "lucide-react";

const stats = [
  {
    title: "Ingresos",
    value: "$1.250.000",
    icon: DollarSign,
    color: "bg-green-600",
  },
  {
    title: "Clientes",
    value: "1.248",
    icon: Users,
    color: "bg-blue-600",
  },
  {
    title: "Conversión",
    value: "28%",
    icon: TrendingUp,
    color: "bg-purple-600",
  },
  {
    title: "Satisfacción",
    value: "97%",
    icon: Smile,
    color: "bg-orange-500",
  },
];

export default function AnalyticsKPIs() {
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