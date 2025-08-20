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
    <section id="services" className="section-padding bg-muted/20">
      <div className="max-w-7xl mx-auto content-padding">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Services de nettoyage professionnel adaptés à vos besoins spécifiques en Suisse Romande
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover-lift shadow-subtle border-0 bg-card">
                <CardHeader className="text-center pb-6 pt-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${
                    service.color === 'primary' ? 'bg-primary/10' :
                    service.color === 'secondary' ? 'bg-secondary/10' :
                    'bg-accent/10'
                  }`}>
                    <Icon className={`h-7 w-7 ${
                      service.color === 'primary' ? 'text-primary' :
                      service.color === 'secondary' ? 'text-secondary' :
                      'text-accent'
                    }`} />
                  </div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8 px-8 pb-10">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          service.color === 'primary' ? 'bg-primary' :
                          service.color === 'secondary' ? 'bg-secondary' :
                          'bg-accent'
                        }`}></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
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
                      className="w-full border-0 bg-muted/30 hover:bg-muted/60 transition-gentle font-medium py-6"
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

        <div className="text-center mt-20">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 shadow-subtle hover:shadow-clean transition-gentle px-10 py-6 text-lg font-medium"
          >
            Demander un devis personnalisé
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;