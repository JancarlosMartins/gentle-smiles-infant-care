
interface TechnologyCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const TechnologyCard = ({ title, description, imageUrl }: TechnologyCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-softer group">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold mb-3 text-neutral-900">{title}</h3>
        <p className="text-neutral-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default TechnologyCard;
