import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div
      className="
      flex
      items-center
      rounded-2xl
      border
      border-slate-200
      dark:border-slate-800
      bg-white
      dark:bg-slate-900
      px-5
      py-4
      "
    >

      <Search
        size={20}
        className="text-slate-400"
      />

      <input
        placeholder="Buscar clientes..."
        className="
        ml-4
        flex-1
        bg-transparent
        outline-none
        text-slate-900
        dark:text-white
        "
      />

    </div>
  );
}