export const GlycemicVariability = ({ medments }) => {
  const userSetting = JSON.parse(localStorage.getItem("userSettings")) || {
    targetRangeMin: 70,
    targetRangeMax: 160,
  };

  const lowCount = medments?.filter(
    (values) => values < userSetting.targetRangeMin,
  ).length || 0;
  const highCount = medments?.filter(
    (values) => values > userSetting.targetRangeMax,
  ).length || 0;

  return (
    <div className="w-1/2 h-1/2 flex items-center justify-center">
      <div className="border-r pr-2">
        <span className="text-[min(5vw,1.25rem)]">Baixas</span>
        <p className="text-green-500 text-2xl font-bold">
          {lowCount} <span className="text-[1rem] font-normal">Hipos</span>
        </p>
      </div>

      <div className="border-l pl-2">
        <span className="text-[min(5vw,1.25rem)]">Altas</span>
        <p className="text-red-500 text-2xl font-bold">
          {highCount} <span className="text-[1rem] font-normal">Hiper</span>
        </p>
      </div>
    </div>
  );
};
