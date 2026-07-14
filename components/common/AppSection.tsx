interface Props {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export default function AppSection({
  title,
  subtitle,
  action,
}: Props) {
  return (
    <div className="flex justify-between items-center mb-6">

      <div>

        <h2 className="text-2xl font-bold">

          {title}

        </h2>

        {subtitle && (

          <p className="text-slate-500 mt-1">

            {subtitle}

          </p>

        )}

      </div>

      {action}

    </div>
  );
}