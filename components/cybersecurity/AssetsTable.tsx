import AssetCard from "./AssetCard";

const assets = [
  {
    hostname: "WEB-01",
    ip: "192.168.1.10",
    os: "Ubuntu 24.04",
    risk: "Bajo",
    status: "Online",
  },
  {
    hostname: "DB-01",
    ip: "192.168.1.20",
    os: "Windows Server 2025",
    risk: "Medio",
    status: "Online",
  },
  {
    hostname: "API-01",
    ip: "192.168.1.30",
    os: "Docker",
    risk: "Alto",
    status: "Online",
  },
  {
    hostname: "FW-01",
    ip: "192.168.1.1",
    os: "Fortinet",
    risk: "Bajo",
    status: "Online",
  },
];

export default function AssetsTable() {
  return (
    <div className="grid grid-cols-2 gap-6">

      {assets.map((asset) => (

        <AssetCard
          key={asset.hostname}
          {...asset}
        />

      ))}

    </div>
  );
}