import { useState } from "react";
import { ButtonTimerSelector } from "../../ui/ButtonTimerSelector";

export const TimerRangerSelector = () => {
    const [selected, setSelected] = useState("Hoje");

    const hanlderSelect = (ranger) => {
        setSelected(ranger)
    }

  return (
    <div className="w-full h-8 flex border">
        <ButtonTimerSelector 
        ranger={"Hoje"}
        handlerSelect={hanlderSelect}
        selected={selected}
        />
        
        <ButtonTimerSelector 
        ranger={"7 Dias"}
        handlerSelect={hanlderSelect}
        selected={selected}
        />

        <ButtonTimerSelector 
        ranger={"30 Dias"}
        handlerSelect={hanlderSelect}
        selected={selected}
        />
    </div>
  )
}
