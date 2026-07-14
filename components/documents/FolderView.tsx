import { Upload } from "lucide-react";
import DocumentCard from "./DocumentCard";
import AIAnalysisCard from "./AIAnalysisCard";

interface Props {
  folder: string;
}

const documents = [
  {
    name: "Contrato Microsoft.pdf",
    author: "Juan Camilo",
    date: "Hace 2 horas",
    size: "2.4 MB",
  },
  {
    name: "Contrato AWS.pdf",
    author: "María",
    date: "Hace 1 día",
    size: "3.1 MB",
  },
  {
    name: "Contrato Google.pdf",
    author: "Andrés",
    date: "Hace 4 días",
    size: "1.8 MB",
  },
  {
    name: "Contrato SAP.pdf",
    author: "Carlos",
    date: "Hace 1 semana",
    size: "4.6 MB",
  },
];

export default function FolderView({
  folder,
}: Props) {
  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-black dark:text-white">

            📁 {folder}

          </h1>

          <p className="mt-2 text-slate-500">

            Gestiona los documentos de esta carpeta.

          </p>

        </div>

        <button className="flex items-center gap-2 rounded-2xl bg-amber-500 px-5 py-3 text-white hover:bg-amber-600 transition">

          <Upload size={18}/>

          Subir Documento

        </button>

      </div>

      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2 space-y-5">

          {documents.map((doc)=>(

            <DocumentCard
              key={doc.name}
              {...doc}
            />

          ))}

        </div>

        <AIAnalysisCard />

      </div>

    </div>
  );
}