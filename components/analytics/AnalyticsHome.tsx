import AnalyticsHeader from "./AnalyticsHeader";
import AnalyticsKPIs from "./AnalyticsKPIs";
import RevenueChart from "./RevenueChart";
import ModulePerformance from "./ModulePerformance";
import TopClients from "./TopClients";
import AIInsights from "./AIInsights";
import ExecutiveSummary from "./ExecutiveSummary";

export default function AnalyticsHome() {
  return (
    <div className="space-y-8">

      <AnalyticsHeader />

      <AnalyticsKPIs />

      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2">

          <RevenueChart />

        </div>

        <AIInsights />

      </div>

      <div className="grid grid-cols-3 gap-6">

        <ModulePerformance />

        <TopClients />

      </div>
      <ExecutiveSummary />

    </div>
  );
}