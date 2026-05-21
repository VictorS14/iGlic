import {useState} from "react";
import { NewEntryModal } from "../ui/NewEntryModal";
import { AddGlucoseModal } from "./AddGlucoseModal/AddGlucoseModal";

export const AddGlucoseEntry = () => {
   const [isOpen, setIsOpen] = useState(false);
   
   const handleToggleModal = () => {
     setIsOpen(!isOpen);
   }

  return (
    <>
      <AddGlucoseModal 
      isOpen={isOpen}
      handleToggleModal={handleToggleModal}/>
      <NewEntryModal 
      isOpen={isOpen}
      handleToggleModal={handleToggleModal}
      />
    </>
  )
}
