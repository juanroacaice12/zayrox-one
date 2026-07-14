import Link from "next/link";

import {
  Building2,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  ArrowRight,
} from "lucide-react";

interface ClientProps {
  company: string;
  contact: string;
  email: string;
  phone: string;
  city: string;
  revenue: string;
  status: string;
}

export default function ClientCard({
  company,
  contact,
  email,
  phone,
  city,
  revenue,
  status,
}: ClientProps) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-200
      dark:border-slate-800
      bg-white
      dark:bg-slate-900
      p-6
      shadow-sm
      hover:shadow-lg
      transition-all
      duration-300
      "
    >

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-2xl bg-blue-600 p-3 text-white">

            <Building2 size={22} />

          </div>

          <div>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white">

              {company}

            </h2>

            <p className="text-slate-500">

              {contact}

            </p>

          </div>

        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700 dark:bg-green-900 dark:text-green-300">

          {status}

        </span>

      </div>

      <div className="mt-6 space-y-3">

        <div className="flex items-center gap-3">

          <Mail size={17} />

          {email}

        </div>

        <div className="flex items-center gap-3">

          <Phone size={17} />

          {phone}

        </div>

        <div className="flex items-center gap-3">

          <MapPin size={17} />

          {city}

        </div>

        <div className="flex items-center gap-3 font-bold text-blue-600">

          <DollarSign size={17} />

          {revenue}

        </div>

      </div>

      <Link
    href={`/crm/${company}`}
    className="
    mt-6
    inline-flex
    items-center
    gap-2
    font-semibold
    text-blue-600
    hover:gap-3
    transition-all
    "
>

    Ver Perfil

    <ArrowRight size={18} />

</Link>

    </div>
  );
}