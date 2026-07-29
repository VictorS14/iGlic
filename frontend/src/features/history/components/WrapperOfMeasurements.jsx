import { useTargetRange } from "../../settings/store/useTargetRange";

export const WrapperOfMeasurements = ({
  openItemIds,
  handleToggle,
  ...props
}) => {
  const targetMin = useTargetRange((state) => state.minTarget);
  const targetMax = useTargetRange((state) => state.maxTarget);

  const isOpen = openItemIds.has(props.data)

  const lowCount = props?.registros.filter(
    (item) => Number(item.value) < targetMin,
  ).length;
  const highCount = props?.registros.filter(
    (item) => Number(item.value) > targetMax,
  ).length;

  return (
    <div
      key={props.data}
      onClick={() => handleToggle(props.data)}
      className={`${isOpen ? "max-h-screen pb-2 opacity-100" : "max-h-10 opacity-100"} overflow-hidden rounded-md bg-gray-300 transition-all duration-500 ease-in-out`}
    >
      <div
        className={`${isOpen ? "h-22" : ""} 
        ${
          props?.media > targetMax
            ? "bg-red-600"
            : props?.media < targetMin
              ? "bg-orange-700"
              : "bg-green-700"
        } w-full h-10 pl-2 flex flex-col gap-2 rounded-md transition-all duration-200 ease-in-out`}
      >
        <span className="text-white">{props?.data}</span>
        <div
          className={`${isOpen ? "block" : "hidden"} flex gap-4`}
        >
          <div className="w-14 h-11 bg-white border-none rounded-full flex flex-col items-center justify-center border">
            <span className="text-[min(3vw,1rem)] font-semibold">{props?.media}</span>
            <span className="text-[min(2vw,0.625rem)]">mg/dL</span>
          </div>
          <div className="w-14 h-11 bg-white border-none rounded-full flex flex-col items-center justify-center border">
            <span className="text-[min(3vw,0.625rem)]">registros</span>
            <span className="text-[min(3vw,1rem)] font-semibold">
              {props?.registros.length}
            </span>
          </div>
          <div className="w-24 h-11 bg-white border-none rounded-full flex items-center justify-center border">
            <div className="w-full flex flex-col pl-2 border-r">
              <p className="text-yellow-500 font-bold">
                {lowCount} <span className="text-[0.5rem]">Hipos</span>
              </p>
            </div>

            <div className="w-full flex flex-col pl-2 border-l">
              <p className="text-red-500 font-bold">
                {highCount} <span className="text-[0.5rem]">Hiper</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ul
        className={`${isOpen ? "block" : "hidden"} mt-2 space-y-1`}
      >
        {props?.registros?.map((reg) => (
          <li className="p-1 rounded-md flex items-center">
            <span>{reg?.timestamp}</span>
            <div
              className={`${reg?.value > targetMax ? "bg-red-600" : reg?.value < targetMin ? "bg-orange-500" : "bg-green-700"} text-white font-medium ml-3 w-10 h-10 p-2 rounded-full flex items-center justify-center`}
            >
              {reg?.value}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
