import { Heart, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface LoveLetterSectionProps {
  onRevealSurprise: () => void;
}

const LoveLetterSection = ({ onRevealSurprise }: LoveLetterSectionProps) => {
  return (
    <section className="py-20 px-6 bg-gradient-warm min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary animate-fade-in-up">
          Mi amor,
        </h2>

        <Card className="shadow-romantic border-border animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <p className="text-xl mb-6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                Hoy celebro tu vida y todo lo que eres. Desde el 5 de septiembre del 2000 el mundo cambió, 
                porque nació una mujer increíble, y tuve la suerte de que el destino me cruzara contigo.
              </p>

              <p className="text-lg mb-6 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
                Han pasado casi 8 años desde que nuestras vidas se unieron, y en ese tiempo hemos compartido 
                risas, viajes, sueños, hasta los días más difíciles, como la pandemia. Hemos construido un hogar, 
                adoptado a nuestra pequeña Antonia, y llenado de amor cada rincón donde hemos estado.
              </p>

              <p className="text-lg mb-6 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
                Admiro profundamente a la mujer que eres: <span className="text-primary font-semibold">brillante, apasionada, 
                llena de bondad</span> y de sueños que persigues con valentía. Me inspiras todos los días a ser mejor, 
                y me siento orgulloso de cada logro que alcanzas, porque sé el esfuerzo y la dedicación que hay detrás.
              </p>

              <p className="text-lg mb-6 animate-fade-in-up" style={{ animationDelay: "1.1s" }}>
                Eres mi compañera de vida, mi amor, mi amiga, y la persona con la que quiero seguir construyendo 
                recuerdos en todos los lugares del mundo. No necesito más pruebas: <span className="text-primary font-semibold">
                eres y siempre serás mi lugar favorito</span>.
              </p>

              <p className="text-lg mb-6 animate-fade-in-up" style={{ animationDelay: "1.3s" }}>
                Gracias por elegirme, por amarme, por caminar conmigo. Hoy, en tu cumpleaños, solo quiero recordarte 
                lo que ya sabes: te amo con todo mi corazón, y siempre estaré a tu lado para cumplir todos esos 
                sueños que aún nos esperan.
              </p>

              <div className="text-center mt-12 animate-scale-in" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center justify-center gap-2 mb-8">
                  <Heart className="w-8 h-8 text-primary animate-heart-pulse" fill="currentColor" />
                  <span className="text-2xl font-bold text-primary">Feliz cumpleaños, mi amor</span>
                  <Heart className="w-8 h-8 text-primary animate-heart-pulse" fill="currentColor" />
                </div>

                <Button 
                  onClick={onRevealSurprise}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl rounded-full shadow-romantic transition-bounce group"
                >
                  <Gift className="w-6 h-6 mr-3 group-hover:animate-heart-pulse" />
                  Haz clic para tu sorpresa
                  <Heart className="w-6 h-6 ml-3 animate-heart-pulse" fill="currentColor" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LoveLetterSection;