import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../services/api.js";

export const useSaveTargetRangeOnDB = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      veryHigh,
      targetRangeMin,
      targetRangeMax,
    }) => {
      const response = await api.post("/glicose/target-range", {
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
