import ClientCard from "./ClientCard";

const clients = [
  {
    company: "Microsoft Colombia",
    contact: "Satya Nadella",
    email: "satya@microsoft.com",
    phone: "+57 310 555 1111",
    city: "Bogotá",
    revenue: "$245.000",
    status: "Activo",
  },
  {
    company: "Google LATAM",
    contact: "Sundar Pichai",
    email: "sundar@google.com",
    phone: "+57 311 888 1234",
    city: "Medellín",
    revenue: "$198.000",
    status: "Prospecto",
  },
  {
    company: "Amazon Web Services",
    contact: "Andy Jassy",
    email: "andy@amazon.com",
    phone: "+57 315 777 1212",
    city: "Cali",
    revenue: "$430.000",
    status: "Activo",
  },
  {
    company: "OpenAI",
    contact: "Sam Altman",
    email: "sam@openai.com",
    phone: "+1 555 222 1111",
    city: "San Francisco",
    revenue: "$520.000",
    status: "VIP",
  },
];

export default function ClientList() {
  return (
    <div className="grid grid-cols-2 gap-6">

      {clients.map((client) => (

        <ClientCard
          key={client.company}
          {...client}
        />

      ))}

    </div>
  );
}