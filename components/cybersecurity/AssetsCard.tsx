export default function AssetsCard() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <h2 className="text-xl font-bold dark:text-white">
        Activos
      </h2>

      <div className="mt-5 space-y-4">

        <p>🖥 45 Servidores</p>

        <p>☁ 32 Recursos Cloud</p>

        <p>💻 58 Equipos</p>

        <p>📡 13 Dispositivos de Red</p>

      </div>

    </div>
  );
}