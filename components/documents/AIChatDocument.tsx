import { Bot } from "lucide-react";

export default function AIChatDocument(){

    return(

        <div className="rounded-3xl border border-blue-200 dark:border-blue-900 bg-white dark:bg-slate-900 p-6 flex flex-col h-[820px]">

            <div className="flex items-center gap-3">

                <Bot className="text-blue-600"/>

                <h2 className="text-2xl font-bold dark:text-white">

                    ZAYROX AI

                </h2>

            </div>

            <div className="mt-8 flex-1 overflow-y-auto space-y-4">

                <div className="rounded-2xl bg-blue-600 text-white p-4">

                    Hola 👋

                    Ya analicé este documento.

                </div>

                <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 p-4">

                    Puedes preguntarme:

                    <br/><br/>

                    • Resume este contrato

                    <br/>

                    • ¿Cuándo vence?

                    <br/>

                    • ¿Qué riesgos existen?

                    <br/>

                    • ¿Qué obligaciones tiene?

                    <br/>

                    • Busca cláusulas importantes

                </div>

            </div>

            <div className="mt-6">

                <input
                    placeholder="Pregunta sobre el documento..."
                    className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 outline-none"
                />

            </div>

        </div>

    )

}