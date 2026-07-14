"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Ene", revenue: 42000 },
  { month: "Feb", revenue: 58000 },
  { month: "Mar", revenue: 73000 },
  { month: "Abr", revenue: 91000 },
  { month: "May", revenue: 88000 },
  { month: "Jun", revenue: 120000 },
  { month: "Jul", revenue: 145000 },
];

export default function RevenueChart() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <h2 className="text-2xl font-bold mb-6 dark:text-white">

        Ingresos Mensuales

      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <Tooltip />

            <Area
              dataKey="revenue"
              stroke="#9333ea"
              fill="#a855f7"
              fillOpacity={0.3}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}