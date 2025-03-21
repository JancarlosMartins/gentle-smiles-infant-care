
import { Link } from "react-router-dom";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard = ({ id, title, description, icon, link }: ServiceCardProps) => {
  return (
    <div id={id} className="bg-white rounded-xl shadow-soft p-6 transition-all duration-300 hover:shadow-softer transform hover:translate-y-[-5px]">
      <div className="mb-6 inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-50 text-brand-500">
        {icon}
      </div>
      
      <h3 className="font-serif text-xl font-semibold mb-3 text-neutral-900">{title}</h3>
      
      <p className="text-neutral-600 mb-5 leading-relaxed">{description}</p>
      
      <Link to={link} className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 transition-colors duration-300">
        Saiba mais
        <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;
