
export const WrapperOfMeasurements = ({openItemId, handleToggle, ...props}) => {
  return (
   <div
      key={props.data}
      onClick={() => handleToggle(props.data)}
      className={`${openItemId === props.data ? "h-auto pb-2" : "min-h-10"} border rounded-md`}
      >
         <div
         className={`${openItemId === props.data ? "h-22" : ""} w-full h-10 pl-2 border rounded-md`}
         >
         <span>{props?.data}</span>
         </div>
         <ul
         className={`${openItemId === props.data ? "block" : "hidden"} mt-4 space-y-2`}
         >
         {props?.registros?.map((reg) => (
            <li className="p-3 border rounded-md flex items-center">
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
