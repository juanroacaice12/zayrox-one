import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import CommandPalette from "@/components/search/CommandPalette";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Navbar />

        {/* Command Palette Global */}
        <CommandPalette />

        <main className="flex-1 overflow-auto bg-slate-100 dark:bg-[#0B1120] p-8">

          {children}

        </main>

      </div>

    </div>
  );
}