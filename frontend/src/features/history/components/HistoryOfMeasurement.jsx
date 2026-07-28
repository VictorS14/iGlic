import { useState } from "react";
import { useAllData } from "../hooks/useAllData";
import { WrapperOfMeasurements } from "./WrapperOfMeasurements";
import { useAuth } from "../../../context/AuthContext.jsx";

export const HistoryOfMeasurement = () => {
  const [openItemId, setItemOpenId] = useState(null);
  const { user } = useAuth();
  const userId = user?.id;
  const { data } = useAllData(userId);

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
