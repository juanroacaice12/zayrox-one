import {
  MoreHorizontal,
  Shield,
  User,
} from "lucide-react";

const users = [
  {
    name: "Juan Camilo",
    role: "Administrador",
    status: "Activo",
  },
  {
    name: "María Gómez",
    role: "Supervisor",
    status: "Activo",
  },
  {
    name: "Carlos Pérez",
    role: "Ventas",
    status: "Inactivo",
  },
  {
    name: "Laura Rodríguez",
    role: "Analista",
    status: "Activo",
  },
];

export default function UsersTable() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">

      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 p-6">

        <h2 className="text-2xl font-bold dark:text-white">
          Usuarios
        </h2>

      </div>

      <table className="w-full">

        <thead>

          <tr className="text-left text-slate-500">

            <th className="px-6 py-4">Usuario</th>

            <th>Rol</th>

            <th>Estado</th>

            <th></th>

          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr
              key={user.name}
              className="border-t border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >

              <td className="px-6 py-5">

                <div className="flex items-center gap-3">

                  <div className="rounded-full bg-blue-600 p-2 text-white">

                    <User size={18} />

                  </div>

                  <span className="font-semibold dark:text-white">

                    {user.name}

                  </span>

                </div>

              </td>

              <td>

                <div className="flex items-center gap-2">

                  <Shield size={16} />

                  {user.role}

                </div>

              </td>

              <td>

                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    user.status === "Activo"
                      ? "bg-green-500/10 text-green-500"
                      : "bg-red-500/10 text-red-500"
                  }`}
                >
                  {user.status}
                </span>

              </td>

              <td>

                <button>

                  <MoreHorizontal />

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}