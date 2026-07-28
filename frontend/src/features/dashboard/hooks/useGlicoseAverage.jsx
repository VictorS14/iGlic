import { useQuery } from "@tanstack/react-query";
import api from "../../../services/api.js";

export const useGlicoseAverage = (userId, selectedPeriod) => {
  return useQuery({
    queryKey: ["media", userId, selectedPeriod],
    queryFn: async () => {  

      if (selectedPeriod === "Hoje") {
        const response = await api.get("/glicose/average");
        return response.data;
      }

      const days = selectedPeriod.split(" ")[0];
      const response = await api.get("/glicose/average-period", {
        params: { days },
      });
      return response.data;
    },
  });
};
