export const GlycemicVariability = () => {
  const userSetting = JSON.parse(localStorage.getItem("userSettings"));

  console.log(userSetting);

  return (
    <div className="w-1/2 h-1/2 flex items-center justify-center">
      <div className="border-r pr-2">
        <span className="text-[min(5vw,1.25rem)]">Baixas</span>
        <p className="text-green-500 text-2xl">
          2 <span className="text-[1rem]">Hipos</span>
        </p>
      </div>

      <div className="border-l pl-2">
        <span className="text-[min(5vw,1.25rem)]">Altas</span>
        <p className="text-red-500 text-2xl">
          3 <span className="text-[1rem]">Hiper</span>
        </p>
      </div>
    </div>
  );
};
