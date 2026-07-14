"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {

  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="
        h-10
        w-10
        rounded-xl
        border
        border-slate-200
        dark:border-slate-700
        "
      />
    );
  }

  return (

    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
      h-10
      w-10
      rounded-xl
      border
      border-slate-200
      dark:border-slate-700
      flex
      items-center
      justify-center
      hover:bg-slate-100
      dark:hover:bg-slate-800
      transition
      "
    >

      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}

    </button>

  );
}