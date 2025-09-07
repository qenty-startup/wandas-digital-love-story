import { Calendar, GraduationCap, Award, Plane, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import graduationImage from "@/assets/wanda_colegio.jpg";
import antoniaGata from "@/assets/antonia_gata.jpg";
import wandaIcesi from "@/assets/wanda_icesi.jpeg";
import wandaPurdue from "@/assets/wanda_purdue.jpeg";
import wandaAlicante from "@/assets/wanda_neurociencias.jpeg";



const TimelineSection = () => {
  const timelineEvents = [
    {
      year: "2000",
      date: "5 de septiembre",
      title: "Nace una estrella ⭐",
      description: "El mundo cambió para siempre cuando llegaste tú, tus jóvenes papás no sabían lo grandiosa y fuerte que iba a ser esa pequeña niña.",
      icon: <Heart className="w-6 h-6" fill="currentColor" />,
      color: "text-primary",
    },
    {
      year: "2017",
      title: "Graduación Extraordinaria",
      description: "Mejor bachiller y personera. Ya brillabas desde entonces, se notaban esos dotes de lider y esas ganas de siempre ayudar a los demás.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "text-accent",
      image: graduationImage,
    },
    {
      year: "2017",
      title: "Beca Ser Pilo Paga",
      description: "Tu excelencia académica reconocida a nivel nacional, para llevarte a una gran universidad.",
      icon: <Award className="w-6 h-6" />,
      color: "text-primary",
    },
    {
      year: "2017",
      title: "Universidad Icesi",
      description: "Comenzó tu aventura universitaria y eres tan crack que no hiciste una, sino dos carreras, Biología y Química.",
      icon: <Calendar className="w-6 h-6" />,
      color: "text-accent",
      image: wandaIcesi
    },
        {
      year: "2023",
      title: "Purdue University",
      description: "Lograste hacer tus practicas universitarias en Estados Unidos, llenándonos de orgullo a todos.",
      icon: <Calendar className="w-6 h-6" />,
      color: "text-accent",
      image: wandaPurdue
    },
        {
      year: "2024",
      title: "Instituto de Neurociencias UMH-CSIC",
      description: "Por tu berraquera y superación lograste obtener la beca para ir a hacer tu maestria en España.",
      icon: <Calendar className="w-6 h-6" />,
      color: "text-accent",
      image: wandaIcesi
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-in-up">
          Tu Historia
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Desde el día que naciste, has dejado huella en este mundo
        </p>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-romantic transform md:-translate-x-1/2" />

          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className={`relative flex items-center mb-12 animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              {/* Desktop Layout */}
              <div className="hidden md:flex items-center w-full">
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'order-2 pl-8'}`}>
                  <Card className="shadow-soft border-border hover:shadow-romantic transition-romantic">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`${event.color} ${index % 2 === 1 ? 'order-2' : ''}`}>
                          {event.icon}
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">
                          {event.year}
                        </span>
                        {event.date && (
                          <span className="text-sm text-primary font-medium">
                            • {event.date}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                      {event.image && (
                        <div className="mt-4">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline Dot */}
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-soft z-10" />
                
                <div className={`w-1/2 ${index % 2 === 1 ? 'order-1' : ''}`} />
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden flex items-start gap-4 w-full">
                {/* Timeline Dot */}
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-soft z-10 mt-2 flex-shrink-0" />
                
                <Card className="flex-1 shadow-soft border-border hover:shadow-romantic transition-romantic">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={event.color}>
                        {event.icon}
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        {event.year}
                      </span>
                      {event.date && (
                        <span className="text-sm text-primary font-medium">
                          • {event.date}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {event.description}
                    </p>
                    {event.image && (
                      <div className="mt-3">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;