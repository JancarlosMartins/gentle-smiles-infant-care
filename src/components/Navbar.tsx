
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Tratamentos", path: "/tratamentos" },
    { name: "Tecnologia", path: "/tecnologia" },
    { name: "Perguntas Frequentes", path: "/perguntas-frequentes" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-white/90 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="z-50 font-serif text-lg md:text-xl font-semibold tracking-wide text-brand-700 transition-all duration-300"
          >
            Dra. Beatriz Zamboni
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-all duration-200 hover:text-brand-600 ${
                  location.pathname === link.path
                    ? "text-brand-600"
                    : "text-neutral-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Agendar Button (Desktop) */}
          <a
            href="https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Beatriz%20Zamboni."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center px-6 py-2.5 text-sm font-medium rounded-full bg-brand-500 text-white hover:bg-brand-600 transition-all duration-300 shadow-sm"
          >
            Agendar Consulta
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-neutral-800" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 pt-24 pb-16 h-full flex flex-col">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xl font-serif font-medium transition-colors duration-200 hover:text-brand-600 ${
                  location.pathname === link.path
                    ? "text-brand-600"
                    : "text-neutral-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Beatriz%20Zamboni."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center px-6 py-2.5 text-base font-medium rounded-full bg-brand-500 text-white hover:bg-brand-600 transition-all duration-300 shadow-sm"
            >
              Agendar Consulta
            </a>
          </div>
          <div className="mt-auto">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Dra. Beatriz Zamboni
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
