"use client";

import CountUp from "react-countup";
import {
  Users,
  DollarSign,
  Shield,
  CircleCheckBig,
} from "lucide-react";

interface Props {
  title: string;
  value: number;
  growth: string;
  icon: "users" | "money" | "shield" | "tasks";
}

export default function StatCard({
  title,
  value,
  growth,
  icon,
}: Props) {
  const icons = {
    users: <Users size={22} />,
    money: <DollarSign size={22} />,
    shield: <Shield size={22} />,
    tasks: <CircleCheckBig size={22} />,
  };

  const colors = {
    users: "from-blue-500 to-blue-700",
    money: "from-green-500 to-green-700",
    shield: "from-red-500 to-red-700",
    tasks: "from-violet-500 to-violet-700",
  };

  return (
    <div className="group bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* Encabezado */}
      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm text-slate-500 font-medium">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-2 tracking-tight text-slate-900">
            <CountUp
              end={value}
              separator=","
              duration={2}
            />
          </h2>
        </div>

        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[icon]} flex items-center justify-center text-white shadow-lg`}
        >
          {icons[icon]}
        </div>

      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center gap-2">

        <span className="text-green-600 font-semibold">
          {growth}
        </span>

        <span className="text-slate-400 text-sm">
          vs mes anterior
        </span>

      </div>

    </div>
  );
}