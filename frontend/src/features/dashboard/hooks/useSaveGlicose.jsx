import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../services/api.js";
import toast from "react-hot-toast";

export const useSaveGlicose = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ value, dateTime }) => {
      const response = await api.post("/glicose", {
        glicoseValue: value,
        measure_at: dateTime,
      });

      return response.data;
    },

    onSuccess: (_, variables) => {
      const userId = variables.userId;
      queryClient.invalidateQueries({ queryKey: ["recentReadings", userId] });
      queryClient.invalidateQueries({ queryKey: ["media", userId] });
      queryClient.invalidateQueries({ queryKey: ["allData", userId] });
      toast.success("Glicemia adicionada com sucesso!", { 
        duration: 2000,
        style: {background: "#b5cae8"}
       });
    },
  });
};
