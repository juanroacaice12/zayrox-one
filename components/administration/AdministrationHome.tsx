import AdministrationHeader from "./AdministrationHeader";
import AdministrationStats from "./AdministrationStats";
import UsersTable from "./UsersTable";
import RolesCard from "./RolesCard";
import AuditLogs from "./AuditLogs";
import LicensesCard from "./LicensesCard";
import SystemStatus from "./SystemStatus";

export default function AdministrationHome() {
  return (
    <div className="space-y-8">

      <AdministrationHeader />

      <AdministrationStats />

      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2">

          <UsersTable />

        </div>

        <RolesCard />

      </div>

      <div className="grid grid-cols-3 gap-6">

        <AuditLogs />

        <LicensesCard />

        <SystemStatus />

      </div>

    </div>
  );
}