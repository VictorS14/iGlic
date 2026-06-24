import { CurtainMenu } from "../components/CurtainMenu";

export const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 h-16 bg-white flex items-center shadow-sm px-4 border-b border-gray-100">
      <div className="w-full h-full flex items-center justify-between">
        <h1 className="text-2xl font-bold text-green-600 font-serif">iGlic</h1>
        <CurtainMenu />
      </div>
    </header>
  );
};
