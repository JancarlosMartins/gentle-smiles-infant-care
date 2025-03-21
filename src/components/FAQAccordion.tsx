
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="font-medium text-lg text-neutral-800">{question}</h3>
        <span className="ml-4">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-brand-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-neutral-500" />
          )}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-neutral-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

interface FAQAccordionProps {
  faqs: FAQItemProps[];
}

const FAQAccordion = ({ faqs }: FAQAccordionProps) => {
  return (
    <div className="bg-white shadow-soft rounded-xl p-6 md:p-8">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQAccordion;
