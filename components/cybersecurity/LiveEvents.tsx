import {
  Shield,
  Lock,
  Server,
  ScanSearch,
  Database,
  Globe,
} from "lucide-react";

const events = [
  {
    icon: Shield,
    title: "Firewall bloqueó una IP",
    time: "Hace 1 minuto",
    color: "text-green-500",
  },
  {
    icon: Lock,
    title: "Intento de acceso SSH",
    time: "Hace 4 minutos",
    color: "text-red-500",
  },
  {
    icon: ScanSearch,
    title: "Escaneo de vulnerabilidades finalizado",
    time: "Hace 8 minutos",
    color: "text-blue-500",
  },
  {
    icon: Server,
    title: "Servidor Web actualizado",
    time: "Hace 15 minutos",
    color: "text-green-500",
  },
  {
    icon: Database,
    title: "Backup exitoso",
    time: "Hace 30 minutos",
    color: "text-purple-500",
  },
  {
    icon: Globe,
    title: "Nueva conexión VPN",
    time: "Hace 1 hora",
    color: "text-orange-500",
  },
];

export default function LiveEvents() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <h2 className="text-2xl font-bold dark:text-white mb-6">

        📡 Monitoreo en Tiempo Real

      </h2>

      <div className="space-y-4">

        {events.map((event) => {

          const Icon = event.icon;

          return (

            <div
              key={event.title}
              className="flex items-center justify-between rounded-2xl border border-slate-200 dark:border-slate-800 p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >

              <div className="flex items-center gap-4">

                <div className={`${event.color}`}>

                  <Icon size={22} />

                </div>

                <div>

                  <h3 className="font-semibold dark:text-white">

                    {event.title}

                  </h3>

                  <p className="text-sm text-slate-500">

                    {event.time}

                  </p>

                </div>

              </div>

              <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

            </div>

          );

        })}

      </div>

    </div>
  );
}