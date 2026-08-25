import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useCurtainMenu = create(
   devtools(
      (set) => ({
         isMenuOpen: false,
         setIsMenuOpen: (value) => {
            set({ isMenuOpen: value }, false, "setIsMenuOpen");
         },

         toggleMenu: () => {
            set((state) => ({ isMenuOpen: !state.isMenuOpen }), false, "toggleMenu");
         },
      }),
      { name: "CurtainMenuStore" }
   )
)