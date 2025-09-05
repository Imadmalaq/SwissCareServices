import { Card, CardContent } from "@/components/ui/card";
import { Shield, Leaf, Clock, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Confiance",
      description: "Une relation de confiance basée sur la transparence et la qualité de nos prestations."
    },
    {
      icon: Leaf,
      title: "Écologique",
      description: "Produits respectueux de l'environnement pour un nettoyage sain et durable."
    },
    {
      icon: Clock,
      title: "Ponctualité",
      description: "Respect des horaires et des engagements pour un service fiable."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Standards élevés et attention aux détails pour un résultat irréprochable."
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto content-padding">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              <span className="text-secondary">SwissCareServices</span>, votre partenaire de{" "}
              <span className="text-primary">confiance</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              SwissCareServices est votre partenaire de confiance pour des services de nettoyage professionnel en Suisse Romande. 
              Nous nous engageons à utiliser exclusivement des produits écologiques pour préserver 
              votre environnement et votre santé.
            </p>

            <div className="p-8 bg-muted/30 rounded-2xl border border-muted">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="font-semibold text-lg">Engagement qualité</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Devis gratuit sous 24h</strong> - Nous nous engageons à vous fournir une réponse rapide et personnalisée pour tous vos besoins de nettoyage professionnel.
              </p>
            </div>
          </div>

          {/* Right Column - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover-lift shadow-subtle border-0 bg-card">
                  <CardContent className="p-6 sm:p-8 text-center space-y-3 sm:space-y-4">
                    <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-primary/5 rounded-2xl">
                      <Icon className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg">{value.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;