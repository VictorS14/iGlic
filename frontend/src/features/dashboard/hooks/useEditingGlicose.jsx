import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../services/api.js";
import toast from "react-hot-toast";

export const useEditingGlicose = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, glicoseValue, measure_at }) => {
      const response = await api.put(`/glicose/${id}`, {
        glicoseValue,
        measure_at,
      });

      return response.data;
    },

    onSuccess: (_, variables) => {
      const userId = variables.userId;

      queryClient.invalidateQueries({ queryKey: ["recentReadings"] });
      queryClient.invalidateQueries({ queryKey: ["media"] });
      queryClient.invalidateQueries({ queryKey: ["allData", userId] });
      toast.success("Glicemia atualizada com sucesso!", {
        duration: 2000,
        style: { background: "#b5cae8" },
      });
    },
  });
};
