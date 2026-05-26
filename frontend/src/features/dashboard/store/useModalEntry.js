import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const useModalEntry = create(
  persist(
    devtools((set) => ({
      isOpen: false,
      editingModalIsOpen: false,

      setIsOpen: (value) => {
        set({ isOpen: value }, false, "setIsOpen");
      },

      setEditingModalIsOpen: (value) => {
        set({ editingModalIsOpen: value }, false, "setEditingModalIsOpen");
      },
    })),
  ),

  {
    name: "modalEntry",
  },
);
