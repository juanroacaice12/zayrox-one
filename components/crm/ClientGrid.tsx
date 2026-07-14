import ClientList from "./ClientList";

export default function ClientGrid() {
  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">

        Clientes

      </h2>

      <ClientList />

    </div>
  );
}