import {
    FileText,
    Calendar,
    User,
} from "lucide-react";

interface Props{
    document:string;
}

export default function DocumentInfo({
    document,
}:Props){

    return(

        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

            <div className="flex items-center gap-5">

                <FileText
                    className="text-red-500"
                    size={42}
                />

                <div>

                    <h1 className="text-3xl font-bold dark:text-white">

                        {document}

                    </h1>

                    <div className="mt-3 flex gap-8 text-slate-500">

                        <span className="flex items-center gap-2">

                            <User size={16}/>

                            Juan Camilo

                        </span>

                        <span className="flex items-center gap-2">

                            <Calendar size={16}/>

                            Hace 2 horas

                        </span>

                    </div>

                </div>

            </div>

        </div>

    )

}