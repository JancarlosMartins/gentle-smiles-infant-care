
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TechnologyCard from "@/components/TechnologyCard";
import { Zap, CircleDashed, CheckCircle } from "lucide-react";

const Technology = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <HeroSection
        title="Tecnologia de Ponta"
        subtitle="Conheça as tecnologias que utilizamos para proporcionar tratamentos mais eficazes e confortáveis"
        imageUrl="/lovable-uploads/83cab07a-f6ee-41bb-970c-ca01f773c149.png"
      />
      
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
              Inovação e Conforto
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
              Tecnologias que fazem a diferença
            </h2>
            
            <p className="text-neutral-600 leading-relaxed">
              Investimos em tecnologias modernas para proporcionar tratamentos mais eficazes, confortáveis e seguros para nossos pequenos pacientes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TechnologyCard
              title="Laser de Alta Potência"
              description="Tecnologia avançada para cirurgias minimamente invasivas, com menos sangramento e recuperação mais rápida."
              imageUrl="/lovable-uploads/245c6d82-63bd-48f8-a791-97d74c8bbb6e.png"
            />
            
            <TechnologyCard
              title="Laser de Baixa Potência"
              description="Utilizado para bioestimulação tecidual, analgesia e redução da inflamação, acelerando o processo de cicatrização."
              imageUrl="/lovable-uploads/83cab07a-f6ee-41bb-970c-ca01f773c149.png"
            />
            
            <TechnologyCard
              title="Sedação Consciente"
              description="Sistema de óxido nitroso que proporciona relaxamento e conforto durante os procedimentos, sem os efeitos da anestesia geral."
              imageUrl="/lovable-uploads/c2e3ae24-230f-438b-9f97-42e1d3dd9683.png"
            />
          </div>
        </div>
      </section>
      
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <img 
                src="/lovable-uploads/245c6d82-63bd-48f8-a791-97d74c8bbb6e.png" 
                alt="Laser de Alta Potência" 
                className="w-full h-auto rounded-xl shadow-softer"
              />
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
                <Zap className="h-4 w-4 mr-2" />
                Tecnologia Laser
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
                Cirurgia com Laser de Alta Potência
              </h2>
              
              <p className="text-neutral-700 mb-6 leading-relaxed">
                O laser de alta potência representa um avanço significativo na cirurgia de freios orais, oferecendo precisão, conforto e resultados superiores em comparação com técnicas convencionais.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-500 mt-0.5 mr-3 shrink-0" />
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-1">Procedimento Preciso</h4>
                    <p className="text-neutral-600 text-sm">Maior precisão no corte, permitindo um procedimento mais controlado e eficaz.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-500 mt-0.5 mr-3 shrink-0" />
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-1">Menor Sangramento</h4>
                    <p className="text-neutral-600 text-sm">O laser promove a coagulação imediata, reduzindo significativamente o sangramento durante o procedimento.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-500 mt-0.5 mr-3 shrink-0" />
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-1">Recuperação Mais Rápida</h4>
                    <p className="text-neutral-600 text-sm">Menos trauma tecidual significa menos edema e desconforto pós-operatório, acelerando a recuperação.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-500 mt-0.5 mr-3 shrink-0" />
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-1">Propriedades Antimicrobianas</h4>
                    <p className="text-neutral-600 text-sm">O laser elimina bactérias na área tratada, reduzindo o risco de infecção pós-operatória.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-500 mt-0.5 mr-3 shrink-0" />
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-1">Menos Trauma Psicológico</h4>
                    <p className="text-neutral-600 text-sm">Procedimento mais rápido e confortável, minimizando o estresse para a criança e seus pais.</p>
                  </div>
                </div>
              </div>
              
              <blockquote className="italic text-neutral-600 border-l-4 border-brand-300 pl-4 mb-6">
                "O uso do laser na odontopediatria representa um avanço significativo, especialmente para procedimentos como a cirurgia de freios orais, onde a precisão e o conforto do paciente são essenciais."
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
                <CircleDashed className="h-4 w-4 mr-2" />
                Conforto e Segurança
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
                Sedação Consciente com Óxido Nitroso
              </h2>
              
              <p className="text-neutral-700 mb-6 leading-relaxed">
                A sedação consciente com óxido nitroso é uma técnica segura e eficaz para reduzir a ansiedade e proporcionar maior conforto durante os tratamentos odontológicos em crianças.
              </p>
              
              <div className="bg-neutral-50 p-6 rounded-xl mb-8">
                <h4 className="font-medium text-lg mb-4 text-neutral-900">Como funciona?</h4>
                <ol className="space-y-3 list-decimal list-inside">
                  <li className="text-neutral-700">
                    Uma máscara nasal especial é colocada, por onde a criança respira normalmente
                  </li>
                  <li className="text-neutral-700">
                    Uma mistura de oxigênio e óxido nitroso é administrada em proporções controladas
                  </li>
                  <li className="text-neutral-700">
                    Em poucos minutos, a criança atinge um estado de relaxamento, mantendo-se consciente
                  </li>
                  <li className="text-neutral-700">
                    Ao final do procedimento, administra-se apenas oxigênio puro por alguns minutos
                  </li>
                  <li className="text-neutral-700">
                    Os efeitos se dissipam rapidamente, permitindo que a criança retorne às atividades normais
                  </li>
                </ol>
              </div>
              
              <p className="text-neutral-700 mb-6 leading-relaxed">
                A sedação com óxido nitroso é especialmente indicada para crianças ansiosas, procedimentos mais demorados ou em casos de reflexo de vômito acentuado, proporcionando uma experiência odontológica mais tranquila e positiva.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2">
              <img 
                src="/lovable-uploads/c2e3ae24-230f-438b-9f97-42e1d3dd9683.png" 
                alt="Sedação Consciente" 
                className="w-full h-auto rounded-xl shadow-softer"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-brand-500">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-white">
              Conheça nossas tecnologias
            </h2>
            
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Agende uma consulta e descubra como nossas tecnologias podem fazer a diferença no tratamento do seu filho.
            </p>
            
            <a 
              href="https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Beatriz%20Zamboni."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-brand-600 font-medium rounded-full shadow-md hover:bg-neutral-50 transition-all duration-300"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Technology;
