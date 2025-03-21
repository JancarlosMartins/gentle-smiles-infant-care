
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

const Treatments = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <HeroSection
        title="Tratamentos Especializados"
        subtitle="Conheça os procedimentos e tecnologias que oferecemos para o cuidado bucal infantil"
        imageUrl="/lovable-uploads/c2e3ae24-230f-438b-9f97-42e1d3dd9683.png"
      />
      
      {/* Freio Lingual */}
      <section id="freio-lingual" className="section bg-white">
        <div className="container">
          <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2">
              <div className="inline-block mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
                Cirurgia com Laser
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
                Cirurgia de Freio Lingual
              </h2>
              
              <p className="text-neutral-700 mb-6 leading-relaxed">
                A anquiloglossia, popularmente conhecida como "língua presa", é uma condição em que o freio lingual é mais curto ou mais espesso que o normal, limitando os movimentos da língua.
              </p>
              
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Em bebês, essa condição pode dificultar a amamentação, causando dor materna, má pega e ganho de peso inadequado. Em crianças maiores, pode afetar a fala, a mastigação e até mesmo a postura.
              </p>
              
              <div className="bg-neutral-50 p-5 rounded-lg mb-6">
                <h4 className="font-medium text-lg mb-3 text-neutral-900">Benefícios da cirurgia com laser:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-neutral-700">Procedimento preciso e minimamente invasivo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-neutral-700">Menor sangramento e desconforto pós-operatório</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-neutral-700">Recuperação mais rápida</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-neutral-700">Melhor cicatrização</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-neutral-700">Risco reduzido de infecção</span>
                  </li>
                </ul>
              </div>
              
              <Link 
                to="/contato" 
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-500 text-white font-medium rounded-full shadow-md hover:bg-brand-600 transition-all duration-300"
              >
                Agende uma avaliação
              </Link>
            </div>
            
            <div className="w-full lg:w-1/2">
              <img 
                src="/lovable-uploads/c2e3ae24-230f-438b-9f97-42e1d3dd9683.png" 
                alt="Cirurgia de Freio Lingual" 
                className="w-full h-auto rounded-xl shadow-softer"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Freio Labial */}
      <section id="freio-labial" className="section bg-neutral-50">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2">
              <img 
                src="/lovable-uploads/19bd05d1-fa4d-4869-836b-99fc43b9a95e.png" 
                alt="Cirurgia de Freio Labial" 
                className="w-full h-auto rounded-xl shadow-softer"
              />
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="inline-block mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
                Procedimento Preciso
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
                Cirurgia de Freio Labial
              </h2>
              
              <p className="text-neutral-700 mb-6 leading-relaxed">
                O freio labial é uma pequena prega de tecido que conecta o lábio à gengiva. Quando este freio é muito espesso, curto ou tem uma inserção baixa (próxima aos dentes), pode causar diversos problemas.
              </p>
              
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Em bebês, pode dificultar a pega durante a amamentação. Em crianças maiores, pode causar diastema (espaço entre os dentes anteriores), retrações gengivais ou prejudicar a higiene bucal.
              </p>
              
              <div className="bg-white p-5 rounded-lg shadow-soft mb-6">
                <h4 className="font-medium text-lg mb-3 text-neutral-900">Como é realizado o procedimento:</h4>
                <ol className="space-y-2 list-decimal list-inside">
                  <li className="text-neutral-700">Avaliação clínica detalhada da anatomia do freio</li>
                  <li className="text-neutral-700">Aplicação de anestésico tópico e local (quando necessário)</li>
                  <li className="text-neutral-700">Utilização do laser de alta potência para o procedimento</li>
                  <li className="text-neutral-700">Orientações pós-operatórias para os pais</li>
                  <li className="text-neutral-700">Acompanhamento pós-cirúrgico</li>
                </ol>
              </div>
              
              <Link 
                to="/contato" 
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-500 text-white font-medium rounded-full shadow-md hover:bg-brand-600 transition-all duration-300"
              >
                Agende uma avaliação
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sedação */}
      <section id="sedacao" className="section bg-white">
        <div className="container">
          <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2">
              <div className="inline-block mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
                Conforto e Segurança
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
                Atendimento com Sedação Consciente
              </h2>
              
              <p className="text-neutral-700 mb-6 leading-relaxed">
                A sedação consciente com óxido nitroso é uma técnica segura e eficaz para reduzir a ansiedade e proporcionar maior conforto durante os tratamentos odontológicos em crianças.
              </p>
              
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Diferente da anestesia geral, a criança permanece consciente durante todo o procedimento, mas em um estado de relaxamento profundo, o que facilita a colaboração e torna a experiência mais tranquila.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h4 className="font-medium text-neutral-900 mb-2">Seguro</h4>
                  <p className="text-sm text-neutral-600">Técnica amplamente estudada e comprovadamente segura para uso em crianças</p>
                </div>
                
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h4 className="font-medium text-neutral-900 mb-2">Rápido</h4>
                  <p className="text-sm text-neutral-600">Efeito imediato e que se dissipa rapidamente ao final do procedimento</p>
                </div>
                
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h4 className="font-medium text-neutral-900 mb-2">Confortável</h4>
                  <p className="text-sm text-neutral-600">Administrado por máscara nasal com aroma agradável</p>
                </div>
                
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h4 className="font-medium text-neutral-900 mb-2">Eficaz</h4>
                  <p className="text-sm text-neutral-600">Reduz significativamente a ansiedade e o desconforto durante o atendimento</p>
                </div>
              </div>
              
              <Link 
                to="/contato" 
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-500 text-white font-medium rounded-full shadow-md hover:bg-brand-600 transition-all duration-300"
              >
                Saiba mais sobre a sedação
              </Link>
            </div>
            
            <div className="w-full lg:w-1/2">
              <img 
                src="/lovable-uploads/245c6d82-63bd-48f8-a791-97d74c8bbb6e.png" 
                alt="Atendimento com Sedação" 
                className="w-full h-auto rounded-xl shadow-softer"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Bebês */}
      <section id="bebes" className="section bg-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
              Odontologia para Bebês
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
              Atendimento Especializado para Bebês
            </h2>
            
            <p className="text-neutral-600 leading-relaxed">
              Cuidados específicos para os pequenos desde os primeiros meses de vida, com foco na prevenção e orientação aos pais.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl font-semibold mb-4 text-neutral-900">Dificuldades na Amamentação</h3>
                <p className="text-neutral-700 mb-4 leading-relaxed">
                  A restrição dos movimentos da língua causada pelo freio lingual curto (anquiloglossia) pode dificultar significativamente a amamentação, causando:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-neutral-700">Dificuldade na pega do peito</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-neutral-700">Dor materna durante a amamentação</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-neutral-700">Ganho de peso inadequado do bebê</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-neutral-700">Mamadas frequentes e demoradas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-neutral-700">Refluxo e excesso de gases</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-serif text-xl font-semibold mb-4 text-neutral-900">Abordagem Integrada</h3>
                <p className="text-neutral-700 mb-4 leading-relaxed">
                  O atendimento a bebês com dificuldades na amamentação relacionadas aos freios orais envolve:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-neutral-700">Avaliação detalhada da anatomia e função dos freios orais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-neutral-700">Protocolo de avaliação do freio da língua em bebês</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-neutral-700">Intervenção cirúrgica com laser, quando indicada</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-neutral-700">Orientações pós-cirúrgicas específicas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-neutral-700">Acompanhamento multidisciplinar (quando necessário)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-brand-500">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-white">
              Agende uma avaliação
            </h2>
            
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Consulte nossa disponibilidade para uma avaliação completa e personalizada.
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

export default Treatments;
