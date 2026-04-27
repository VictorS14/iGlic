import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useTargetRange = create(
   
persist(devtools((set) => ({
   veryHigh: "",
   minTarget: "",
   maxTarget: "",
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