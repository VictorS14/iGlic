import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const useModalEntry = create(
  persist(
    devtools((set) => ({
      isOpen: false,
      editingModalIsOpen: false,
      measurementToUpdate: {
        id: null,
        value: null,
        measure_at: null,
        timestamp: null
      },

      setIsOpen: (value) => {
        set({ isOpen: value }, false, "setIsOpen");
      },

      setEditingModalIsOpen: (value, data) => {
        set({ editingModalIsOpen: value, measurementToUpdate: data }, false, "setEditingModalIsOpen");
      },

      // setMeasurementToUpdate: (value) => {
      //   set({ measurementToUpdate: value }, false, "setMeasurementToUpdate");
      // }
      
    })),
  ),

  {
    name: "modalEntry",
  },
);
