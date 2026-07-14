"use client";

import {
  BatteryCharging,
  Cpu,
  Wifi,
  MapPin,
  Camera,
  Mic,
  Activity,
  ArrowUpRight,
} from "lucide-react";

export default function RobotStatusCard() {
  return (
    <div className="
      rounded-3xl
      bg-white
      dark:bg-slate-900
      border
      border-slate-200
      dark:border-slate-800
      p-6
      shadow-sm
      transition-all
    ">

      <div className="flex items-center justify-between">

        <div>

          <div className="flex items-center gap-3">

            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">

              🤖

            </div>

            <div>

              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                ZAYREX ROBOT
              </h2>

              <p className="text-sm text-slate-500">
                Hardware conectado
              </p>

            </div>

          </div>

        </div>

        <div className="flex items-center gap-2">

          <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>

          <span className="font-semibold text-green-600">
            ONLINE
          </span>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">

        <Item
          icon={<BatteryCharging size={18} />}
          title="Batería"
          value="92%"
        />

        <Item
          icon={<Wifi size={18} />}
          title="Conexión"
          value="Excelente"
        />

        <Item
          icon={<Cpu size={18} />}
          title="CPU"
          value="31%"
        />

        <Item
          icon={<Activity size={18} />}
          title="Estado"
          value="Patrullando"
        />

        <Item
          icon={<Camera size={18} />}
          title="Cámaras"
          value="2 Activas"
        />

        <Item
          icon={<Mic size={18} />}
          title="Micrófonos"
          value="4 Activos"
        />

        <Item
          icon={<MapPin size={18} />}
          title="Ubicación"
          value="Recepción"
        />

        <Item
          icon={<ArrowUpRight size={18} />}
          title="Última sincronización"
          value="Hace 4 seg."
        />

      </div>

    </div>
  );
}

function Item({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="
      rounded-2xl
      bg-slate-50
      dark:bg-slate-800
      p-4
    ">

      <div className="flex items-center gap-2 text-blue-600">

        {icon}

        <span className="text-sm">

          {title}

        </span>

      </div>

      <p className="mt-2 font-bold text-slate-900 dark:text-white">

        {value}

      </p>

    </div>
  );
}