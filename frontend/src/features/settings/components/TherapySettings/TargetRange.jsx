export const TargetRange = ({
   targetRangeMin, 
   targetRangeMax,
   setTargetRangeMin,
   setTargetRangeMax,
   handleMinRangeChange,
   handleMaxRangeChange,
   handleBlur,
   minGlicoseValue,
   maxGlicoseValue}) => {

  return (
   <div className="h-18 flex gap-4 items-center">
      <div className="w-6 h-6 rounded-full bg-green-700"></div>
      <div className="flex flex-col">
         <p className="pl-2">Faixa Alvo</p>

         <div>
         <input
            className="w-12 h-8 border border-gray-400 outline-none pl-2 rounded-md"
            type="number"
            value={targetRangeMin}
            onChange={handleMinRangeChange}
            onBlur={() => handleBlur(setTargetRangeMin, targetRangeMin)}
            placeholder="70"
         />
         -
         <input
            className="w-12 h-8 border border-gray-400 outline-none pl-2 rounded-md"
            type="number"
            value={targetRangeMax}
            onChange={handleMaxRangeChange}
            onBlur={() => handleBlur(setTargetRangeMax, targetRangeMax)}
            placeholder="160"
         />
         <p
            className={`${targetRangeMin < minGlicoseValue ? "display-block text-red-400" : "hidden"} text-[0.625rem]`}
         >
            Valor minímo é apartir de {minGlicoseValue}
         </p>
         <p
            className={`${targetRangeMax > maxGlicoseValue ? "display-block text-red-400" : "hidden"} text-[0.625rem]`}
         >
            Valor máximo da faixa alvo é {maxGlicoseValue}
         </p>
         </div>
      </div>
   </div>
  )
}
