import { useState, useEffect } from "react";
import { MetricsCardsContainer } from "./MetricsCardsContainer";
import { TimerRangerSelector } from "./TimerRangerSelector";
import { useTargetRange } from "../../../settings/store/useTargetRange";
import axios from "axios";


export const GlucoseSummary = () => {
  const setMinTarget = useTargetRange((state) => state.setMinTarget);
  const setMaxTarget = useTargetRange((state) => state.setMaxTarget);
  const setVeryHighStore = useTargetRange((state) => state.setVeryHigh);

  const [selectedPeriod, setSelectedPeriod] = useState("Hoje");

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?.id || 8;

  useEffect(() => {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
      axios.get(`${apiUrl}/glicose/target-range`, {
        params: { userId: userId } 
      })
      .then(res => {
        setVeryHighStore(res.data.very_high)
        setMinTarget(res.data.target_range_min)
        setMaxTarget(res.data.target_range_max)
      })
      .catch(err => console.log(err));
    }, [])

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
