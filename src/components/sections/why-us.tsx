import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Leaf, Shield, Clock, Award, Users } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: Leaf,
      title: "Produits Écologiques",
      description: "Nous utilisons exclusivement des produits écologiques respectueux de l'environnement et de votre santé."
    },
    {
      icon: Shield,
      title: "Équipe Professionnelle",
      description: "Personnel formé, assuré et discret pour garantir un service de qualité en toute confiance."
    },
    {
      icon: Clock,
      title: "Flexibilité Horaire",
      description: "Intervention adaptée à votre planning, y compris en dehors des heures d'ouverture."
    },
    {
      icon: Award,
      title: "Standards Swiss Made",
      description: "Respect des plus hauts standards de qualité suisses pour un résultat impeccable."
    },
    {
      icon: Users,
      title: "Service Personnalisé",
      description: "Écoute attentive de vos besoins pour un service sur mesure adapté à vos exigences."
    },
    {
      icon: CheckCircle,
      title: "Engagement Qualité",
      description: "Satisfaction garantie avec un suivi personnalisé et une amélioration continue."
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto content-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pourquoi choisir <span className="text-primary">SwissCareServices</span> ?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Notre expertise et notre engagement font la différence pour un service de nettoyage d'exception
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="hover-lift bg-card border-0 shadow-subtle">
              <CardContent className="mobile-card-padding text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed mobile-text-responsive">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;