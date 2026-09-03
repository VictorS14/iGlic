export const MetricCard = ({ title, value }) => {
  return (
    <div className="w-1/2 h-1/2 flex flex-col p-2 shadow-sm rounded-lg bg-white">
      <span>{title}</span>
      <data className="text-2xl font-bold">{value}</data>
    </div>
  );
};
