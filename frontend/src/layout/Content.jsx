import { Header } from "./Header";

export const Content = ({ children }) => {
  return (
    <div className="w-full min-h-dvh flex flex-col items-center bg-gray-100 
    lg:max-w-6xl lg:mx-auto lg:px-4">
      <Header />
      <main className="w-full mt-16 max-w-7xl p-4 grow">
        {children}
      </main>
    </div>
  );
};
