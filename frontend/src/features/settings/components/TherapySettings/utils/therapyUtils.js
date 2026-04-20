export const handleMinBlur = ({
   targetRangeMin, 
   targetRangeMax, 
   minGlicoseValue, 
   maxGlicoseValue, 
   setTargetRangeMin,
   setTargetRangeMax, 
   setMinTarget, 
   setMaxTarget
   }) => {
   
   if(targetRangeMin === "") return;
    let num = Number(targetRangeMin);

    if(num < minGlicoseValue) num = minGlicoseValue; 
    if(num > maxGlicoseValue) num = maxGlicoseValue;
    
    setTargetRangeMin(num.toString());
    setMinTarget(num.toString());

    const currentMax = Number(targetRangeMax);
    if(targetRangeMax !== "" && num >= currentMax) {
      const newMax = Math.min(num + 1, maxGlicoseValue);

      setTargetRangeMax(newMax.toString());
      setMaxTarget(newMax.toString());
    }
  };

export const handleMaxBlur = ({
   targetRangeMax, 
   targetRangeMin, 
   minGlicoseValue, 
   maxGlicoseValue, 
   setTargetRangeMax, 
   setMaxTarget
   }) => {
      
    if(targetRangeMax === "") return;
    let num = Number(targetRangeMax);

    if(num < minGlicoseValue) num = minGlicoseValue; 
    if(num > maxGlicoseValue) num = maxGlicoseValue;
    
    const currentMin = Number(targetRangeMin);
    if(targetRangeMin !== "" && num <= currentMin) {
      num = Math.min(currentMin + 1, maxGlicoseValue);

      setTargetRangeMax(num.toString());
      setMaxTarget(num.toString());
    }
  };