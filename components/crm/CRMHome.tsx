import CRMHeader from "./CRMHeader";
import CRMStats from "./CRMStats";
import SearchBar from "./SearchBar";
import ClientGrid from "./ClientGrid";

export default function CRMHome() {
  return (
    <div className="space-y-8">

      <CRMHeader />

      <CRMStats />

      <SearchBar />

      <ClientGrid />

    </div>
  );
}