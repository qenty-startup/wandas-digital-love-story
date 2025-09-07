import { useState, useEffect } from "react";
import { Gift, Heart, Sparkles, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SurpriseSection = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => {
      setShowCoupon(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const confettiElements = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      className="absolute animate-confetti"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 2}s`,
      }}
    >
      <Heart 
        className="w-4 h-4 text-primary" 
        fill="currentColor"
        style={{ 
          transform: `rotate(${Math.random() * 360}deg)`,
          color: `hsl(${342 + Math.random() * 20}, 47%, ${60 + Math.random() * 20}%)`
        }}
      />
    </div>
  ));

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-romantic relative overflow-hidden">
      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {confettiElements}
        </div>
      )}

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="animate-scale-in">
          <div className="flex justify-center mb-8">
            <Gift className="w-20 h-20 text-primary-foreground animate-heart-pulse" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-primary-foreground">
            ¡Sorpresa!
          </h2>

          <div className="flex justify-center gap-4 mb-12">
            <Sparkles className="w-8 h-8 text-accent animate-float" />
            <Sparkles className="w-10 h-10 text-primary-foreground animate-float" style={{ animationDelay: "1s" }} />
            <Sparkles className="w-8 h-8 text-accent animate-float" style={{ animationDelay: "2s" }} />
          </div>
        </div>

        {showCoupon && (
          <Card className="bg-card/95 backdrop-blur-sm shadow-romantic border-border animate-scale-in">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <ShoppingBag className="w-16 h-16 text-primary" />
              </div>

              <h3 className="text-3xl font-bold mb-4 text-primary">
                Cupón Digital Shein
              </h3>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Para que puedas elegir toda la ropa hermosa que quieras. 
                Porque mereces sentirte tan bella por fuera como lo eres por dentro.
              </p>

              <div className="bg-gradient-warm p-6 rounded-lg mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-primary animate-heart-pulse" fill="currentColor" />
                  <span className="text-xl font-semibold text-foreground">
                    Tu regalo especial te está esperando
                  </span>
                  <Heart className="w-6 h-6 text-primary animate-heart-pulse" fill="currentColor" />
                </div>
                
                <p className="text-muted-foreground">
                  Habla conmigo para activar tu cupón y ¡ve de shopping! 💄👗
                </p>
              </div>

              <div className="flex justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full shadow-romantic transition-bounce"
                  onClick={() => window.open('https://shein.com', '_blank')}
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Ir a Shein
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: "1.5s" }}>
          <p className="text-xl text-primary-foreground font-semibold">
            Te amo infinitamente, mi amor 💖
          </p>
        </div>
      </div>
    </section>
  );
};

export default SurpriseSection;