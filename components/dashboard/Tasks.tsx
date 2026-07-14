const tasks = [
    "Revisar nuevas ventas",
    "Responder tickets",
    "Actualizar CRM",
    "Revisar vulnerabilidades",
];

export default function Tasks() {
    return (

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">

            <h2 className="font-bold text-xl mb-6 text-slate-900 dark:text-white">
                Tareas del día
            </h2>

            <div className="space-y-4">

                {tasks.map((task) => (

                    <div
                        key={task}
                        className="flex items-center gap-3"
                    >

                        <div className="w-3 h-3 rounded-full bg-blue-600"/>

                        <p className="text-slate-700 dark:text-slate-300">{task}</p>

                    </div>

                ))}

            </div>

        </div>

    );
}