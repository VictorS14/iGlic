import { FaPlus } from "react-icons/fa6";

export const NewEntryModal = ({isOpen, handleToggleModal}) => {
  return (
   <button 
   className={`${isOpen ? "hidden" : "block"} fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all active:scale-95 z-50 cursor-pointer`}
   onClick={handleToggleModal}>
      <FaPlus size={24} />
   </button> 
  )
};
