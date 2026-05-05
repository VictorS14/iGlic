import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useSaveTargetRangeOnDB = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      userId,
      veryHigh,
      targetRangeMin,
      targetRangeMax,
    }) => {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
      const baseUrl = `${apiUrl}/glicose`;

      const response = await axios.post(`${baseUrl}/target-range`, {
        userId,
        veryHigh,
        targetRangeMin,
        targetRangeMax,
      });

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["target-range"] });
    },
  });
};
