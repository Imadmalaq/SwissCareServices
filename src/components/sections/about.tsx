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
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-secondary">HelvetiClean</span>, votre partenaire de{" "}
              <span className="text-primary">confiance</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Spécialisée dans les prestations récurrentes de nettoyage des bureaux et locaux professionnels en Suisse Romande, HelvetiClean s'engage à offrir un service d'excellence.
              </p>
              
              <p>
                En plus de favoriser la propreté de vos bureaux et l'hygiène de vie de vos salariés, l'entretien de vos locaux est essentiel pour assurer le bien-être au travail et l'image de votre entreprise.
              </p>

              <p>
                Nos équipes formées utilisent exclusivement des produits écologiques certifiés pour garantir un environnement sain tout en respectant notre planète.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="font-semibold text-lg">Engagement qualité</span>
              </div>
              <p className="text-muted-foreground">
                <strong>Devis gratuit sous 24h</strong> - Nous nous engageons à vous fournir une réponse rapide et personnalisée pour tous vos besoins de nettoyage professionnel.
              </p>
            </div>
          </div>

          {/* Right Column - Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="shadow-clean hover:shadow-professional transition-professional">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
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