const threats = [
  {
    name: "SQL Injection",
    total: 45,
  },
  {
    name: "Brute Force",
    total: 32,
  },
  {
    name: "Cross Site Scripting",
    total: 18,
  },
  {
    name: "Malware",
    total: 14,
  },
  {
    name: "Ransomware",
    total: 6,
  },
];

export default function TopThreats() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <h2 className="text-2xl font-bold dark:text-white mb-6">

        Top Amenazas

      </h2>

      <div className="space-y-4">

        {threats.map((item) => (

          <div
            key={item.name}
            className="flex items-center justify-between"
          >

            <span className="dark:text-white">

              {item.name}

            </span>

            <span className="font-bold text-blue-600">

              {item.total}

            </span>

          </div>

        ))}

      </div>

    </div>
  );
}