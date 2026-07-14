import IntegrationsHeader from "./IntegrationsHeader";
import IntegrationStats from "./IntegrationStats";
import IntegrationsGrid from "./IntegrationsGrid";

export default function IntegrationsHome() {
  return (
    <div className="space-y-8">

      <IntegrationsHeader />

      <IntegrationStats />

      <IntegrationsGrid />

    </div>
  );
}