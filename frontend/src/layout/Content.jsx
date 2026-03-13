import { Header } from "./Header";
import { Dashboard } from "../features/dashboard/pages/Dashboard";

export const Content = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-100">
        <Header/>
        <main className="w-full max-w-3xl p-4 grow border">
            <Dashboard/>
        </main>
    </div>
  )
}
