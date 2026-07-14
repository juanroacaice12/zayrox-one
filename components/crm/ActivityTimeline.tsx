export default function ActivityTimeline() {

  const timeline = [

    {
      title: "Reunión Comercial",
      time: "Hace 2 horas",
    },

    {
      title: "Se envió una cotización",
      time: "Ayer",
    },

    {
      title: "Contrato firmado",
      time: "Hace 4 días",
    },

    {
      title: "Cliente creado",
      time: "Hace 10 días",
    },

  ];

  return (

    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <h2 className="text-2xl font-bold mb-6 dark:text-white">

        Actividad

      </h2>

      <div className="space-y-5">

        {timeline.map((item) => (

          <div
            key={item.title}
            className="border-l-4 border-blue-600 pl-5"
          >

            <h3 className="font-bold dark:text-white">

              {item.title}

            </h3>

            <p className="text-slate-500">

              {item.time}

            </p>

          </div>

        ))}

      </div>

    </div>

  );

}