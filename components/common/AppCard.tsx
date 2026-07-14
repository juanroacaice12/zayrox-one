interface AppCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function AppCard({
  children,
  className = "",
}: AppCardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-slate-200
        dark:border-slate-800
        bg-gradient-to-br
        from-white
        to-slate-50
        dark:from-slate-900
        dark:to-slate-950
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}