"use client";

import { useState } from "react";
import { integrations } from "./integrations";
import IntegrationCard from "./IntegrationCard";
import IntegrationDrawer from "./IntegrationDrawer";

export default function IntegrationsGrid() {

  const [selected, setSelected] = useState<any>(null);

  return (
    <>

      <div className="grid grid-cols-3 gap-6">

        {integrations.map((integration) => (

          <IntegrationCard
            key={integration.id}
            {...integration}
            onOpen={() => setSelected(integration)}
          />

        ))}

      </div>

      <IntegrationDrawer
        integration={selected}
        onClose={() => setSelected(null)}
      />

    </>
  );
}