import {
    Shield,
    ScanSearch,
    Database,
    Lock,
} from "lucide-react";

const timeline=[

{
    icon:Shield,
    title:"Firewall bloqueó conexión",
    time:"Hace 2 minutos",
    color:"text-green-500",
},

{
    icon:ScanSearch,
    title:"Escaneo finalizado",
    time:"Hace 12 minutos",
    color:"text-blue-500",
},

{
    icon:Database,
    title:"Backup realizado",
    time:"Hace 40 minutos",
    color:"text-purple-500",
},

{
    icon:Lock,
    title:"Inicio de sesión administrador",
    time:"Hace 1 hora",
    color:"text-orange-500",
},

];

export default function AssetTimeline(){

    return(

        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

            <h2 className="text-2xl font-bold dark:text-white mb-6">

                Actividad Reciente

            </h2>

            <div className="space-y-5">

                {timeline.map((event)=>{

                    const Icon=event.icon;

                    return(

                        <div
                            key={event.title}
                            className="flex items-center justify-between"
                        >

                            <div className="flex items-center gap-4">

                                <Icon
                                    className={event.color}
                                />

                                <div>

                                    <h3 className="font-semibold dark:text-white">

                                        {event.title}

                                    </h3>

                                    <p className="text-sm text-slate-500">

                                        {event.time}

                                    </p>

                                </div>

                            </div>

                            <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"/>

                        </div>

                    )

                })}

            </div>

        </div>

    )

}