export default function AssetHealth(){

    const data=[
        ["CPU","34%"],
        ["RAM","61%"],
        ["Disco","72%"],
        ["Temperatura","41°C"],
        ["Uptime","18 días"],
    ];

    return(

        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

            <h2 className="text-xl font-bold dark:text-white mb-6">

                Estado del Equipo

            </h2>

            <div className="space-y-4">

                {data.map(([name,value])=>(

                    <div
                        key={name}
                        className="flex justify-between"
                    >

                        <span>{name}</span>

                        <span className="font-bold">

                            {value}

                        </span>

                    </div>

                ))}

            </div>

        </div>

    )

}