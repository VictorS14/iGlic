import { useMutation, useQueryClient } from "@tanstack/react-query"; 
import api from "../../../services/api.js";

export const useEditingGlicose = () => {
   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: async ({ id, glicoseValue, measure_at }) => {
         const response = await api.put(`/glicose/${id}`, {
            glicoseValue,
            measure_at
         });
         
         return response.data;
      },

      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["recentReadings", "media"] });
      }
   })
}