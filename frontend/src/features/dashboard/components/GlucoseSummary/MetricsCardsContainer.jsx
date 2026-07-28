import { useGlicoseAverage } from "../../hooks/useGlicoseAverage";
import { MetricCard } from "../../ui/MetricCard";
import { GlycemicVariability } from "./GlycemicVariability";
import { useAuth } from "../../../../context/AuthContext.jsx";

export const MetricsCardsContainer = ({ selectedPeriod }) => {
  const { user } = useAuth();
  const userId = user?.id;

  const { data, status } = useGlicoseAverage(userId, selectedPeriod);

  const calculateHbA1c = (average) => {
    const avgNum = Number(average);
    if (isNaN(avgNum) || avgNum === 0) return "0,0%";
    const hba1c = (avgNum + 46.7) / 28.7;
    return hba1c.toFixed(1).replace(".", ",") + "%";
  };

  const hba1c = calculateHbA1c(data?.average);

  return (
    <>
      <div className="w-full h-full flex flex-wrap">
        <MetricCard
          title={"Média da Glicose"}
          value={
            status === "success" ? `${data.average} mg/dl` : "0 medições"
          }
        />

        <MetricCard
          title={"HbA1c Estiamada"}
          value={status === "success" ? hba1c : "..."}
        />

        <MetricCard title={"Nº Medições"} value={data?.quantity} />

        <GlycemicVariability medments={data?.medments} />
      </div>
    </>
  );
};
