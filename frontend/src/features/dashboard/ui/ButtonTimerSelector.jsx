export const ButtonTimerSelector = ({ period, handlerSelect, selected, customClassName }) => {
  return (
    <button
      className={`${selected === period ? "bg-gray-500" : ""} flex w-1/3 h-full flex-row items-center justify-center outline-none ${customClassName} lg:hover:bg-gray-400`}
      onClick={() => handlerSelect(period)}
    >
      <p className={`${selected === period ? "text-white" : "text-black"}`}>
        {period}
      </p>
    </button>
  );
};
