"use client";

import CountUp from "react-countup";

type Props = {
  title: string;
  value: number;
  percentage: string;
};

export default function KpiCard({
  title,
  value,
  percentage,
}: Props) {

  return (

    <div className="rounded-3xl bg-white p-6 border shadow-sm hover:shadow-xl transition">

      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="text-5xl font-black mt-3">

        <CountUp
          end={value}
          duration={2}
          separator=","
        />

      </h2>

      <p className="text-green-600 mt-4 font-semibold">
        {percentage}
      </p>

    </div>

  );

}