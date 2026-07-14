import AutomationHeader from "./AutomationHeader";
import AutomationStats from "./AutomationStats";
import AutomationGrid from "./AutomationGrid";

export default function AutomationHome() {
  return (
    <div className="space-y-8">

      <AutomationHeader />

      <AutomationStats />

      <AutomationGrid />

    </div>
  );
}