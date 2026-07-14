import {
  FileText,
  Code,
  Presentation,
  Database,
  Shield,
} from "lucide-react";

const actions = [
  {
    title: "Analizar PDF",
    icon: FileText,
  },
  {
    title: "Generar código",
    icon: Code,
  },
  {
    title: "Crear presentación",
    icon: Presentation,
  },
  {
    title: "Consultar CRM",
    icon: Database,
  },
  {
    title: "Escanear IP",
    icon: Shield,
  },
];

export default function QuickPrompts() {
  return (
    <div className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">

      <h2 className="text-xl font-bold mb-6">

        Acciones rápidas

      </h2>

      <div className="space-y-3">

        {actions.map((action) => {

          const Icon = action.icon;

          return (

            <button
              key={action.title}
              className="w-full rounded-xl border hover:bg-slate-50 transition p-4 flex items-center gap-3 text-left"
            >

              <Icon size={18} />

              <span>{action.title}</span>

            </button>

          );

        })}

      </div>

    </div>
  );
}