import {
  Users,
  Shield,
  KeyRound,
  Database,
} from "lucide-react";

const stats = [
  {
    title: "Usuarios",
    value: "24",
    icon: Users,
    color: "bg-blue-600",
  },
  {
    title: "Roles",
    value: "5",
    icon: Shield,
    color: "bg-green-600",
  },
  {
    title: "API Keys",
    value: "12",
    icon: KeyRound,
    color: "bg-purple-600",
  },
  {
    title: "Bases de Datos",
    value: "3",
    icon: Database,
    color: "bg-orange-500",
  },
];

export default function AdministrationStats() {
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