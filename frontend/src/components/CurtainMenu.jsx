import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCurtainMenu } from "../store/useCurtainMenu";

export const CurtainMenu = () => {
  const isOpen = useCurtainMenu((state) => state.isMenuOpen);
  const setIsOpen = useCurtainMenu((state) => state.setIsMenuOpen);
  const toggleMenu = useCurtainMenu((state) => state.toggleMenu);

  const menuItems = [
    { label: "Início", href: "/" },
    { label: "Configurações", href: "/settings" },
    { label: "Histórico", href: "/history" },
  ];

  return (
    <div className="flex items-center lg:hidden">
      <button
        onClick={toggleMenu}
        className={`${isOpen ? "hidden" : ""} text-2xl p-2 focus:outline-none hover:bg-black/5 rounded-full transition-colors`}
      >
        <FaBars />
      </button>

      {/* Curtain Menu (Overlay) */}
      <div
        className={`fixed top-0 right-0 h-full bg-black/95 z-50 transition-all duration-300 ease-in-out overflow-hidden flex items-center justify-center ${
          isOpen ? "w-full" : "w-0"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-4xl text-white hover:text-gray-300 transition-colors"
        >
          &times;
        </button>

        <nav className="flex flex-col items-center space-y-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-light text-white hover:text-green-400 transition-all duration-300 transform hover:scale-110"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
