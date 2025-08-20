import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-card/95 backdrop-blur-sm shadow-subtle border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto content-padding">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/8c669d56-d197-43e9-baf2-f83938eee062.png" 
              alt="HelvetiClean - Propreté en toute confiance" 
              className="h-12 w-auto transition-smooth hover:scale-105"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            <a 
              href="#services" 
              className="text-foreground/80 hover:text-foreground transition-smooth font-medium focus-visible:outline-primary"
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-foreground/80 hover:text-foreground transition-smooth font-medium focus-visible:outline-primary"
            >
              À propos
            </a>
            <a 
              href="#contact" 
              className="text-foreground/80 hover:text-foreground transition-smooth font-medium focus-visible:outline-primary"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden sm:flex items-center space-x-3 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-medium">+41 XX XXX XX XX</span>
            </div>
            <Button 
              variant="default" 
              size="sm"
              className="bg-primary hover:bg-primary/90 shadow-subtle hover:shadow-clean transition-gentle font-medium px-6"
            >
              Devis 24H
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;