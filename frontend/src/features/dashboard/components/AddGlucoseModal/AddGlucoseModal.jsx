import { IoClose } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io"; 

export const AddGlucoseModal = () => {
  return (
    <div className="w-85 h-80 bg-white border rounded-md">
      <div className="w-full h-14 p-2 flex items-center justify-between border-b border-gray-300">
         <button><IoClose size={20}/></button> 
         <button><IoMdCheckmark size={20}/></button>
      </div>

      <div className="w-full h-16 flex items-center p-2 gap-16 border-b border-gray-300">
        <label>Horário</label>
        <div>19:14 19/05/26</div>
      </div>

      <div className="w-full h-16 flex items-center p-2 gap-16 border-b border-gray-300">
        <label>Glicemia</label>
        <div className="flex gap-4">
         <div className="w-6 h-6 rounded-full bg-green-700"></div>
         <input
         className="w-20 font-semibold outline-none" 
         type="number"
         placeholder="-" />
        </div>
      </div>
    </div>
  )
}
