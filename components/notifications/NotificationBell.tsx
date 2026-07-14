"use client";

import { Bell } from "lucide-react";
import { useState } from "react";
import NotificationPanel from "./NotificationPanel";

export default function NotificationBell() {

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="relative h-10 w-10 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition"
      >
        <Bell size={18} />

        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
          2
        </span>
      </button>

      {open && <NotificationPanel />}

    </div>
  );
}