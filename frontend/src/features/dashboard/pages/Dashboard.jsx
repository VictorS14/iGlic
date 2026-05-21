import { GlucoseSummary } from "../components/GlucoseSummary/GlucoseSummary";
import { RecentReadings } from "../components/RecentReadings/RecentReadings";
import { AddGlucoseEntry } from "../components/AddGlucoseEntry";

export const Dashboard = () => {
  return (
    <div className="w-full min-h-dvh border flex flex-col gap-2">
      <GlucoseSummary />
      <RecentReadings />
      <AddGlucoseEntry/>
    </div>
  );
};
