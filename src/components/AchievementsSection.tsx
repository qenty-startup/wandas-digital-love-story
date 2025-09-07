import { Trophy, Plane, GraduationCap, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AchievementsSection = () => {
  const achievements = [
    {
      year: "2023",
      title: "Prácticas en Purdue University",
      description: "Estados Unidos te abrió las puertas y brillaste como siempre",
      icon: <Plane className="w-8 h-8" />,
      color: "text-primary",
      highlight: true,
    },
    {
      year: "2024",
      title: "Graduación con Honores",
      description: "Doble titulación en Biología y Química, coronando años de dedicación",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "text-accent",
      highlight: true,
    },
    {
      year: "2024",
      title: "Beca para Maestría en España",
      description: "Tu excelencia te llevará aún más lejos",
      icon: <Trophy className="w-8 h-8" />,
      color: "text-primary",
      highlight: true,
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-in-up">
          Tus Logros
        </h2>
        <p className="text-center text-muted-foreground mb-8 text-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          como la pande me llena de orgullo, sé lo fuerte que eres y lo lejos que vas a llegar
        </p>

        {/* Special Message */}
        <div className="text-center mb-16 animate-scale-in" style={{ animationDelay: "0.4s" }}>
          <div className="inline-flex items-center gap-3 bg-gradient-romantic text-primary-foreground px-8 py-4 rounded-full shadow-romantic">
            <Star className="w-6 h-6 animate-heart-pulse" fill="currentColor" />
            <span className="text-xl font-semibold">Eres la mejor, estoy orgulloso de ti</span>
            <Star className="w-6 h-6 animate-heart-pulse" fill="currentColor" />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className={`shadow-soft border-border hover:shadow-romantic transition-romantic animate-scale-in group ${
                achievement.highlight ? 'hover:scale-105' : ''
              }`}
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`${achievement.color} mb-4 flex justify-center transform group-hover:scale-110 transition-bounce`}>
                  {achievement.icon}
                </div>
                
                <span className="text-sm font-medium text-muted-foreground">
                  {achievement.year}
                </span>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {achievement.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>

                {achievement.highlight && (
                  <div className="mt-4 flex justify-center">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 text-accent animate-heart-pulse" 
                          fill="currentColor"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;