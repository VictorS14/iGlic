import {useState} from "react";
import { GlucoseSummary } from "../components/GlucoseSummary/GlucoseSummary";
import { RecentReadings } from "../components/RecentReadings/RecentReadings";
import { NewEntryModal } from "../ui/NewEntryModal";
import { AddGlucoseModal } from "../components/AddGlucoseModal/AddGlucoseModal";

export const Dashboard = () => {
const [isOpen, setIsOpen] = useState(false);

const handleToggleModal = () => {
  setIsOpen(!isOpen)
}

  return (
    <div className="w-full min-h-dvh border flex flex-col gap-2">
      <GlucoseSummary />
      <RecentReadings />
      <AddGlucoseModal 
      isOpen={isOpen}
      handleToggleModal={handleToggleModal}/>
      <NewEntryModal 
      isOpen={isOpen}
      handleToggleModal={handleToggleModal}
      />
    </div>
  );
};
