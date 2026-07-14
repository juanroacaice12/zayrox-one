const clients = [
  "Microsoft",
  "Google",
  "OpenAI",
  "Tesla",
  "Amazon",
];

export default function TopClients() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <h2 className="text-2xl font-bold mb-6 dark:text-white">

        Top Clientes

      </h2>

      <div className="space-y-4">

        {clients.map((client, index) => (

          <div
            key={client}
            className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-3"
          >

            <span>

              {client}

            </span>

            <span className="font-bold text-purple-600">

              #{index + 1}

            </span>

          </div>

        ))}

      </div>

    </div>
  );
}