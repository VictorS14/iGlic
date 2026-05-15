import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useRecentReadings = (userId) => {
   return useQuery({
      queryKey: ["recentReadings", userId],
      queryFn: async () => {
         const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
         const baseUrl = `${apiUrl}/glicose`

         const response = await axios.get(`${baseUrl}/recent-readings`, {params: { userId }})
         return response.data;
       }
   });
};
