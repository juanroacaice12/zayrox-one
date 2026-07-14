import { Wifi } from "lucide-react";

const ports = [
  { port: 22, service: "SSH", status: "Abierto" },
  { port: 80, service: "HTTP", status: "Abierto" },
  { port: 443, service: "HTTPS", status: "Abierto" },
  { port: 3306, service: "MySQL", status: "Abierto" },
];

export default function AssetPorts() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <div className="flex items-center gap-3 mb-6">

        <Wifi className="text-blue-600"/>

        <h2 className="text-xl font-bold dark:text-white">

          Puertos

        </h2>

      </div>

      <div className="space-y-4">

        {ports.map((item)=>(
          <div
            key={item.port}
            className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-3"
          >
            <span>

              {item.port}

            </span>

            <span>

              {item.service}

            </span>

            <span className="font-semibold text-green-600">

              {item.status}

            </span>

          </div>
        ))}

      </div>

    </div>
  );
}