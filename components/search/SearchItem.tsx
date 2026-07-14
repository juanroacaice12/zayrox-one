"use client";

import Link from "next/link";

interface Props {
  title: string;
  subtitle: string;
  href: string;
}

export default function SearchItem({
  title,
  subtitle,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="block rounded-xl p-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
    >
      <h3 className="font-semibold dark:text-white">

        {title}

      </h3>

      <p className="text-sm text-slate-500">

        {subtitle}

      </p>

    </Link>
  );
}