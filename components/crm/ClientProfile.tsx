import ClientInfo from "./ClientInfo";
import ClientTabs from "./ClientTabs";
import ActivityTimeline from "./ActivityTimeline";
import AIInsights from "./AIInsights";

interface Props {
  company: string;
}

export default function ClientProfile({
  company,
}: Props) {

  return (

    <div className="space-y-8">

      <ClientInfo company={company} />

      <ClientTabs />

      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2">

          <ActivityTimeline />

        </div>

        <AIInsights company={company} />

      </div>

    </div>

  );

}