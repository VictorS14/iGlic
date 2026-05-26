import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useDeleteGlicose = () => {
   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: async ({id, userId}) => {
         const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
         const baseUrl = `${apiUrl}/glicose/${id}`;

         const response = await axios.delete(baseUrl, {
            id: id,
            params: {userId}
         })

         return response.data;
      },

      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["recentReadings"] })
      }
   })
}