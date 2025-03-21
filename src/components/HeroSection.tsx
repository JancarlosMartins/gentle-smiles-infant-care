
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  ctaText?: string;
  ctaUrl?: string;
  isHomepage?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  imageUrl,
  ctaText,
  ctaUrl,
  isHomepage = false,
}: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector(".section");
    if (nextSection) {
      window.scrollTo({
        top: nextSection.getBoundingClientRect().top + window.scrollY - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div 
      className={`relative w-full ${isHomepage ? 'h-screen' : 'h-[70vh] md:h-[60vh]'} overflow-hidden`}
      style={{
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.9)), url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/90"></div>
      
      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10">
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-6 leading-tight">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-neutral-700 mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}
          
          {ctaText && ctaUrl && (
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-brand-500 text-white font-medium rounded-full shadow-md hover:bg-brand-600 transition-all duration-300 transform hover:scale-[1.03]"
            >
              {ctaText}
            </a>
          )}
        </div>

        {isHomepage && (
          <button
            onClick={scrollToNextSection}
            className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-soft hover:shadow-md transition-all duration-300 animate-bounce ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            aria-label="Rolar para baixo"
          >
            <ChevronDown className="h-6 w-6 text-brand-600" />
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
