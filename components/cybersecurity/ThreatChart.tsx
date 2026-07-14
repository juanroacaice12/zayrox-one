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
  { day: "Lun", threats: 15 },
  { day: "Mar", threats: 24 },
  { day: "Mié", threats: 18 },
  { day: "Jue", threats: 32 },
  { day: "Vie", threats: 21 },
  { day: "Sáb", threats: 14 },
  { day: "Dom", threats: 28 },
];

export default function ThreatChart() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <h2 className="text-2xl font-bold dark:text-white mb-6">
        Amenazas Detectadas
      </h2>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <Tooltip />

            <Area
              dataKey="threats"
              stroke="#2563eb"
              fill="#3b82f6"
              fillOpacity={0.3}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}