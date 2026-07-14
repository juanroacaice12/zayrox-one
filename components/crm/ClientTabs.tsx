export default function ClientTabs() {

  const tabs = [
    "Información",
    "Ventas",
    "Documentos",
    "Facturas",
    "Actividad",
    "IA",
  ];

  return (

    <div className="flex gap-3">

      {tabs.map((tab) => (

        <button
          key={tab}
          className="rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition"
        >
          {tab}
        </button>

      ))}

    </div>

  );

}