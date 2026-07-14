import { Plus } from "lucide-react";

export default function CRMHeader() {
  return (
    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-4xl font-black text-slate-900 dark:text-white">
          CRM
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Gestiona clientes, oportunidades y relaciones comerciales.
        </p>

      </div>

      <button
        className="
        flex
        items-center
        gap-2
        rounded-2xl
        bg-blue-600
        px-5
        py-3
        font-semibold
        text-white
        transition
        hover:bg-blue-700
        "
      >
        <Plus size={20} />

        Nuevo Cliente

      </button>

    </div>
  );
}