import AssetInfo from "./AssetInfo";
import AssetHealth from "./AssetHealth";
import AssetPorts from "./AssetPorts";
import AssetTimeline from "./AssetTimeline";
import AssetAI from "./AssetAI";

interface Props{
    hostname:string;
}

export default function AssetProfile({
    hostname,
}:Props){

    return(

        <div className="space-y-8">

            <AssetInfo hostname={hostname}/>

            <div className="grid grid-cols-3 gap-6">

                <AssetHealth/>

                <AssetPorts/>

                <AssetAI hostname={hostname}/>

            </div>

            <AssetTimeline/>

        </div>

    )

}