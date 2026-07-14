const modules = [
  ["CRM", 94],
  ["Ciberseguridad", 99],
  ["Documentos", 88],
  ["IA", 96],
  ["Automatizaciones", 82],
];

export default function ModulePerformance() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <h2 className="text-2xl font-bold mb-6 dark:text-white">

        Rendimiento por Módulo

      </h2>

      <div className="space-y-5">

        {modules.map(([name, value]) => (

          <div key={name}>

            <div className="flex justify-between mb-2">

              <span>{name}</span>

              <span>{value}%</span>

            </div>

            <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-800">

              <div
                className="h-3 rounded-full bg-purple-600"
                style={{ width: `${value}%` }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}