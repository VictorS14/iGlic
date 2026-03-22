import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGlicoseAverage = (userId, selectedPeriod) => {
  return useQuery({
    queryKey: ["media", userId, selectedPeriod],
    queryFn: async () => {
      const baseUrl = "http://localhost:3000/glicose";

      if (selectedPeriod === "Hoje") {
        const response = await axios.get(`${baseUrl}/average`, {
          params: { userId },
        });
        return response.data;
      }

      const days = selectedPeriod.split(" ")[0];
      const response = await axios.get(`${baseUrl}/average-period`, {
        params: { userId, days },
      });
      return response.data;
    },
  });
};
