import {
  FileText,
  Download,
  Eye,
  Bot,
} from "lucide-react";

interface Props {
  name: string;
  author: string;
  date: string;
  size: string;
}

export default function DocumentCard({
  name,
  author,
  date,
  size,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <FileText
            size={38}
            className="text-red-500"
          />

          <div>

            <h2 className="font-bold text-lg dark:text-white">

              {name}

            </h2>

            <p className="text-sm text-slate-500">

              {author} • {date}

            </p>

            <p className="text-xs text-slate-400">

              {size}

            </p>

          </div>

        </div>

        <div className="flex gap-2">

          <button className="rounded-xl bg-slate-100 dark:bg-slate-800 p-3">

            <Eye size={18}/>

          </button>

          <button className="rounded-xl bg-slate-100 dark:bg-slate-800 p-3">

            <Download size={18}/>

          </button>

          <button className="rounded-xl bg-blue-600 p-3 text-white hover:bg-blue-700">

            <Bot size={18}/>

          </button>

        </div>

      </div>

    </div>
  );
}