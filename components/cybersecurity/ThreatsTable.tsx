const threats = [
  {
    id: "CVE-2026-1458",
    severity: "Alta",
    asset: "Servidor Web",
    status: "Pendiente",
  },
  {
    id: "OWASP-A01",
    severity: "Media",
    asset: "API REST",
    status: "En revisión",
  },
  {
    id: "CVE-2026-8211",
    severity: "Crítica",
    asset: "Firewall",
    status: "Mitigada",
  },
];

export default function ThreatsTable() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <h2 className="mb-6 text-2xl font-bold dark:text-white">
        Vulnerabilidades Detectadas
      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-left text-slate-500">

            <th>ID</th>

            <th>Severidad</th>

            <th>Activo</th>

            <th>Estado</th>

          </tr>

        </thead>

        <tbody>

          {threats.map((item) => (

            <tr
              key={item.id}
              className="border-t border-slate-200 dark:border-slate-800 h-14"
            >

              <td>{item.id}</td>

              <td>{item.severity}</td>

              <td>{item.asset}</td>

              <td>{item.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}