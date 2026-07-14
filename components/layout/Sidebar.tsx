"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Bot,
  Users,
  Shield,
  BarChart3,
  Folder,
  Workflow,
  Plug,
  Settings,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard Ejecutivo",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "ZAYROX AI",
    href: "/ai",
    icon: Bot,
  },
  {
    title: "CRM",
    href: "/crm",
    icon: Users,
  },
  {
    title: "Ciberseguridad",
    href: "/cybersecurity",
    icon: Shield,
  },
  {
    title: "Analítica",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Documentos",
    href: "/documents",
    icon: Folder,
  },
  {
    title: "Automatizaciones",
    href: "/automation",
    icon: Workflow,
  },
  {
    title: "Integraciones",
    href: "/integrations",
    icon: Plug,
  },
  {
    title: "Administración",
    href: "/administration",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex flex-col">

      {/* Logo */}

      <div className="h-20 flex items-center px-8 border-b border-slate-200 dark:border-slate-800">

        <h1 className="text-4xl font-black text-blue-600">
          Z
        </h1>

        <div className="ml-3">

          <p className="font-extrabold text-2xl text-slate-900 dark:text-white">
            ZAYROX
          </p>

          <p className="text-blue-500 text-sm font-medium">
            ONE
          </p>

        </div>

      </div>

      {/* Menú */}

      <nav className="flex-1 px-4 py-6 space-y-2">

        {menu.map((item) => {

          const Icon = item.icon;

          const active =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (

            <Link
              key={item.title}
              href={item.href}
              className={`
                flex
                items-center
                gap-4
                rounded-2xl
                px-4
                py-3
                transition-all
                duration-300
                font-medium

                ${
                  active
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-blue-600"
                }
              `}
            >

              <Icon size={20} />

              <span>{item.title}</span>

            </Link>

          );

        })}

      </nav>

      {/* Usuario */}

      <div className="border-t border-slate-200 dark:border-slate-800 p-5">

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
              JR
            </div>

            <div>

              <p className="font-bold text-slate-900 dark:text-white">
                Juan Camilo
              </p>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Administrador
              </p>

            </div>

          </div>

        </div>

      </div>

    </aside>
  );
}