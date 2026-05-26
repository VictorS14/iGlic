import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useSaveGlicose = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ userId, value, dateTime }) => {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
      const baseUrl = `${apiUrl}/glicose`;

      const response = await axios.post(baseUrl, {
        userId,
        glicoseValue: value,
        measure_at: dateTime
      });

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["recentReadings", "media"]);
    },
  });
};
