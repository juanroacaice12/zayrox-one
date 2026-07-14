import Link from "next/link";
import { Folder, ArrowRight } from "lucide-react";

interface Props{
    name:string;
    files:number;
}

export default function FolderCard({
    name,
    files,
}:Props){

    return(

        <Link
            href={`/documents/${encodeURIComponent(name)}`}
            className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-xl transition block"
        >

            <Folder
                size={42}
                className="text-amber-500"
            />

            <h2 className="mt-5 text-2xl font-bold dark:text-white">

                {name}

            </h2>

            <p className="mt-2 text-slate-500">

                {files} documentos

            </p>

            <div className="mt-8 flex items-center gap-2 font-semibold text-amber-500">

                Abrir carpeta

                <ArrowRight size={18}/>

            </div>

        </Link>

    )

}