import { useTargetRange } from "../../settings/store/useTargetRange"

export const WrapperOfMeasurements = ({openItemId, handleToggle, ...props}) => {
   const targetMin = useTargetRange((state) => state.minTarget)
   const targetMax = useTargetRange((state) => state.maxTarget)

  return (
   <div
      key={props.data}
      onClick={() => handleToggle(props.data)}
      className={`${openItemId === props.data ? "h-auto pb-2" : "min-h-10"} border rounded-md bg-gray-300`}
      >
         <div
         className={`${openItemId === props?.data ? "h-22" : ""} ${props?.media > targetMax ? "bg-red-600" : props?.media < targetMin ? "bg-orange-700" : "bg-green-700"} w-full h-10 pl-2 flex flex-col gap-2 border rounded-md`}
         >
         <span className="text-white">{props?.data}</span>
         <div className={`${openItemId === props.data ? "block" : "hidden"} border flex gap-4`}>
            <div className="w-11 h-11 bg-white border-none rounded-full flex flex-col items-center justify-center border">
               <span className="text-[min(3vw,1rem)]">
                  {props?.media}
               </span>
               <span className="text-[min(2vw,0.625rem)]">mg/dL</span>
            </div>
            <div className="w-11 h-11 bg-white border-none rounded-full flex flex-col items-center justify-center border">
               <span className="text-[min(3vw,1rem)]">
                  qtd
               </span>
            </div>
            <div className="w-11 h-11 bg-white border-none rounded-full flex flex-col items-center justify-center border">
               <span className="text-[min(3vw,1rem)]">
                  vari...
               </span>
            </div>
         </div>
         </div>
         <ul
         className={`${openItemId === props.data ? "block" : "hidden"} mt-2 space-y-1`}
         >
         {props?.registros?.map((reg) => (
            <li className="p-1 rounded-md flex items-center">
               <span>{reg?.timestamp}</span>
               <div
               className={`${reg?.value > 70 ? "bg-green-600" : "bg-orange-700"} font-medium ml-3 w-10 h-10 p-2 rounded-full flex items-center justify-center`}
               >
               {reg?.value}
               </div>
            </li>
         ))}
         </ul>
   </div>
  )
}
