import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useTargetRange = create(
devtools((set) => ({
   veryHigh: 0,
   minTarget: 0,
   maxTarget: 0,
   setVeryHigh: (value) => {
      set({veryHigh: value}, false, "setVeryHigh");
   },
   setMinTarget: (value) => {
      set({ minTarget: value }, false, "setMinTarget");
   },

   setMaxTarget: (value) => {
      set({ maxTarget: value }, false, "setMaxTarget");
   }
})));