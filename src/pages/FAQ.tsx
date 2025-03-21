
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FAQAccordion from "@/components/FAQAccordion";
import { Link } from "react-router-dom";

const FAQ = () => {
  const freioOralFaqs = [
    {
      question: "Quando devo avaliar o freio lingual do meu bebê?",
      answer: "O ideal é que a avaliação do freio lingual seja feita logo após o nascimento. No Brasil, o Teste da Linguinha é obrigatório em maternidades. No entanto, se houver dificuldades na amamentação, como dor materna ou má pega, é importante buscar uma avaliação especializada o quanto antes, independentemente de o teste ter sido realizado."
    },
    {
      question: "A cirurgia de freio lingual é dolorosa?",
      answer: "Quando realizada com laser, a cirurgia de freio lingual é minimamente invasiva e causa desconforto mínimo. Em bebês pequenos, geralmente não há necessidade de anestesia local. Em crianças maiores, utilizamos anestesia tópica e, quando necessário, anestesia local, além da possibilidade de sedação consciente para maior conforto."
    },
    {
      question: "Por que optar pela cirurgia a laser em vez da técnica convencional?",
      answer: "A cirurgia a laser oferece diversas vantagens: é mais precisa, causa menos sangramento, proporciona recuperação mais rápida, tem menor risco de infecção e geralmente resulta em menos desconforto pós-operatório. Além disso, o procedimento é mais rápido, o que é especialmente benéfico para crianças pequenas."
    },
    {
      question: "É verdade que o freio lingual pode afetar a fala da criança?",
      answer: "Sim, um freio lingual restritivo pode limitar os movimentos da língua, afetando a pronúncia de determinados sons, especialmente os que exigem maior elevação da ponta da língua. A avaliação precoce e a intervenção, quando necessária, podem prevenir problemas futuros na fala."
    },
    {
      question: "A cirurgia de freio labial é necessária em bebês?",
      answer: "Nem sempre. A necessidade de cirurgia de freio labial em bebês deve ser avaliada individualmente. Em alguns casos, o freio labial restritivo pode interferir na amamentação ou causar outros problemas. Um especialista poderá determinar se há indicação para o procedimento."
    }
  ];

  const sedacaoFaqs = [
    {
      question: "O que é sedação consciente com óxido nitroso?",
      answer: "A sedação consciente com óxido nitroso é uma técnica segura que utiliza uma mistura de oxigênio e óxido nitroso para induzir um estado de relaxamento, mantendo a criança consciente durante todo o procedimento. É administrada por uma máscara nasal especial e seus efeitos são rapidamente reversíveis."
    },
    {
      question: "A sedação consciente é segura para crianças?",
      answer: "Sim, a sedação consciente com óxido nitroso é considerada extremamente segura para crianças quando administrada por profissionais habilitados. É uma das formas mais seguras de sedação disponíveis, com décadas de uso comprovado em odontopediatria."
    },
    {
      question: "Quais crianças se beneficiam da sedação consciente?",
      answer: "A sedação consciente é especialmente indicada para crianças ansiosas, com medo de procedimentos odontológicos, com reflexo de vômito acentuado ou que precisam ser submetidas a procedimentos mais longos ou complexos."
    },
    {
      question: "A criança pode comer antes da sedação com óxido nitroso?",
      answer: "Sim, não há restrições alimentares para a sedação com óxido nitroso. Diferente da anestesia geral, a criança pode se alimentar normalmente antes do procedimento."
    },
    {
      question: "Quanto tempo duram os efeitos da sedação consciente?",
      answer: "Os efeitos da sedação com óxido nitroso se dissipam rapidamente após o término da administração. Ao final do procedimento, a criança recebe oxigênio puro por alguns minutos, e normalmente está completamente recuperada em 5 a 10 minutos."
    }
  ];

  const tratamentosFaqs = [
    {
      question: "A partir de qual idade posso levar meu filho ao odontopediatra?",
      answer: "A primeira consulta odontológica deve ocorrer idealmente antes do primeiro ano de vida, por volta dos 6 meses, quando começam a surgir os primeiros dentes. No entanto, bebês com dificuldades na amamentação relacionadas aos freios orais podem ser avaliados desde os primeiros dias de vida."
    },
    {
      question: "Com que frequência devo levar meu filho ao odontopediatra?",
      answer: "Após a primeira consulta, o odontopediatra estabelecerá um plano de acompanhamento individualizado. Em geral, recomenda-se consultas a cada 6 meses para prevenção e monitoramento do desenvolvimento bucal, mas esse intervalo pode variar de acordo com as necessidades específicas de cada criança."
    },
    {
      question: "O que é laserterapia de baixa potência e para que serve?",
      answer: "A laserterapia de baixa potência é um tratamento que utiliza luz laser em baixa intensidade para estimular processos celulares. Na odontopediatria, é utilizada para alívio da dor, redução de inflamação, aceleração da cicatrização, tratamento de aftas e herpes labial, entre outras aplicações. É um procedimento indolor e não invasivo."
    },
    {
      question: "Como cuidar da saúde bucal de um bebê antes de nascerem os dentes?",
      answer: "Mesmo antes do surgimento dos primeiros dentes, é importante limpar a gengiva do bebê após as mamadas, utilizando uma gaze ou paninho limpo umedecido em água filtrada. Isso ajuda a remover resíduos de leite e habitua o bebê ao cuidado bucal desde cedo."
    },
    {
      question: "Há relação entre amamentação e desenvolvimento bucal?",
      answer: "Sim, a amamentação desempenha um papel fundamental no desenvolvimento das estruturas bucais. O ato de sugar o peito estimula o correto crescimento da mandíbula e maxila, favorece o posicionamento adequado da língua e contribui para a respiração nasal, fatores importantes para o desenvolvimento facial harmonioso e a prevenção de problemas ortodônticos futuros."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <HeroSection
        title="Perguntas Frequentes"
        subtitle="Esclareça suas dúvidas sobre nossos tratamentos e procedimentos"
        imageUrl="/lovable-uploads/aab68b53-cc07-4b5a-8500-c09897a1a8ad.png"
      />
      
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
              FAQ
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
              Cirurgia de Freios Orais
            </h2>
            
            <p className="text-neutral-600 leading-relaxed">
              Respostas para as dúvidas mais comuns sobre as cirurgias de freio lingual e labial.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={freioOralFaqs} />
          </div>
        </div>
      </section>
      
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
              FAQ
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
              Sedação Consciente
            </h2>
            
            <p className="text-neutral-600 leading-relaxed">
              Informações sobre a sedação consciente com óxido nitroso e seus benefícios.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={sedacaoFaqs} />
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
              FAQ
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
              Tratamentos e Cuidados
            </h2>
            
            <p className="text-neutral-600 leading-relaxed">
              Dúvidas gerais sobre odontopediatria e saúde bucal infantil.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={tratamentosFaqs} />
          </div>
        </div>
      </section>
      
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
              Ainda tem dúvidas?
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">
              Entre em contato
            </h2>
            
            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
              Se suas dúvidas não foram respondidas, entre em contato conosco. Teremos prazer em esclarecer todas as suas questões.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20tirar%20algumas%20dúvidas%20sobre%20os%20tratamentos."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-brand-500 text-white font-medium rounded-full shadow-md hover:bg-brand-600 transition-all duration-300"
              >
                WhatsApp Direto
              </a>
              
              <Link 
                to="/contato" 
                className="px-8 py-3 bg-white text-brand-600 border border-brand-200 font-medium rounded-full shadow-sm hover:bg-brand-50 transition-all duration-300"
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

export default FAQ;
