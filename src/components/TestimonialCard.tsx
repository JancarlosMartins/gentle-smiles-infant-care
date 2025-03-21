
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  city?: string;
  image?: string;
}

const TestimonialCard = ({ quote, name, city, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-soft p-6 md:p-8 transition-all duration-300 hover:shadow-softer">
      <div className="flex items-start mb-6">
        <Quote className="h-8 w-8 text-brand-200 mr-2 shrink-0" />
      </div>
      
      <p className="text-neutral-700 mb-6 italic leading-relaxed">{quote}</p>
      
      <div className="flex items-center">
        {image && (
          <div className="mr-4 h-12 w-12 rounded-full overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="h-full w-full object-cover"
            />
          </div>
        )}
        
        <div>
          <h4 className="font-medium text-neutral-900">{name}</h4>
          {city && <p className="text-sm text-neutral-500">{city}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
