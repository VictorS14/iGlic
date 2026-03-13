export const ButtonTimerSelector = ({ranger, handlerSelect, selected}) => {
  return (
    <button 
        className={`${selected === ranger ? "bg-gray-500" : ""} flex w-1/3 h-full flex-row items-center justify-center border outline-none`}
        onClick={() => handlerSelect(ranger)}>
            <p className={`${selected === ranger ? "text-white" : "text-black"}`}>{ranger}</p> 
    </button>
  );
};
