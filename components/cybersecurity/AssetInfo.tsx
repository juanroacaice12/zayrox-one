import {
    Server,
    Globe,
    Cpu,
    HardDrive,
} from "lucide-react";

interface Props{
    hostname:string;
}

export default function AssetInfo({
    hostname,
}:Props){

    return(

        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">

            <div className="flex justify-between">

                <div className="flex items-center gap-5">

                    <div className="rounded-3xl bg-blue-600 p-5 text-white">

                        <Server size={34}/>

                    </div>

                    <div>

                        <h1 className="text-4xl font-black dark:text-white">

                            {hostname}

                        </h1>

                        <p className="text-slate-500 mt-2">

                            Ubuntu Server 24.04

                        </p>

                    </div>

                </div>

                <span className="rounded-full bg-green-100 dark:bg-green-900 px-4 py-2 font-bold text-green-700 dark:text-green-300">

                    ONLINE

                </span>

            </div>

            <div className="grid grid-cols-4 gap-6 mt-10">

                <div className="flex items-center gap-3">

                    <Globe/>

                    192.168.1.10

                </div>

                <div className="flex items-center gap-3">

                    <Cpu/>

                    34%

                </div>

                <div className="flex items-center gap-3">

                    <HardDrive/>

                    512GB

                </div>

                <div className="flex items-center gap-3">

                    <Server/>

                    Apache

                </div>

            </div>

        </div>

    )

}