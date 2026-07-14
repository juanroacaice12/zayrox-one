import Link from "next/link";
import {
  Server,
  Globe,
  Shield,
  Cpu,
  ArrowRight,
  Circle,
} from "lucide-react";

interface AssetCardProps {
  hostname: string;
  ip: string;
  os: string;
  risk: string;
  status: string;
}

export default function AssetCard({
  hostname,
  ip,
  os,
  risk,
  status,
}: AssetCardProps) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-200
      dark:border-slate-800
      bg-white
      dark:bg-slate-900
      p-6
      shadow-sm
      hover:shadow-xl
      transition-all
      duration-300
      "
    >
      {/* Encabezado */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-blue-600 p-4 text-white">

            <Server size={26} />

          </div>

          <div>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white">

              {hostname}

            </h2>

            <div className="flex items-center gap-2 mt-1">

              <Circle
                size={10}
                className="fill-green-500 text-green-500"
              />

              <span className="text-sm text-slate-500">

                {status}

              </span>

            </div>

          </div>

        </div>

        <span
          className={`
            rounded-full
            px-3
            py-1
            text-xs
            font-bold

            ${
              risk === "Alto"
                ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                : risk === "Medio"
                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
            }
          `}
        >
          {risk}
        </span>

      </div>

      {/* Información */}

      <div className="mt-6 space-y-4">

        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">

          <Globe size={18} />

          {ip}

        </div>

        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">

          <Cpu size={18} />

          {os}

        </div>

        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">

          <Shield size={18} />

          Riesgo {risk}

        </div>

      </div>

      {/* Footer */}

      <Link
        href={`/cybersecurity/assets/${hostname}`}
        className="
        mt-8
        flex
        items-center
        gap-2
        font-semibold
        text-blue-600
        hover:gap-3
        transition-all
        "
      >
        Ver Activo

        <ArrowRight size={18} />
      </Link>

    </div>
  );
}