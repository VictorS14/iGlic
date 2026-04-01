import { useState } from "react";
import { MetricsCardsContainer } from "./MetricsCardsContainer";
import { TimerRangerSelector } from "./TimerRangerSelector";

export const GlucoseSummary = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Hoje");

  return (
    <div className="w-full h-48 flex flex-col gap-2 border">
      <TimerRangerSelector
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />
      <MetricsCardsContainer selectedPeriod={selectedPeriod} />
    </div>
  );
};
