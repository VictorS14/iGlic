
export const VeryHigh = ({ veryHigh, handleChange}) => {
  return (
   <div className="h-18 flex gap-4 items-center">
      <div className="w-6 h-6 rounded-full bg-red-700"></div>
      <div className="flex flex-col">
         <p className="pl-2">Muito Alta</p>
         <input
         className="h-8 w-24 border border-gray-400 outline-none pl-2 rounded-md"
         type="number"
         value={veryHigh}
         onChange={handleChange}
         placeholder="220 mg/dL"
         />
      </div>
   </div>
  )
}
