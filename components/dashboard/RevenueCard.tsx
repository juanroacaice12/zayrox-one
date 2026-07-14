"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  { month: "Ene", value: 12000 },
  { month: "Feb", value: 18000 },
  { month: "Mar", value: 21000 },
  { month: "Abr", value: 26000 },
  { month: "May", value: 32000 },
  { month: "Jun", value: 41000 },
  { month: "Jul", value: 48000 },
];

export default function RevenueCard() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-7">

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Resumen de Ventas
          </h2>

          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Últimos 7 meses
          </p>

        </div>

        <div className="bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 rounded-xl px-4 py-2 font-semibold">

          $245.000

        </div>

      </div>

      <div className="h-[350px]">

        <ResponsiveContainer>

          <AreaChart data={data}>

            <defs>

              <linearGradient id="sales" x1="0" y1="0" x2="0" y2="1">

                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4}/>

                <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>

              </linearGradient>

            </defs>

            <CartesianGrid
              vertical={false}
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={4}
              fill="url(#sales)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}