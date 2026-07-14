import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  FileText,
  ShieldAlert,
  Bot,
} from "lucide-react";

const metrics = [
  {
    title: "Ingresos",
    value: "+18%",
    positive: true,
    icon: DollarSign,
  },
  {
    title: "Clientes",
    value: "+7%",
    positive: true,
    icon: Users,
  },
  {
    title: "Documentos",
    value: "+245",
    positive: true,
    icon: FileText,
  },
  {
    title: "Incidentes",
    value: "-41%",
    positive: true,
    icon: ShieldAlert,
  },
];

export default function ExecutiveSummary() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <div className="flex items-center gap-3 mb-6">

        <Bot className="text-purple-600" />

        <h2 className="text-2xl font-bold dark:text-white">

          Resumen Ejecutivo IA

        </h2>

      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">

        {metrics.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-4"
            >

              <div className="flex justify-between">

                <Icon className="text-purple-600"/>

                {item.positive ? (

                  <TrendingUp className="text-green-500"/>

                ) : (

                  <TrendingDown className="text-red-500"/>

                )}

              </div>

              <h3 className="mt-4 text-lg font-bold dark:text-white">

                {item.title}

              </h3>

              <p className="text-2xl font-black text-purple-600">

                {item.value}

              </p>

            </div>

          );

        })}

      </div>

      <div className="rounded-2xl bg-purple-50 dark:bg-slate-800 p-5">

        <p className="leading-8 text-slate-700 dark:text-slate-300">

          📈 La empresa mantiene una tendencia positiva durante el último trimestre.

          <br/><br/>

          CRM continúa siendo el módulo con mayor actividad.

          <br/><br/>

          Se recomienda aumentar campañas comerciales para aprovechar el crecimiento actual.

        </p>

      </div>

    </div>
  );
}