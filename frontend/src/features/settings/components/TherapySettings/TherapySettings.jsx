import { useState } from "react";
import { VeryHigh } from "./VeryHigh";
import { TargetRange } from "./TargetRange";
import { useTargetRange } from "../../store/useTargetRange.js";
import {handleMinBlur, handleMaxBlur } from "./utils/therapyUtils.js";

export const TherapySettings = () => {
  const [veryHigh, setVeryHigh] = useState("");
  const [targetRangeMin, setTargetRangeMin] = useState("");
  const [targetRangeMax, setTargetRangeMax] = useState("");
  const setMinTarget = useTargetRange((state) => state.setMinTarget);
  const setMaxTarget = useTargetRange((state) => state.setMaxTarget);
  const setVeryHighStore = useTargetRange((state) => state.setVeryHigh);

  const userSettings = {
    veryHigh,
    targetRangeMin,
    targetRangeMax
  }

  // TODO: Esses valores devem ser migrados para uma tabela no banco de dados
  localStorage.setItem('userSettings', JSON.stringify(userSettings));

  const maxVeryHigh = 250;
  const maxGlicoseValue = 210;
  const minGlicoseValue = 70;

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (newValue.length <= 3 && newValue <= maxVeryHigh) {
      setVeryHigh(newValue);
      if(setVeryHighStore) setVeryHighStore(newValue);
    }
  };

  const handleMinRangeChange = (e) => {
    const newValue = e.target.value;

    if (newValue.length <= 3) {
      setTargetRangeMin(newValue);
      setMinTarget(newValue);
    }
  };

  const handleMaxRangeChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= 3) {
      setTargetRangeMax(newValue);
      setMaxTarget(newValue);
    }
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
