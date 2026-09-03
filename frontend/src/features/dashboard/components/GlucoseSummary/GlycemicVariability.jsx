import { useTargetRange } from "../../../settings/store/useTargetRange";

export const GlycemicVariability = ({ medments }) => {
 
  const targetMin = useTargetRange((state) => state.minTarget);
  const targetMax = useTargetRange((state) => state.maxTarget);

  const lowCount = medments?.filter(
    (values) => Number(values) < Number(targetMin),
  ).length || 0;

  const highCount = medments?.filter(
    (values) => Number(values) > Number(targetMax),
  ).length || 0;

  return (
    <div className="w-1/2 bg-white flex items-center justify-center shadow-sm rounded-lg">
      <div className="w-full flex flex-col pl-2 border-r">
        <span className="text-[min(5vw,1.5rem)]">Baixas</span>
        <p className="text-yellow-500 text-2xl font-bold">
          {lowCount} <span className="text-[1rem] font-normal">Hipos</span>
        </p>
      </div>

      <div className="w-full flex flex-col border-l pl-2">
        <span className="text-[min(5vw,1.5rem)]">Altas</span>
        <p className="text-red-500 text-2xl font-bold">
          {highCount} <span className="text-[1rem] font-normal">Hiper</span>
        </p>
      </div>
    </div>
  );
};
