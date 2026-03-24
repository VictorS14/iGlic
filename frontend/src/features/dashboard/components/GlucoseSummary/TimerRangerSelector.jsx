import { ButtonTimerSelector } from "../../ui/ButtonTimerSelector";

export const TimerRangerSelector = ({ selectedPeriod, setSelectedPeriod }) => {
  const handlerSelect = (ranger) => {
    setSelectedPeriod(ranger);
  };

  return (
    <div className="w-full h-8 flex border">
      <ButtonTimerSelector
        period={"Hoje"}
        handlerSelect={handlerSelect}
        selected={selectedPeriod}
      />

      <ButtonTimerSelector
        period={"7 Dias"}
        handlerSelect={handlerSelect}
        selected={selectedPeriod}
      />

      <ButtonTimerSelector
        period={"30 Dias"}
        handlerSelect={handlerSelect}
        selected={selectedPeriod}
      />
    </div>
  );
};
