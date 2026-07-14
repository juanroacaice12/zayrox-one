import {
  Users,
  UserPlus,
  DollarSign,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Clientes",
    value: "1,248",
    icon: Users,
    color: "bg-blue-600",
  },
  {
    title: "Prospectos",
    value: "328",
    icon: UserPlus,
    color: "bg-orange-500",
  },
  {
    title: "Ingresos",
    value: "$2.4M",
    icon: DollarSign,
    color: "bg-green-600",
  },
  {
    title: "Conversión",
    value: "48%",
    icon: TrendingUp,
    color: "bg-purple-600",
  },
];

export default function CRMStats() {
  return (
    <div className="grid grid-cols-4 gap-6">

      {stats.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className="
            rounded-3xl
            border
            border-slate-200
            dark:border-slate-800
            bg-white
            dark:bg-slate-900
            p-6
            shadow-sm
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">

                  {item.title}

                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">

                  {item.value}

                </h2>

              </div>

              <div
                className={`${item.color} rounded-2xl p-3 text-white`}
              >

                <Icon size={24} />

              </div>

            </div>

          </div>

        );

      })}

    </div>
  );
}