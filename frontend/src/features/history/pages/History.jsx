import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const History = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
         <button>
            <Link to={"/"}>
               <FaArrowLeft />
            </Link>
         </button>

       <h1>Histórico</h1>
      </div>
    </div>
    
  )
}
