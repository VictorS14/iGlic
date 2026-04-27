import { useTargetRange } from "../../store/useTargetRange" 

export const TargetRange = ({
   targetRangeMin, 
   targetRangeMax,
   handleMinRangeChange,
   handleMaxRangeChange,
   handleMinBlur,
   handleMaxBlur,
   minGlicoseValue,
   maxGlicoseValue}) => {

   const targetMin = useTargetRange((state) => state.minTarget)
   const targetMax = useTargetRange((state) => state.maxTarget)

  return (
   <div className="h-18 flex gap-4 items-center">
      <div className="w-6 h-6 rounded-full bg-green-700"></div>
      <div className="flex flex-col">
         <p className="pl-2">Faixa Alvo</p>

         <div>
         <input
            className="w-12 h-8 border border-gray-400 outline-none pl-2 rounded-md"
            type="number"
            value={targetMin}
            onChange={handleMinRangeChange}
            onBlur={handleMinBlur}
            placeholder="70"
         />
         -
         <input
            className="w-12 h-8 border border-gray-400 outline-none pl-2 rounded-md"
            type="number"
            value={targetMax}
            onChange={handleMaxRangeChange}
            onBlur={handleMaxBlur}
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
