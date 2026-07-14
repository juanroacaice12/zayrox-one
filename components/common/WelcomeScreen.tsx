const actions = [
  "📊 Analizar ventas",
  "👥 Consultar CRM",
  "📄 Crear contrato",
  "🛡 Revisar seguridad",
  "☁ Infraestructura Cloud",
  "⚙ Automatizar proceso",
];

export default function WelcomeScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center">

      <div className="mb-10 h-24 w-24 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
        Z
      </div>

      <h1 className="text-5xl font-black">
        ZAYROX AI
      </h1>

      <p className="mt-4 text-slate-500 text-lg">
        ¿Qué deseas hacer hoy?
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4">

        {actions.map((action) => (
          <button
            key={action}
            className="rounded-2xl border bg-white px-6 py-4 hover:border-blue-500 hover:bg-blue-50 transition-all"
          >
            {action}
          </button>
        ))}

      </div>

    </div>
  );
}