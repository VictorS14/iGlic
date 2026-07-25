import { Link } from "react-router-dom";

export const NavBarMenu = () => {
  const menuItems = [
    { label: "Início", href: "/" },
    { label: "Configurações", href: "/settings" },
    { label: "Histórico", href: "/history" },
  ];

  return (
    <nav className="hidden items-center lg:flex lg:gap-12">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className="font-light hover:text-green-400 hover:cursor-pointer border-b transition-all duration-300 transform hover:scale-110"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
