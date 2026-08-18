import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../services/api.js";

export const useDeleteGlicose = () => {
   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: async ({ id }) => {
         const response = await api.delete(`/glicose/${id}`);
         return response.data;
      },

      onSuccess: (_, variables) => {
         const userId = variables.userId;
         queryClient.invalidateQueries({ queryKey: ["recentReadings", userId] });
         queryClient.invalidateQueries({ queryKey: ["media", userId] });
         queryClient.invalidateQueries({ queryKey: ["allData", userId] });
      }
   })
}