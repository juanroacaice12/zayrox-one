"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { searchItems } from "./search-data";

export default function CommandPalette() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const filtered = useMemo(() => {
    return searchItems.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-start justify-center pt-24"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-[700px] rounded-3xl bg-white dark:bg-slate-900 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <div className="flex items-center border-b border-slate-200 dark:border-slate-800 p-5">

          <Search className="text-slate-500" />

          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar en ZAYROX ONE..."
            className="ml-4 flex-1 bg-transparent outline-none text-lg dark:text-white"
          />

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <X size={20} />
          </button>

        </div>

        {/* Resultados */}

        <div className="max-h-[500px] overflow-y-auto p-3">

          {filtered.map((item) => (

            <button
              key={item.title}
              onClick={() => {
                router.push(item.href);
                setOpen(false);
                setQuery("");
              }}
              className="w-full rounded-xl p-4 text-left hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >

              <h3 className="font-semibold dark:text-white">

                {item.title}

              </h3>

              <p className="text-sm text-slate-500">

                {item.subtitle}

              </p>

            </button>

          ))}

          {filtered.length === 0 && (

            <div className="p-10 text-center text-slate-500">

              No se encontraron resultados.

            </div>

          )}

        </div>

      </div>

    </div>
  );
}