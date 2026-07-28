import { useQuery } from "@tanstack/react-query";
import api from "../../../services/api.js";

export const useRecentReadings = (userId) => {
   return useQuery({
      queryKey: ["recentReadings", userId],
      queryFn: async () => {
         const response = await api.get("/glicose/recent-readings");
         return response.data;
       }
   });
};
