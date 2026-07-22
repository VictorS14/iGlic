import { useState } from "react";
import { VeryHigh } from "./VeryHigh";
import { TargetRange } from "./TargetRange";
import { useTargetRange } from "../../store/useTargetRange.js";
import {handleMinBlur, handleMaxBlur } from "./utils/therapyUtils.js";
import { useSaveTargetRangeOnDB } from "../../hooks/useSaveTargetRangeOnDB.jsx";

export const TherapySettings = () => {
  const storedVeryHigh = useTargetRange((state) => state.veryHigh);
  const storedMin = useTargetRange((state) => state.minTarget);
  const storedMax = useTargetRange((state) => state.maxTarget);

  const [veryHigh, setVeryHigh] = useState(storedVeryHigh);
  const [targetRangeMin, setTargetRangeMin] = useState(storedMin);
  const [targetRangeMax, setTargetRangeMax] = useState(storedMax);

  const setMinTarget = useTargetRange((state) => state.setMinTarget);
  const setMaxTarget = useTargetRange((state) => state.setMaxTarget);
  const setVeryHighStore = useTargetRange((state) => state.setVeryHigh);

  const maxVeryHigh = 250;
  const maxGlicoseValue = 210;
  const minGlicoseValue = 70;

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?.id || 1; // o ID 8 é apenas para teste

  const saveTargetRangeOnDB = useSaveTargetRangeOnDB();

  const validateAndSet = (value, setter, storeSetter) => {
    if(value.length <= 3) {
      setter(value);
      if(storeSetter) storeSetter(value);
    }
  }

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (newValue.length <= maxVeryHigh) {
      validateAndSet(newValue, setVeryHigh, setVeryHighStore);
      saveTargetRangeOnDB.mutate({
        userId: userId,
        veryHigh: newValue,
        targetRangeMin: targetRangeMin,
        targetRangeMax: targetRangeMax
      });
    }
  };

  const handleMinRangeChange = (e) => {
    const newValue = e.target.value
    validateAndSet(newValue, setTargetRangeMin, setMinTarget);
    saveTargetRangeOnDB.mutate({
        userId: userId,
        veryHigh: veryHigh,
        targetRangeMin: newValue,
        targetRangeMax: targetRangeMax
      });
  };

  const handleMaxRangeChange = (e) => {
    const newValue = e.target.value 
    validateAndSet(newValue, setTargetRangeMax, setMaxTarget);
    saveTargetRangeOnDB.mutate({
        userId: userId,
        veryHigh: veryHigh,
        targetRangeMin: targetRangeMin,
        targetRangeMax: newValue 
      });
  };
  
  return (
    <div className="flex flex-col gap-6">
      <h1>Terapia</h1>
      <VeryHigh
        veryHigh={veryHigh}
        handleChange={handleChange}
      />

      <TargetRange 
        targetRangeMin={targetRangeMin}
        targetRangeMax={targetRangeMax}
        setTargetRangeMin={setTargetRangeMin}
        setTargetRangeMax={setTargetRangeMax}
        handleMinRangeChange={handleMinRangeChange}
        handleMaxRangeChange={handleMaxRangeChange}
        minGlicoseValue={minGlicoseValue}
        maxGlicoseValue={maxGlicoseValue}
        handleMinBlur={() => handleMinBlur({
          targetRangeMin, 
          targetRangeMax, 
          minGlicoseValue, 
          maxGlicoseValue, 
          setTargetRangeMin,
          setTargetRangeMax, 
          setMinTarget, 
          setMaxTarget
        })}
        handleMaxBlur={() => handleMaxBlur({
          targetRangeMax, 
          targetRangeMin, 
          minGlicoseValue, 
          maxGlicoseValue, 
          setTargetRangeMax, 
          setMaxTarget
        })}
      />
    </div>
  );
};
