interface Props {

    title:string;

    description:string;

}

export default function ModuleCard({

title,

description,

}:Props){

return(

<div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 p-7">

<div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl">

🚀

</div>

<h2 className="font-bold text-xl mt-6 text-slate-900 dark:text-white">

{title}

</h2>

<p className="text-slate-500 dark:text-slate-400 mt-3">

{description}

</p>

<button className="mt-7 bg-blue-600 hover:bg-blue-700 transition text-white rounded-xl px-5 py-3">

Abrir módulo

</button>

</div>

)

}