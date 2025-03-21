
import { Link } from "react-router-dom";
import { Baby, CircleDashed, Cpu, ArrowRight, HeartPulse, Brain, Zap, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceCard from "@/components/ServiceCard";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <HeroSection
        title="Cuidado especializado e acolhedor para bebês e crianças"
        subtitle="Com tecnologia, empatia e segurança na cirurgia de freios orais e odontopediatria"
        imageUrl="/lovable-uploads/aab68b53-cc07-4b5a-8500-c09897a1a8ad.png"
        ctaText="Agendar Consulta"
        ctaUrl="https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Beatriz%20Zamboni."
        isHomepage={true}
      />
      
      {/* Sobre */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <img 
                src="/lovable-uploads/83cab07a-f6ee-41bb-970c-ca01f773c149.png" 
                alt="Dra. Beatriz Zamboni" 
                className="w-full h-auto rounded-xl shadow-soft"
              />
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="inline-block mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
                Odontopediatra Especialista
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
                Dra. Beatriz Zamboni <br />Martins Panucci
              </h2>
              
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Odontopediatra especialista e mestre pela FORP-USP, com atuação dedicada ao atendimento infantil humanizado. Doutoranda em Clínica Integrada pela UEM, com foco em odontopediatria e freios orais.
              </p>
              
              <p className="text-neutral-700 mb-8 leading-relaxed">
                Habilitada em sedação inalatória e uso de laser de alta e baixa potência, oferece tratamentos minimamente invasivos e com máximo conforto para bebês e crianças.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-brand-50 p-2 rounded-full mr-3">
                    <HeartPulse className="h-5 w-5 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-neutral-900">Sedação Consciente</h4>
                    <p className="text-sm text-neutral-600">Tratamentos confortáveis</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-50 p-2 rounded-full mr-3">
                    <Brain className="h-5 w-5 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-neutral-900">Doutoranda</h4>
                    <p className="text-sm text-neutral-600">Pesquisadora ativa</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-50 p-2 rounded-full mr-3">
                    <Zap className="h-5 w-5 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-neutral-900">Laser</h4>
                    <p className="text-sm text-neutral-600">Alta e baixa potência</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-50 p-2 rounded-full mr-3">
                    <Baby className="h-5 w-5 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-neutral-900">Mãe</h4>
                    <p className="text-sm text-neutral-600">Olhar humanizado</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/sobre" 
                className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 transition-colors duration-300"
              >
                Conheça mais sobre a Dra. Beatriz
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tratamentos */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
              Nossos Tratamentos
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
              Tecnologia e Empatia no Cuidado Infantil
            </h2>
            
            <p className="text-neutral-600 leading-relaxed">
              Oferecemos tratamentos modernos e minimamente invasivos, focados no conforto e na segurança dos pequenos pacientes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              id="freio-lingual"
              title="Cirurgia de Freio Lingual"
              description="Tratamento da língua presa com laser de alta potência, minimizando desconforto e acelerando a recuperação."
              icon={<Cpu className="h-8 w-8" />}
              link="/tratamentos#freio-lingual"
            />
            
            <ServiceCard
              id="freio-labial"
              title="Cirurgia de Freio Labial"
              description="Correção do freio labial com técnica a laser, proporcionando mais conforto e resultados precisos."
              icon={<Cpu className="h-8 w-8" />}
              link="/tratamentos#freio-labial"
            />
            
            <ServiceCard
              id="sedacao"
              title="Sedação Consciente"
              description="Atendimento com óxido nitroso para maior conforto e tranquilidade durante os procedimentos."
              icon={<CircleDashed className="h-8 w-8" />}
              link="/tratamentos#sedacao"
            />
            
            <ServiceCard
              id="bebes"
              title="Bebês e Amamentação"
              description="Avaliação e tratamento especializado para bebês com dificuldades na amamentação relacionadas aos freios orais."
              icon={<Baby className="h-8 w-8" />}
              link="/tratamentos#bebes"
            />
            
            <ServiceCard
              id="odontopediatria"
              title="Odontopediatria"
              description="Cuidado integral da saúde bucal infantil, com foco na prevenção e no tratamento atraumático."
              icon={<HeartPulse className="h-8 w-8" />}
              link="/tratamentos#odontopediatria"
            />
            
            <ServiceCard
              id="laser-terapia"
              title="Laserterapia"
              description="Uso terapêutico do laser de baixa potência para alívio da dor, redução de inflamação e bioestimulação tecidual."
              icon={<Zap className="h-8 w-8" />}
              link="/tratamentos#laser-terapia"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/tratamentos" 
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-500 text-white font-medium rounded-full shadow-md hover:bg-brand-600 transition-all duration-300"
            >
              Ver todos os tratamentos
            </Link>
          </div>
        </div>
      </section>
      
      {/* Depoimentos */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
              Depoimentos
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
              O que os pais dizem
            </h2>
            
            <p className="text-neutral-600 leading-relaxed">
              Relatos de famílias que confiaram nos cuidados da Dra. Beatriz para seus pequenos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="A Dra. Beatriz foi incrível com meu bebê durante a cirurgia de freio lingual. O procedimento foi rápido, e a amamentação melhorou já nas primeiras horas."
              name="Ana Luiza"
              city="Maringá/PR"
            />
            
            <TestimonialCard
              quote="Como mãe, estava muito apreensiva, mas a Dra. Beatriz nos deixou seguros durante todo o processo. O laser fez toda diferença na recuperação do meu filho."
              name="Mariana Silva"
              city="Londrina/PR"
            />
            
            <TestimonialCard
              quote="Minha filha sempre teve medo de dentista, mas com a sedação consciente e o jeito carinhoso da Dra. Beatriz, ela não tem mais nenhum receio de ir às consultas."
              name="Patricia Santos"
              city="Maringá/PR"
            />
          </div>
        </div>
      </section>
      
      {/* Instagram */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
              <Instagram className="h-4 w-4 mr-2" />
              @beatrizamboni
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
              Siga nas redes sociais
            </h2>
            
            <p className="text-neutral-600 leading-relaxed mb-8">
              Acompanhe conteúdos educativos e dicas sobre saúde bucal infantil.
            </p>
            
            <a 
              href="https://instagram.com/beatrizamboni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-medium rounded-full shadow-md hover:from-brand-600 hover:to-brand-700 transition-all duration-300"
            >
              <Instagram className="h-5 w-5 mr-2" />
              Seguir no Instagram
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-brand-500">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-white">
              Agende sua consulta
            </h2>
            
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Entre em contato para marcar uma avaliação e proporcionar o melhor cuidado odontológico para seu filho.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Beatriz%20Zamboni."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-brand-600 font-medium rounded-full shadow-md hover:bg-neutral-50 transition-all duration-300"
              >
                WhatsApp Direto
              </a>
              
              <Link 
                to="/contato" 
                className="px-8 py-3 bg-transparent text-white border-2 border-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Formulário de Contato
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
