import { useMutation, useQueryClient } from "@tanstack/react-query"; 
import axios from "axios";

export const useEditingGlicose = () => {
   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: async ({id, userId, glicoseValue, measure_at}) => {
         const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
         const baseUrl = `${apiUrl}/glicose/${id}`;
         
         const response = await axios.put(baseUrl, {
            id: id,
            params: {
               userId,
               glicoseValue,
               measure_at
            }
         })

         return response.data;
      },

      onSuccess: () => {
         queryClient.invalidateQueries(["recentReadings", "media"]);
      }
   })
}