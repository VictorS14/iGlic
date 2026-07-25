import { useState } from "react";
import { useAllData } from "../hooks/useAllData";
import { WrapperOfMeasurements } from "./WrapperOfMeasurements";

export const HistoryOfMeasurement = () => {
  const [openItemId, setItemOpenId] = useState(null);
  const { data } = useAllData(1);

  const handleToggle = (itemId) => {
    setItemOpenId(openItemId === itemId ? null : itemId);
  };

  return (
    <div className=" flex flex-col gap-3">
      {data?.map((item) => (
        <WrapperOfMeasurements 
        openItemId={openItemId}
        handleToggle={handleToggle}
        {...item}
        />
      ))}
    </div>
  );
};
