"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  { month: "Ene", value: 4000 },
  { month: "Feb", value: 6200 },
  { month: "Mar", value: 5400 },
  { month: "Abr", value: 8200 },
  { month: "May", value: 7600 },
  { month: "Jun", value: 9300 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border h-[380px]">

      <h2 className="font-bold text-xl mb-6">
        Ingresos Mensuales
      </h2>

      <ResponsiveContainer width="100%" height="100%">

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="4 4" />

          <XAxis dataKey="month" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={4}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}