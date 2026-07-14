import { Plus } from "lucide-react";

export default function DocumentsHeader() {
  return (
    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-4xl font-black text-slate-900 dark:text-white">
          Centro de Documentos
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Gestiona contratos, facturas y archivos empresariales.
        </p>

      </div>

      <button className="flex items-center gap-2 rounded-2xl bg-amber-500 px-5 py-3 text-white hover:bg-amber-600 transition">

        <Plus size={18}/>

        Nuevo Documento

      </button>

    </div>
  );
}