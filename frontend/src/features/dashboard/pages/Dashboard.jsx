import { GlucoseSummary } from "../components/GlucoseSummary/GlucoseSummary";
// import { TimerRangerSelector } from "../components/GlucoseSummary/TimerRangerSelector";

export const Dashboard = () => {
  return (
    <div className="w-full h-44 flex justify-center">
        <GlucoseSummary/>
    </div>
  );
};
