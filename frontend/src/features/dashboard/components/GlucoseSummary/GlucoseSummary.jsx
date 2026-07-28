import { useState, useEffect } from "react";
import { MetricsCardsContainer } from "./MetricsCardsContainer";
import { TimerRangerSelector } from "./TimerRangerSelector";
import { useTargetRange } from "../../../settings/store/useTargetRange";
import { useAuth } from "../../../../context/AuthContext.jsx";
import api from "../../../../services/api.js";

export const GlucoseSummary = () => {
  const { user } = useAuth();
  const userId = user?.id;

  const setMinTarget = useTargetRange((state) => state.setMinTarget);
  const setMaxTarget = useTargetRange((state) => state.setMaxTarget);
  const setVeryHighStore = useTargetRange((state) => state.setVeryHigh);

  const [selectedPeriod, setSelectedPeriod] = useState("Hoje");

  useEffect(() => {
      if (!userId) return; // Evita chamar a API sem usuário logado

      api.get("/glicose/target-range")
      .then(res => {
        setVeryHighStore(res.data.very_high)
        setMinTarget(res.data.target_range_min)
        setMaxTarget(res.data.target_range_max)
      })
      .catch(err => console.log(err));
    }, [userId])

  return (
    <div className="w-full h-48 flex flex-col gap-2">
      <TimerRangerSelector
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />
      <MetricsCardsContainer selectedPeriod={selectedPeriod} />
    </div>
  );
};
