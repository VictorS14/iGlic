import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { useSaveGlicose } from "../../hooks/useSaveGlicose";
import { useEditingGlicose } from "../../hooks/useEditingGlicose";
import { useModalEntry } from "../../store/useModalEntry";
import { useTargetRange } from "../../../settings/store/useTargetRange";

export const AddGlucoseModal = ({ isOpen, handleToggleModal }) => {
  const now = new Date();
  const formattedDate = new Date(
    now.getTime() - now.getTimezoneOffset() * 60000,
  )
    .toISOString()
    .slice(0, 16);

  const saveGlicose = useSaveGlicose();
  const editingGlicose = useEditingGlicose();

  const [dateTime, setDateTime] = useState(formattedDate);
  const [glucoseValue, setGlucoseValue] = useState("");

  const setterEditingModalIsOpen = useModalEntry(
    (state) => state.setEditingModalIsOpen,
  );
  const editingModalIsOpen = useModalEntry((state) => state.editingModalIsOpen);
  const measurementToUpdate = useModalEntry(
    (state) => state.measurementToUpdate,
  );

  const targetMin = useTargetRange((state) => state.minTarget);
  const targetMax = useTargetRange((state) => state.maxTarget);


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      if (editingModalIsOpen && measurementToUpdate) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setGlucoseValue(measurementToUpdate.value);

        const parts = measurementToUpdate.measure_at.split(" ");
        if (parts.length === 2) {
          const [date, time] = parts;
          const [day, month, year] = date.split("-");
          setDateTime(`${year}-${month}-${day}T${time}`);
        }
      } else {
        setGlucoseValue("");
        setDateTime(formattedDate);
      }
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, editingModalIsOpen, measurementToUpdate, formattedDate]);

  const handleClose = () => {
    setGlucoseValue("");
    handleToggleModal();
    setterEditingModalIsOpen(false);
  };

  return (
    <div
      className={`fixed bottom-0 right-0 w-full bg-gray-900/90 z-50 transition-all duration-300 ease-in-out overflow-hidden flex items-center justify-center ${
        isOpen ? "h-full" : "h-0"
      }`}
    >
      <div
        className={`${isOpen ? "block" : "hidden"} w-[min(90vw,400px)] h-60 bg-white border rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <div className="w-full h-14 p-2 flex items-center justify-between border-b border-gray-300">
          <button>
            <IoClose size={20} onClick={handleClose} />
          </button>
          <button>
            <IoMdCheckmark
              size={20}
              className={`${String(glucoseValue).length <= 1 ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={() => {
                if (String(glucoseValue).length <= 1) {
                  return;
                }

                if (editingModalIsOpen) {
                  editingGlicose.mutate({
                    userId: 1,
                    glicoseValue: glucoseValue,
                    id: measurementToUpdate.id,
                    measure_at: dateTime,
                  });
                } else {
                  saveGlicose.mutate({
                    userId: 1,
                    value: glucoseValue,
                    dateTime: dateTime,
                  });
                }
                handleClose();
              }}
            />
          </button>
        </div>

        <div className="w-full h-16 flex items-center p-2 gap-2 [@media_(min-width:375px)]:gap-14 border-b border-gray-300">
          <label htmlFor="time">Horário:</label>
          <input
            className="border p-2 w-[min(90%,12rem)]"
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </div>

        <div className="w-full h-16 flex items-center p-2 gap-4 [@media_(min-width:375px)]:gap-14 border-b border-gray-300">
          <label htmlFor="glucose">Glicemia:</label>
          <div className="flex gap-4">
            <div className={`w-6 h-6 rounded-full ${
              glucoseValue < targetMin 
              ? "bg-orange-500"
              : glucoseValue > targetMax
                ? "bg-red-600"
                : "bg-green-700"}`}></div>
            <input
              className="w-20 font-semibold outline-none"
              type="number"
              placeholder="-"
              value={glucoseValue}
              onChange={(e) => {
                if (e.target.value.length <= 3) {
                  setGlucoseValue(e.target.value);
                }
              }}
            />
            <span className="text-gray-500 self-end">mg/dL</span>
          </div>
        </div>
      </div>
    </div>
  );
};
