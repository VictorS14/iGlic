import { useQuery } from "@tanstack/react-query";
import api from "../../../services/api.js";

export const useAllData = (userId) => {
   return useQuery({
      queryKey: ["allData", userId],
      queryFn: async () => {
         const response = await api.get("/glicose/all-data");
         console.log("Dados agrupados por data:", response.data);
         return response.data;
      }
   });
};