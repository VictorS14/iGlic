import { useGlicoseAverage } from "../../hooks/useGlicoseAverage";
import { MetricCard } from "../../ui/MetricCard";

export const MetricsCardsContainer = ({ selectedPeriod }) => {
  // Tentando pegar o ID do localStorage, se não existir, usa o 8 para testes :)
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?.id || 8;

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
      <div className="w-full h-full flex flex-wrap border">
        <MetricCard
          title={"Média da Glicose"}
          value={
            status === "success" ? `${data.average} mg/dl` : "Carregando..."
          }
        />

        <MetricCard
          title={"HbA1c Estiamada"}
          value={status === "success" ? hba1c : "..."}
        />

        <MetricCard title={"Nº Medições"} value={data?.quantity} />
      </div>
    </>
  );
};
