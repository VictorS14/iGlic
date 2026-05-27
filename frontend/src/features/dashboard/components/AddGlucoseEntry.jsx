import { NewEntryModal } from "../ui/NewEntryModal";
import { AddGlucoseModal } from "./AddGlucoseModal/AddGlucoseModal";
import { useModalEntry } from "../store/useModalEntry";

export const AddGlucoseEntry = () => {
  const setterIsOpen = useModalEntry((state) => state.setIsOpen);
  const isOpen = useModalEntry((state) => state.isOpen);

  const handleToggleModal = () => {
    setterIsOpen(!isOpen);
  };

  return (
    <>
      <AddGlucoseModal 
      isOpen={isOpen} 
      handleToggleModal={handleToggleModal} 
      />
      <NewEntryModal 
      isOpen={isOpen} 
      handleToggleModal={handleToggleModal}
       />
    </>
  );
};
