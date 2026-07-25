import { useRecentReadings } from "../../hooks/useRecentReadings";
import { useTargetRange } from "../../../settings/store/useTargetRange";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { useDeleteGlicose } from "../../hooks/useDeleteGlicose";
import { useModalEntry } from "../../store/useModalEntry";

export const RecentReadings = () => {
  const deleteGlicose = useDeleteGlicose();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?.id || 1;

  const { data, status } = useRecentReadings(userId);

  const targetMin = useTargetRange((state) => state.minTarget);
  const targetMax = useTargetRange((state) => state.maxTarget);

  const today = new Date();
  const date = `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`;

  const setterIsOpen = useModalEntry((state) => state.setIsOpen);
  const setterEditingModalIsOpen = useModalEntry((state) => state.setEditingModalIsOpen);

  return (
    <div>
      <div className={`${data?.length === 0 ? "flex items-center justify-center" : ""} w-full min-h-60`}>
        {status === "loading" && <p>Carregando leituras recentes...</p>}
        {status === "error" && (
          <p>Erro ao carregar leituras. Tente novamente.</p>
        )}
        {status === "success" && data && data.length > 0 ? (
          <ul className="mt-4 space-y-2">
            <p className="text-md text-gray-500 font-semibold ml-2">{date}</p>
            {data.filter((reading) => {
              return reading.measure_at.slice(0,10) === date;
            })
            .sort((a,b) => b.timestamp.localeCompare(a.timestamp))
            .map((reading) => (
              <li
                key={reading.id}
                className="p-3 border rounded-md flex items-center"
              >
                <span className="text-gray-500">{reading.timestamp}</span>
                <div className= {`${reading.value > targetMax ? "bg-red-600" : reading.value < targetMin ? "bg-orange-500" : "bg-green-700"}
                text-white font-medium ml-2 border w-10 h-10 p-2 rounded-full flex items-center justify-center`}>
                  {reading.value}
                </div>
                <div className="w-32 h-10 flex items-center gap-6 p-2 ml-auto">
                <FaTrashAlt
                size={20} 
                className="text-red-500"
                onClick={() => deleteGlicose.mutate({ id: reading.id, userId: userId})}
                />
                <FaPen size={20} className="text-blue-800"
                onClick={() => {
                  setterEditingModalIsOpen(true, reading)
                  setterIsOpen(true)
                }}
                />
                </div>
              </li>
            ))}
          </ul>
        ) : status === "success" && (!data || data.length === 0) ? (
          <p className="mt-4 text-gray-500">
            Nenhuma leitura recente encontrada.
          </p>
        ) : null}
      </div>
    </div>
  );
};
