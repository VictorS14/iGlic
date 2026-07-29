import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../services/api.js";

export const useSaveGlicose = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ value, dateTime }) => {
      const response = await api.post("/glicose", {
        glicoseValue: value,
        measure_at: dateTime
      });

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recentReadings"] });
      queryClient.invalidateQueries({ queryKey: ["media"] });
    },
  });
};
