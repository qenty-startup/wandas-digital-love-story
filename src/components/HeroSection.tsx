import { Heart, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

interface HeroSectionProps {
  onStartJourney: () => void;
}

const HeroSection = ({ onStartJourney }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Floating Hearts */}
      <div className="absolute top-20 left-20 animate-float">
        <Heart className="w-8 h-8 text-primary animate-heart-pulse" fill="currentColor" />
      </div>
      <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: "1s" }}>
        <Heart className="w-6 h-6 text-accent animate-heart-pulse" fill="currentColor" />
      </div>
      <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: "2s" }}>
        <Heart className="w-10 h-10 text-primary/70 animate-heart-pulse" fill="currentColor" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up">
          <span className="text-primary">Feliz cumpleaños,</span>
          <br />
          <span className="text-accent text-6xl md:text-8xl">Wanda</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 animate-fade-in-up leading-relaxed max-w-3xl mx-auto" style={{ animationDelay: "0.3s" }}>
          Esta es nuestra historia hecha web, porque eres{" "}
          <span className="text-primary font-semibold">lo mejor que me ha pasado</span>
        </p>

        {/* Music Note */}
        <div className="flex items-center justify-center gap-3 mb-12 animate-scale-in" style={{ animationDelay: "0.6s" }}>
          <Music className="w-6 h-6 text-accent" />
          <span className="text-muted-foreground italic">
            "Es que me encantas tanto" - Aitana
          </span>
        </div>

        <Button 
          onClick={onStartJourney}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl rounded-full shadow-romantic transition-bounce animate-scale-in"
          style={{ animationDelay: "0.9s" }}
        >
          Comenzar nuestro viaje
          <Heart className="w-6 h-6 ml-2 animate-heart-pulse" fill="currentColor" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;