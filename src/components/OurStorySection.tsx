import { Calendar, Home, Heart, Plane, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import antoniaImage from "@/assets/antonia-cat.jpg";

const OurStorySection = () => {
  const ourStoryEvents = [
    {
      year: "2018-2019",
      title: "Nos conocimos en la universidad",
      description: "El destino nos cruzó en los pasillos de Icesi, y mi vida cambió para siempre",
      icon: <Heart className="w-6 h-6" fill="currentColor" />,
      color: "text-primary",
    },
    {
      year: "2020",
      title: "Pandemia juntos",
      description: "Enfrentamos los días más difíciles lado a lado, y eso nos hizo más fuertes",
      icon: <Calendar className="w-6 h-6" />,
      color: "text-accent",
    },
    {
      year: "2021",
      title: "Nuestro hogar",
      description: "Nos fuimos a vivir juntos, compramos muebles y adoptamos a nuestra pequeña Antonia",
      icon: <Home className="w-6 h-6" />,
      color: "text-primary",
      image: antoniaImage,
      special: true,
    },
    {
      year: "2021-2024",
      title: "Viajes por Colombia y Europa",
      description: "Recorrimos el mundo juntos, creando recuerdos que atesoraremos para siempre",
      icon: <Plane className="w-6 h-6" />,
      color: "text-accent",
      locations: ["Bogotá", "Cartagena", "Barcelona", "Madrid", "París", "Amsterdam"],
    },
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-in-up">
          Nuestra Historia
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Casi 8 años de amor, aventuras y sueños compartidos
        </p>

        <div className="grid gap-8 md:gap-12">
          {ourStoryEvents.map((event, index) => (
            <Card 
              key={index}
              className={`shadow-soft border-border hover:shadow-romantic transition-romantic animate-scale-in ${
                event.special ? 'bg-gradient-warm' : ''
              }`}
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`${event.color} p-3 rounded-full bg-background shadow-soft`}>
                        {event.icon}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">
                          {event.year}
                        </span>
                        <h3 className="text-2xl font-semibold text-foreground">
                          {event.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                      {event.description}
                    </p>

                    {event.locations && (
                      <div className="flex flex-wrap gap-2">
                        {event.locations.map((location, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full text-sm text-primary"
                          >
                            <MapPin className="w-3 h-3" />
                            {location}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {event.image && (
                    <div className="md:w-1/3">
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 md:h-56 object-cover rounded-lg shadow-soft"
                      />
                      <p className="text-center text-sm text-muted-foreground mt-2 italic">
                        Nuestra pequeña Antonia 🐱
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;