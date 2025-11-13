import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "../molecules/NavLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Barra superior fina */}
      <nav className="fixed z-50 w-full bg-black text-white font-montserrat font-semibold">
        <div className="flex items-center justify-end px-6 py-0">
          {/* Botón hamburguesa visible solo en < lg */}
          <button
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          {/* Links normales solo en ≥ lg */}
          <div className="hidden lg:block">
            <NavLinks />
          </div>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="fixed top-[48px] left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-8 z-40 lg:hidden">
          <NavLinks direction="col" onItemClick={closeMenu} />
        </div>
      )}
    </>
  );
}
