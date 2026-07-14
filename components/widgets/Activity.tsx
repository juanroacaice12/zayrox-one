export default function Activity() {
  return (

    <div className="bg-white rounded-3xl border p-6">

      <h2 className="font-bold text-xl mb-6">
        Actividad Reciente
      </h2>

      <div className="space-y-5">

        <div>

          <p className="font-semibold">
            Nuevo cliente registrado
          </p>

          <span className="text-gray-500 text-sm">
            Hace 5 minutos
          </span>

        </div>

        <div>

          <p className="font-semibold">
            IA terminó un análisis
          </p>

          <span className="text-gray-500 text-sm">
            Hace 20 minutos
          </span>

        </div>

        <div>

          <p className="font-semibold">
            Se detectó una vulnerabilidad
          </p>

          <span className="text-gray-500 text-sm">
            Hace 40 minutos
          </span>

        </div>

      </div>

    </div>

  );
}