import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Sparkles, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-card/90 rounded-full shadow-clean mb-8">
              <Sparkles className="h-4 w-4 text-accent mr-2" />
              <span className="text-sm font-medium">Service écologique Swiss Made</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-primary">Propreté</span> en toute{" "}
              <span className="text-secondary">confiance</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Service de nettoyage récurrent et écologique pour bureaux, retail de luxe et copropriétés en Suisse Romande.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 shadow-professional text-lg px-8 py-6 rounded-xl"
              >
                <Clock className="mr-2 h-5 w-5" />
                Obtenez un devis en 24H
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-6 rounded-xl"
              >
                Nos services
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Écologique</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Swiss Made</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Service récurrent</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <Card className="p-8 shadow-professional bg-card/95 backdrop-blur-sm">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-6">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Devis rapide</h3>
                <p className="text-muted-foreground mb-6">
                  Obtenez votre devis personnalisé en moins de 24 heures
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Évaluation gratuite</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Réponse sous 24h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Sans engagement</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;