import { useState } from "react";
import { VeryHigh } from "./VeryHigh";
import { TargetRange } from "./TargetRange";

export const TherapySettings = () => {
  const [veryHigh, setVeryHigh] = useState("");
  const [targetRangeMin, setTargetRangeMin] = useState("");
  const [targetRangeMax, setTargetRangeMax] = useState("");

  const maxVeryHigh = 600;
  const maxGlicoseValue = 210;
  const minGlicoseValue = 70;

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (newValue.length <= 3 && newValue <= maxVeryHigh) {
      setVeryHigh(newValue);
    }
  };

  const handleMinRangeChange = (e) => {
    const newValue = e.target.value;

    if (newValue.length <= 3) {
      setTargetRangeMin(newValue);
    }
  };

  console.log(targetRangeMin);

  const handleMaxRangeChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= 3) {
      setTargetRangeMax(newValue);
    }
  };

  const handleBlur = (setter, value) => {
    if (value === "") return;
    const num = Number(value);
    if (num < minGlicoseValue) {
      setter(minGlicoseValue.toString());
    } else if (num > maxGlicoseValue) {
      setter(maxGlicoseValue.toString());
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h1>Terapia</h1>
      <VeryHigh
        value={veryHigh}
        onChange={handleChange}
      />

      <TargetRange 
        targetRangeMin={targetRangeMin}
        targetRangeMax={targetRangeMax}
        setTargetRangeMin={setTargetRangeMin}
        setTargetRangeMax={setTargetRangeMax}
        handleMinRangeChange={handleMinRangeChange}
        handleMaxRangeChange={handleMaxRangeChange}
        handleBlur={handleBlur}
        minGlicoseValue={minGlicoseValue}
        maxGlicoseValue={maxGlicoseValue}
      />
    </div>
  );
};
