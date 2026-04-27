import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useTargetRange = create(
   
persist(devtools((set) => ({
   veryHigh: 250,
   minTarget: 70,
   maxTarget: 170,
   setVeryHigh: (value) => {
      set({veryHigh: value}, false, "setVeryHigh");
   },
   setMinTarget: (value) => {
      set({ minTarget: value }, false, "setMinTarget");
   },

   setMaxTarget: (value) => {
      set({ maxTarget: value }, false, "setMaxTarget");
   },

})),
   { 
      name: "userSettings"
   }
   )
);