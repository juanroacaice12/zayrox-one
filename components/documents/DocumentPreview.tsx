export default function DocumentPreview(){

    return(

        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-[700px] flex items-center justify-center">

            <div className="text-center">

                <h2 className="text-3xl font-bold dark:text-white">

                    Vista previa del documento

                </h2>

                <p className="mt-4 text-slate-500">

                    Aquí aparecerá el PDF, Word o Excel.

                </p>

            </div>

        </div>

    )

}