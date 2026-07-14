import StatCard from "./StatCard";
import RevenueCard from "./RevenueCard";
import RecentSales from "./RecentSales";


import ModuleCard from "@/components/cards/ModuleCard";
import RobotStatusCard from "@/components/cards/RobotStatusCard";
import Tasks from "./Tasks";
import QuickActions from "./QuickActions";

export default function DashboardHome() {
  return (
    <div className="space-y-8">

      {/* KPIs */}

      <div className="grid grid-cols-4 gap-6">

        <StatCard
          title="Clientes Activos"
          value={1250}
          growth="+12.5%"
          icon="users"
        />

        <StatCard
          title="Ingresos"
          value={245000}
          growth="+18.3%"
          icon="money"
        />

        <StatCard
          title="Tareas"
          value={85}
          growth="+8.1%"
          icon="tasks"
        />

        <StatCard
          title="Alertas"
          value={7}
          growth="-22%"
          icon="shield"
        />

      </div>

      {/* Segunda fila */}

      <div className="grid grid-cols-4 gap-6">

        <div className="col-span-2">
          <RevenueCard />
        </div>

        <RecentSales />

        <RobotStatusCard />

      </div>

      {/* Módulos */}

      <div className="grid grid-cols-4 gap-6">

        <ModuleCard
          title="ZAYROX AI"
          description="Asistente inteligente para conversaciones y automatizaciones."
        />

        <ModuleCard
          title="CRM"
          description="Gestiona clientes, oportunidades y ventas."
        />

        <ModuleCard
          title="Ciberseguridad"
          description="Protege toda la infraestructura empresarial."
        />

        <ModuleCard
          title="Analítica"
          description="Dashboards inteligentes y KPIs."
        />

      </div>

      <div className="grid grid-cols-2 gap-6">

    <QuickActions />

    <Tasks />

</div>

    </div>
  );
}