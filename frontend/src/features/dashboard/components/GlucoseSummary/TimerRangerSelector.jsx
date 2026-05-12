import { ButtonTimerSelector } from "../../ui/ButtonTimerSelector";

export const TimerRangerSelector = ({ selectedPeriod, setSelectedPeriod }) => {
  const handlerSelect = (ranger) => {
    setSelectedPeriod(ranger);
  };

  return (
    <div className="w-full h-8 flex border rounded-sm">
      <ButtonTimerSelector
        customClassName={"rounded-tl-sm rounded-bl-sm"}
        period={"Hoje"}
        handlerSelect={handlerSelect}
        selected={selectedPeriod}
      />

      <ButtonTimerSelector
        customClassName={"border-l border-r"}
        period={"7 Dias"}
        handlerSelect={handlerSelect}
        selected={selectedPeriod}
      />

      <ButtonTimerSelector
        customClassName={"rounded-tr-sm rounded-br-sm"}
        period={"30 Dias"}
        handlerSelect={handlerSelect}
        selected={selectedPeriod}
      />
    </div>
  );
};
