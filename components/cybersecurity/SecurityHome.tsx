import SecurityHeader from "./SecurityHeader";
import SecurityStats from "./SecurityStats";
import ThreatChart from "./ThreatChart";
import ThreatsTable from "./ThreatsTable";
import AssetsCard from "./AssetsCard";
import AIRecommendation from "./AIRecommendation";
import SecurityScore from "./SecurityScore";
import LiveEvents from "./LiveEvents";
import TopThreats from "./TopThreats";

export default function SecurityHome() {
  return (
    <div className="space-y-8">

      <SecurityHeader />

      <SecurityStats />

      {/* Primera fila */}

      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2">

          <ThreatChart />

        </div>

        <SecurityScore />

      </div>

      {/* Segunda fila */}

      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2">

          <ThreatsTable />

        </div>

        <AIRecommendation />

      </div>

      {/* Tercera fila */}

      <div className="grid grid-cols-3 gap-6">

        <AssetsCard />

        <div className="col-span-2">

          <TopThreats />

        </div>

      </div>

      {/* Cuarta fila */}

      <LiveEvents />

    </div>
  );
}