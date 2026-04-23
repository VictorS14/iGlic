export const GlycemicVariability = ({ medments }) => {
  const userSetting = JSON.parse(localStorage.getItem("userSettings"));

  const lowCount = medments?.filter(
    (values) => values < userSetting.targetRangeMin,
  ).length;
  const highCount = medments?.filter(
    (values) => values > userSetting.targetRangeMax,
  ).length;

  return (
    <div className="w-1/2 h-1/2 flex items-center justify-center">
      <div className="border-r pr-2">
        <span className="text-[min(5vw,1.25rem)]">Baixas</span>
        <p className="text-green-500 text-2xl">
          {lowCount} <span className="text-[1rem]">Hipos</span>
        </p>
      </div>

      <div className="border-l pl-2">
        <span className="text-[min(5vw,1.25rem)]">Altas</span>
        <p className="text-red-500 text-2xl">
          {highCount} <span className="text-[1rem]">Hiper</span>
        </p>
      </div>
    </div>
  );
};
