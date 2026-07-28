import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../services/api.js";

export const useDeleteGlicose = () => {
   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: async ({ id }) => {
         const response = await api.delete(`/glicose/${id}`);
         return response.data;
      },

      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["recentReadings", "media"] });
      }
   })
}