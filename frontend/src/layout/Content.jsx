import { Header } from "./Header";
import { Dashboard } from "../features/dashboard/pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import { SettingsPage } from "../features/settings/pages/setting.jsx";

export const Content = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-100">
      <Header />
      <main className="w-full max-w-3xl p-4 grow border">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  );
};
