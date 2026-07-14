import {
    UserPlus,
    FileText,
    ShieldAlert,
    Bot,
} from "lucide-react";

const activity = [

    {
        icon: UserPlus,
        color: "bg-green-500",
        title: "Nuevo cliente registrado",
        description: "Empresa XYZ SAS",
        time: "Hace 5 min",
    },

    {
        icon: ShieldAlert,
        color: "bg-red-500",
        title: "Alerta crítica",
        description: "Intento de acceso",
        time: "Hace 20 min",
    },

    {
        icon: FileText,
        color: "bg-blue-500",
        title: "Documento actualizado",
        description: "Contrato Comercial",
        time: "Hace 35 min",
    },

    {
        icon: Bot,
        color: "bg-violet-500",
        title: "IA terminó análisis",
        description: "Reporte generado",
        time: "Hace 1 hora",
    },

];

export default function RecentSales() {

    return (

        <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-xl font-bold text-slate-900 dark:text-white">

                    Actividad Reciente

                </h2>

                <button className="text-blue-600 dark:text-blue-300 text-sm font-semibold">

                    Ver todo

                </button>

            </div>

            <div className="space-y-5">

                {activity.map((item) => {

                    const Icon = item.icon;

                    return (

                        <div
                            key={item.title}
                            className="flex gap-4 items-start"
                        >

                            <div
                                className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center text-white shadow`}
                            >

                                <Icon size={18}/>

                            </div>

                            <div className="flex-1">

                                <p className="font-semibold text-slate-900 dark:text-white">

                                    {item.title}

                                </p>

                                <p className="text-slate-500 dark:text-slate-400 text-sm">

                                    {item.description}

                                </p>

                            </div>

                            <span className="text-xs text-slate-400 dark:text-slate-500">

                                {item.time}

                            </span>

                        </div>

                    )

                })}

            </div>

        </div>

    )

}