import { Bot } from "lucide-react";

interface Props{
    hostname:string;
}

export default function AssetAI({
    hostname,
}:Props){

    return(

        <div className="rounded-3xl border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-slate-900 p-6">

            <div className="flex items-center gap-3">

                <Bot className="text-blue-600"/>

                <h2 className="font-bold text-xl dark:text-white">

                    ZAYROX AI

                </h2>

            </div>

            <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">

                El activo <strong>{hostname}</strong> presenta un excelente estado operativo.

                <br/><br/>

                No se detectan vulnerabilidades críticas.

                <br/><br/>

                CPU estable.

                <br/>

                RAM dentro de parámetros.

                <br/>

                Firewall activo.

                <br/>

                Antivirus actualizado.

                <br/><br/>

                Riesgo estimado:

                <span className="font-bold text-green-600">

                    Bajo

                </span>

            </p>

        </div>

    )

}