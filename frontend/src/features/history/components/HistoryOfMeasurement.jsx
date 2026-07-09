import { useState } from "react";
import { useAllData } from "../hooks/useAllData";
import { WrapperOfMeasurements } from "./WrapperOfMeasurements";

export const HistoryOfMeasurement = () => {
  const [openItemId, setItemOpenId] = useState(null);
  const { data } = useAllData(8);
  console.log("🚀 ~ HistoryOfMeasurement ~ data:", data?.slice(0, 3));

  const history = data?.slice(0, 3);

  const handleToggle = (itemId) => {
    setItemOpenId(openItemId === itemId ? null : itemId);
  };

  return (
    <div className=" flex flex-col gap-3">
      {history?.map((item) => (
        <WrapperOfMeasurements 
        openItemId={openItemId}
        handleToggle={handleToggle}
        {...item}
        />
      ))}
    </div>
  );
};
