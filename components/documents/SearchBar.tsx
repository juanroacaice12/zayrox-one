import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-4">

      <div className="flex items-center">

        <Search className="text-slate-400"/>

        <input
          placeholder="Buscar documentos..."
          className="ml-4 flex-1 bg-transparent outline-none dark:text-white"
        />

      </div>

    </div>
  );
}