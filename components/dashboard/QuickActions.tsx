import {
    Bot,
    Users,
    Shield,
    BarChart3,
} from "lucide-react";

const actions = [
    {
        title: "ZAYROX AI",
        icon: Bot,
        color: "bg-blue-600",
    },
    {
        title: "CRM",
        icon: Users,
        color: "bg-green-600",
    },
    {
        title: "Seguridad",
        icon: Shield,
        color: "bg-red-600",
    },
    {
        title: "Analítica",
        icon: BarChart3,
        color: "bg-purple-600",
    },
];

export default function QuickActions() {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">

            <h2 className="font-bold text-xl mb-6 text-slate-900 dark:text-white">
                Accesos rápidos
            </h2>

            <div className="grid grid-cols-2 gap-4">

                {actions.map((action) => {

                    const Icon = action.icon;

                    return (

                        <button
                            key={action.title}
                            className="rounded-xl border p-5 hover:shadow-lg transition"
                        >

                            <div
                                className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center text-white mb-4`}
                            >
                                <Icon size={22} />
                            </div>

                            <p className="font-semibold text-slate-900 dark:text-white">
                                {action.title}
                            </p>

                        </button>

                    );

                })}

            </div>

        </div>
    );
}