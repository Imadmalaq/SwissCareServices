import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Sparkles, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen gradient-fresh flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto content-padding section-padding relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center px-5 py-3 bg-card shadow-subtle rounded-full">
              <Sparkles className="h-4 w-4 text-accent mr-3" />
              <span className="text-sm font-medium text-muted-foreground">Service écologique Swiss Made</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight">
              <span className="text-primary">Propreté</span> en toute{" "}
              <span className="text-secondary">confiance</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Service de nettoyage récurrent et écologique pour bureaux, retail de luxe et copropriétés en Suisse Romande.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 shadow-subtle hover:shadow-clean transition-gentle text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 font-medium w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Clock className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Obtenez un devis en 24H
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-secondary/20 text-secondary hover:bg-secondary/5 hover:border-secondary/40 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 transition-gentle font-medium w-full sm:w-auto"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nos services
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-muted-foreground">Écologique</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-muted-foreground">Swiss Made</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-muted-foreground">Service récurrent</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <Card className="p-10 shadow-clean bg-card border-0 hover-lift">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Devis rapide</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Obtenez votre devis personnalisé en moins de 24 heures
                  </p>
                </div>
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Évaluation gratuite</span>
                  </div>
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Réponse sous 24h</span>
                  </div>
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">Sans engagement</span>
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