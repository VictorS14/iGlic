import { useState } from "react";
import { useAllData } from "../hooks/useAllData";
import { WrapperOfMeasurements } from "./WrapperOfMeasurements";
import { useAuth } from "../../../context/AuthContext.jsx";

export const HistoryOfMeasurement = () => {
  const [openItemIds, setOpenItemIds] = useState(new Set());
  const { user } = useAuth();
  const userId = user?.id;
  const { data, status } = useAllData(userId);

  const handleToggle = (itemId) => {
    setOpenItemIds((prev) => {
      const newSet = new Set(prev);

      if(newSet.has(itemId)){
        newSet.delete(itemId);
      }else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  return (
    <div className=" flex flex-col gap-3">
      {status === "loading" && <div>Carregando...</div>}
      {status === "error" && <div>Error ao carregar dados</div>}
      
      {status === "success" && (
        data?.length > 0 ? (
          data.map((item) => (
            <WrapperOfMeasurements 
            openItemIds={openItemIds}
            handleToggle={handleToggle}
            {...item}
            />
          ))
        ) : (
          <div>Nenhum dado encontrado.</div>
        )
      )}
    </div>
  );
};
