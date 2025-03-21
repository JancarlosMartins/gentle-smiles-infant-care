
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { CheckCircle, Award, GraduationCap, Trophy, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <HeroSection
        title="Sobre a Dra. Beatriz Zamboni"
        subtitle="Conheça minha trajetória e abordagem no cuidado odontológico infantil"
        imageUrl="/lovable-uploads/83cab07a-f6ee-41bb-970c-ca01f773c149.png"
      />
      
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <img 
                src="/lovable-uploads/83cab07a-f6ee-41bb-970c-ca01f773c149.png" 
                alt="Dra. Beatriz Zamboni" 
                className="w-full h-auto rounded-xl shadow-softer"
              />
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="inline-block mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
                Odontopediatra Especialista
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
                Dra. Beatriz Zamboni Martins Panucci
              </h2>
              
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Especialista, mestre e doutoranda em Odontopediatria, dedico minha carreira ao cuidado humanizado da saúde bucal infantil, com foco especial no tratamento de freios orais usando tecnologia laser e sedação consciente.
              </p>
              
              <p className="text-neutral-700 mb-8 leading-relaxed">
                Com formação específica para o atendimento de bebês, tenho habilitação em sedação inalatória e uso de laser de alta e baixa potência, o que me permite oferecer tratamentos minimamente invasivos e confortáveis para os pequenos pacientes.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-500 mt-0.5 mr-3 shrink-0" />
                  <p className="text-neutral-700">Especialista e Mestre em Odontopediatria pela FORP-USP</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-500 mt-0.5 mr-3 shrink-0" />
                  <p className="text-neutral-700">Doutoranda em Clínica Integrada pela UEM</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-500 mt-0.5 mr-3 shrink-0" />
                  <p className="text-neutral-700">Habilitação em Sedação Inalatória com Óxido Nitroso</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-500 mt-0.5 mr-3 shrink-0" />
                  <p className="text-neutral-700">Habilitação em Laser de Alta e Baixa Potência</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-500 mt-0.5 mr-3 shrink-0" />
                  <p className="text-neutral-700">Formação específica para atendimento a bebês</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
              Qualificações
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
              Formação e Especialidades
            </h2>
            
            <p className="text-neutral-600 leading-relaxed">
              Dedicação contínua ao aprimoramento técnico e científico para oferecer os melhores tratamentos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-soft p-6 text-center transition-all duration-300 hover:shadow-softer transform hover:translate-y-[-5px]">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-50 text-brand-500 mb-6">
                <GraduationCap className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-neutral-900">Especialização</h3>
              <p className="text-neutral-600">Especialista em Odontopediatria pela FORP-USP</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft p-6 text-center transition-all duration-300 hover:shadow-softer transform hover:translate-y-[-5px]">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-50 text-brand-500 mb-6">
                <Award className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-neutral-900">Mestrado</h3>
              <p className="text-neutral-600">Mestre em Odontopediatria pela FORP-USP</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft p-6 text-center transition-all duration-300 hover:shadow-softer transform hover:translate-y-[-5px]">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-50 text-brand-500 mb-6">
                <Trophy className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-neutral-900">Doutorado</h3>
              <p className="text-neutral-600">Doutoranda em Clínica Integrada pela UEM</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft p-6 text-center transition-all duration-300 hover:shadow-softer transform hover:translate-y-[-5px]">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-50 text-brand-500 mb-6">
                <Heart className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-neutral-900">Habilitações</h3>
              <p className="text-neutral-600">Sedação e Laser de Alta Potência</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
                Filosofia de Trabalho
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
                Um olhar humanizado para a Odontopediatria
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-neutral-700">
              <p>
                Como odontopediatra e mãe, compreendo profundamente as preocupações dos pais quando se trata da saúde bucal de seus filhos. Minha abordagem combina excelência técnica com um olhar verdadeiramente humanizado para cada criança que atendo.
              </p>
              
              <p>
                Acredito que o ambiente do consultório deve ser acolhedor e seguro, onde os pequenos pacientes se sintam confortáveis e os pais, confiantes. Por isso, dedico tempo para explicar cada procedimento e responder a todas as dúvidas das famílias.
              </p>
              
              <p>
                Meu trabalho é fundamentado em evidências científicas, com foco em técnicas minimamente invasivas e no uso de tecnologias avançadas, como o laser e a sedação consciente, que proporcionam mais conforto e resultados melhores.
              </p>
              
              <p>
                Na cirurgia de freios orais, área em que me especializei, o uso do laser de alta potência representa um avanço significativo, oferecendo procedimentos mais precisos, com menos sangramento e recuperação mais rápida.
              </p>
              
              <p>
                Meu compromisso é proporcionar experiências positivas no consultório odontológico, contribuindo não apenas para a saúde bucal, mas também para o bem-estar geral e o desenvolvimento saudável de cada criança.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-brand-500">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-white">
              Agende uma consulta
            </h2>
            
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Estou pronta para atender seu filho com todo cuidado e atenção que ele merece.
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

export default About;
