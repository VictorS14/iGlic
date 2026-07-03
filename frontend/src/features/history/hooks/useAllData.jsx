import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAllData = (userId) => {
   return useQuery({
      queryKey: ["allData", userId],
      queryFn: async () => {
         const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
         const baseUrl = `${apiUrl}/glicose`;

         const response = await axios.get(`${baseUrl}/all-data`, {
            params: { userId }
            
         });
         console.log("Dados agrupados por data:", response.data)
         return response.data;
      }
   });
};