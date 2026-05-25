import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";

import { useSaveGlicose } from "../../hooks/useSaveGlicose";

export const AddGlucoseModal = ({ isOpen, handleToggleModal }) => {
  const now = new Date();
  const formattedDate = new Date(
    now.getTime() - now.getTimezoneOffset() * 60000,
  )
    .toISOString()
    .slice(0, 16);

    const handleClose = () => {
      setGlucoseValue("");
      handleToggleModal();
    }

  const saveGlicose = useSaveGlicose();

  const [dateTime, setDateTime] = useState(formattedDate);
  const [glucoseValue, setGlucoseValue] = useState("");

  return (
    <div
      className={`${isOpen ? "block" : "hidden"} w-[min(90vw,400px)] h-80 bg-white border rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
    >
      <div className="w-full h-14 p-2 flex items-center justify-between border-b border-gray-300">
        <button>
          <IoClose size={20} onClick={handleClose} />
        </button>
        <button>
          <IoMdCheckmark
            size={20}
            onClick={() => {
              saveGlicose.mutate({
                userId: 8,
                value: glucoseValue,
                dateTime: dateTime,
              });
              handleClose();
            }}
          />
        </button>
      </div>

      <div className="w-full h-16 flex items-center p-2 gap-2 [@media_(min-width:375px)]:gap-14 border-b border-gray-300">
        <label htmlFor="time">Horário:</label>
        <input
          className="border p-2"
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
      </div>

      <div className="w-full h-16 flex items-center p-2 gap-16 border-b border-gray-300">
        <label htmlFor="glucose">Glicemia:</label>
        <div className="flex gap-4">
          <div className="w-6 h-6 rounded-full bg-green-700"></div>
          <input
            className="w-20 font-semibold outline-none"
            type="number"
            placeholder="-"
            value={glucoseValue}
            onChange={(e) => {
              if(e.target.value.length <= 3) {
                setGlucoseValue(e.target.value)
              }
            }}
          />
          <span className="text-gray-500 self-end">mg/dL</span>
        </div>
      </div>
    </div>
  );
};
