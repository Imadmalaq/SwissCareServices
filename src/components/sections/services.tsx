import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, ShoppingBag, Home, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Bureau",
      description: "Entretien de bureaux d'entreprise. Nous assurons la propreté de vos bureaux et le bien-être de vos salariés avec des services d'entretien haut de gamme.",
      features: ["Nettoyage quotidien", "Entretien des espaces communs", "Produits écologiques", "Horaires flexibles"],
      color: "primary"
    },
    {
      icon: ShoppingBag,
      title: "Luxe Retail",
      description: "Entretien des lieux de prestige. Nous favorisons la propreté de vos surfaces de vente pour refléter le niveau d'excellence de votre entreprise.",
      features: ["Standards luxury", "Attention aux détails", "Discrétion maximale", "Produits haut de gamme"],
      color: "secondary"
    },
    {
      icon: Home,
      title: "Copropriété",
      description: "La propreté des parties communes est primordiale. Cette qualité participe à la valorisation de l'immeuble et au confort des habitants.",
      features: ["Parties communes", "Cages d'escalier", "Espaces extérieurs", "Entretien régulier"],
      color: "accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Services de nettoyage professionnel adaptés à vos besoins spécifiques en Suisse Romande
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-professional transition-professional shadow-clean">
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-gradient-to-br ${
                    service.color === 'primary' ? 'from-primary to-primary/80' :
                    service.color === 'secondary' ? 'from-secondary to-secondary/80' :
                    'from-accent to-accent/80'
                  }`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          service.color === 'primary' ? 'bg-primary' :
                          service.color === 'secondary' ? 'bg-secondary' :
                          'bg-accent'
                        }`}></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={
                      service.title === 'Bureau' ? '/service-bureau' :
                      service.title === 'Luxe Retail' ? '/service-retail' :
                      '/service-copropriete'
                    }
                  >
                    <Button 
                      variant="outline" 
                      className={`w-full group-hover:${
                        service.color === 'primary' ? 'bg-primary hover:text-primary-foreground' :
                        service.color === 'secondary' ? 'bg-secondary hover:text-secondary-foreground' :
                        'bg-accent hover:text-accent-foreground'
                      } transition-professional`}
                    >
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 shadow-professional px-8 py-6 text-lg rounded-xl"
          >
            Demander un devis personnalisé
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;