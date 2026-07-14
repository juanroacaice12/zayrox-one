interface Props {
  title: string;
  description: string;
  time: string;
  unread: boolean;
}

export default function NotificationCard({
  title,
  description,
  time,
  unread,
}: Props) {

  return (

    <div className={`border-b border-slate-200 dark:border-slate-800 p-5 hover:bg-slate-50 dark:hover:bg-slate-800 transition ${unread ? "bg-blue-50 dark:bg-slate-800" : ""}`}>

      <div className="flex justify-between">

        <h3 className="font-bold dark:text-white">

          {title}

        </h3>

        {unread && (

          <span className="h-3 w-3 rounded-full bg-blue-600"/>

        )}

      </div>

      <p className="mt-2 text-sm text-slate-500">

        {description}

      </p>

      <p className="mt-3 text-xs text-slate-400">

        {time}

      </p>

    </div>

  );

}