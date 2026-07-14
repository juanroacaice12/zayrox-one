import AutomationCard from "./AutomationCard";

const automations = [
  {
    name: "Nuevo Cliente CRM",
    status: "Activa",
    runs: 132,
  },
  {
    name: "Enviar Factura",
    status: "Activa",
    runs: 98,
  },
  {
    name: "Bienvenida WhatsApp",
    status: "Activa",
    runs: 534,
  },
  {
    name: "Backup Nocturno",
    status: "Inactiva",
    runs: 0,
  },
  {
    name: "Reporte Diario",
    status: "Activa",
    runs: 365,
  },
  {
    name: "Seguimiento Comercial",
    status: "Activa",
    runs: 87,
  },
];

export default function AutomationGrid() {
  return (
    <div className="grid grid-cols-3 gap-6">

      {automations.map((automation) => (

        <AutomationCard
          key={automation.name}
          {...automation}
        />

      ))}

    </div>
  );
}