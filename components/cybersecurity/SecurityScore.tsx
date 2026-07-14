export default function SecurityScore() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <h2 className="text-2xl font-bold dark:text-white">

        Security Score

      </h2>

      <div className="mt-8 flex justify-center">

        <div className="relative h-48 w-48">

          <svg className="rotate-[-90deg]" viewBox="0 0 200 200">

            <circle
              cx="100"
              cy="100"
              r="85"
              stroke="#e2e8f0"
              strokeWidth="14"
              fill="none"
            />

            <circle
              cx="100"
              cy="100"
              r="85"
              stroke="#2563eb"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="534"
              strokeDashoffset="30"
            />

          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <h1 className="text-5xl font-black text-blue-600">

              96

            </h1>

            <p className="text-slate-500">

              Excelente

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}