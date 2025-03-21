
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <HeroSection
        title="Entre em Contato"
        subtitle="Estamos prontos para atender você e seu filho com todo cuidado e atenção"
        imageUrl="/lovable-uploads/aab68b53-cc07-4b5a-8500-c09897a1a8ad.png"
      />
      
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2">
              <div className="mb-8">
                <div className="inline-block mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
                  Fale Conosco
                </div>
                
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
                  Estamos aqui para ajudar
                </h2>
                
                <p className="text-neutral-600 leading-relaxed">
                  Envie uma mensagem, faça uma ligação ou visite nosso consultório. Teremos prazer em esclarecer suas dúvidas e agendar uma consulta.
                </p>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-brand-50 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1 text-neutral-900">Endereço</h4>
                    <p className="text-neutral-600">Av. Dr. Exemplo, 123, Sala 45 - Cidade/UF</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-50 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1 text-neutral-900">Telefone</h4>
                    <a 
                      href="tel:+55000000000" 
                      className="text-neutral-600 hover:text-brand-500 transition-colors duration-300"
                    >
                      (00) 00000-0000
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-50 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1 text-neutral-900">Email</h4>
                    <a 
                      href="mailto:contato@drabeatrizzamboni.com.br" 
                      className="text-neutral-600 hover:text-brand-500 transition-colors duration-300"
                    >
                      contato@drabeatrizzamboni.com.br
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-50 p-3 rounded-full mr-4">
                    <Instagram className="h-6 w-6 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1 text-neutral-900">Instagram</h4>
                    <a 
                      href="https://instagram.com/beatrizamboni" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-600 hover:text-brand-500 transition-colors duration-300"
                    >
                      @beatrizamboni
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-50 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1 text-neutral-900">Horário de Atendimento</h4>
                    <p className="text-neutral-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-neutral-600">Sábado: 8h às 12h (com agendamento prévio)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-50 p-6 rounded-xl">
                <h4 className="font-medium text-lg mb-3 text-neutral-900">Atendimento Rápido</h4>
                <p className="text-neutral-600 mb-4">
                  Para agendamentos ou dúvidas urgentes, entre em contato diretamente pelo WhatsApp:
                </p>
                <a 
                  href="https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Beatriz%20Zamboni."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-brand-500 text-white font-medium rounded-lg shadow-md hover:bg-brand-600 transition-all duration-300"
                >
                  WhatsApp Direto
                </a>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
              Localização
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
              Como Chegar
            </h2>
            
            <p className="text-neutral-600 leading-relaxed">
              Estamos localizados em um ponto de fácil acesso, com estacionamento próximo.
            </p>
          </div>
          
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-soft">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.0891500422303!2d-54.57293748507878!3d-20.452558386317785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e8766b784edd%3A0x90d9f767ac623828!2sAv.%20Afonso%20Pena%2C%20Campo%20Grande%20-%20MS!5e0!3m2!1spt-BR!2sbr!4v1626288186796!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
