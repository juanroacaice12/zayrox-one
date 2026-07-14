"use client";

import { notifications } from "./notifications";
import NotificationCard from "./NotificationCard";

export default function NotificationPanel() {

  return (

    <div className="absolute right-0 mt-4 w-[420px] rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl z-50">

      <div className="border-b border-slate-200 dark:border-slate-800 p-5">

        <h2 className="text-xl font-bold dark:text-white">

          Notificaciones

        </h2>

      </div>

      <div className="max-h-[500px] overflow-y-auto">

        {notifications.map(notification => (

          <NotificationCard
            key={notification.id}
            {...notification}
          />

        ))}

      </div>

    </div>

  );

}