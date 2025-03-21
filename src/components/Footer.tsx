
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4 text-neutral-900">
              Dra. Beatriz Zamboni
            </h4>
            <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
              Odontopediatra especializada em cirurgia de freios orais com laser e sedação consciente.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://instagram.com/beatrizamboni"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2.5 rounded-full shadow-soft hover:text-brand-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2.5 rounded-full shadow-soft hover:text-brand-500 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:contato@drabeatrizzamboni.com.br"
                className="bg-white p-2.5 rounded-full shadow-soft hover:text-brand-500 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-neutral-900">
              Tratamentos
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/tratamentos#freio-lingual" 
                  className="text-sm text-neutral-600 hover:text-brand-500 transition-colors duration-300"
                >
                  Cirurgia de Freio Lingual
                </Link>
              </li>
              <li>
                <Link 
                  to="/tratamentos#freio-labial" 
                  className="text-sm text-neutral-600 hover:text-brand-500 transition-colors duration-300"
                >
                  Cirurgia de Freio Labial
                </Link>
              </li>
              <li>
                <Link 
                  to="/tratamentos#sedacao" 
                  className="text-sm text-neutral-600 hover:text-brand-500 transition-colors duration-300"
                >
                  Atendimento com Sedação
                </Link>
              </li>
              <li>
                <Link 
                  to="/tratamentos#bebes" 
                  className="text-sm text-neutral-600 hover:text-brand-500 transition-colors duration-300"
                >
                  Atendimento para Bebês
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-neutral-900">
              Mais Informações
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/sobre" 
                  className="text-sm text-neutral-600 hover:text-brand-500 transition-colors duration-300"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link 
                  to="/tecnologia" 
                  className="text-sm text-neutral-600 hover:text-brand-500 transition-colors duration-300"
                >
                  Tecnologia
                </Link>
              </li>
              <li>
                <Link 
                  to="/perguntas-frequentes" 
                  className="text-sm text-neutral-600 hover:text-brand-500 transition-colors duration-300"
                >
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link 
                  to="/contato" 
                  className="text-sm text-neutral-600 hover:text-brand-500 transition-colors duration-300"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-neutral-900">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-500 mr-3 mt-0.5" />
                <span className="text-sm text-neutral-600">
                  Av. Dr. Exemplo, 123, Sala 45 - Cidade/UF
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-brand-500 mr-3" />
                <a 
                  href="tel:+55000000000" 
                  className="text-sm text-neutral-600 hover:text-brand-500 transition-colors duration-300"
                >
                  (00) 00000-0000
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-brand-500 mr-3" />
                <a 
                  href="mailto:contato@drabeatrizzamboni.com.br" 
                  className="text-sm text-neutral-600 hover:text-brand-500 transition-colors duration-300"
                >
                  contato@drabeatrizzamboni.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 text-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Dra. Beatriz Zamboni Martins Panucci. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
