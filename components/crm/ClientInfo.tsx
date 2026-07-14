import {
  Building2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

interface Props {
  company: string;
}

export default function ClientInfo({
  company,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

          <div className="rounded-3xl bg-blue-600 p-5 text-white">

            <Building2 size={34} />

          </div>

          <div>

            <h1 className="text-4xl font-black text-slate-900 dark:text-white">

              {company}

            </h1>

            <p className="text-slate-500 mt-2">

              Cliente Enterprise

            </p>

          </div>

        </div>

        <span className="rounded-full bg-green-100 px-4 py-2 font-bold text-green-700 dark:bg-green-900 dark:text-green-300">

          ACTIVO

        </span>

      </div>

      <div className="grid grid-cols-3 gap-6 mt-10">

        <div className="flex items-center gap-3">

          <Mail />

          satya@microsoft.com

        </div>

        <div className="flex items-center gap-3">

          <Phone />

          +57 3105551111

        </div>

        <div className="flex items-center gap-3">

          <MapPin />

          Bogotá

        </div>

      </div>

    </div>
  );
}