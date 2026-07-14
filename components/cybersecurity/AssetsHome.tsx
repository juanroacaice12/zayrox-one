import AssetsTable from "./AssetsTable";

export default function AssetsHome() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-black text-slate-900 dark:text-white">
          Inventario de Activos
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Visualiza todos los activos tecnológicos registrados en la infraestructura.
        </p>

      </div>

      <AssetsTable />

    </div>
  );
}