import { GlucoseSummary } from "../components/GlucoseSummary/GlucoseSummary";
import { RecentReadings } from "../components/RecentReadings/RecentReadings";

export const Dashboard = () => {
  return (
    <div className="w-full h-full border flex flex-col gap-2">
        <GlucoseSummary/>
        <RecentReadings/>
    </div>
  );
};
