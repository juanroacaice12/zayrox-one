import DocumentPreview from "./DocumentPreview";
import DocumentInfo from "./DocumentInfo";
import AIChatDocument from "./AIChatDocument";

interface Props{
    document:string;
}

export default function DocumentViewer({
    document,
}:Props){

    return(

        <div className="grid grid-cols-3 gap-6 h-full">

            <div className="col-span-2 space-y-6">

                <DocumentInfo document={document}/>

                <DocumentPreview/>

            </div>

            <AIChatDocument/>

        </div>

    )

}