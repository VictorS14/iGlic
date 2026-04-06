import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { TherapySettings } from "../components/TherapySettings/TherapySettings";

export const SettingsPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <button>
          <Link to={"/"}>
            <FaArrowLeft />
          </Link>
        </button>

        <p>Configurações</p>
      </div>
      <TherapySettings />
    </div>
  );
};
