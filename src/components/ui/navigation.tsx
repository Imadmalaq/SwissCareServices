import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-card shadow-clean border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/8c669d56-d197-43e9-baf2-f83938eee062.png" 
              alt="HelvetiClean - Propreté en toute confiance" 
              className="h-16 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-professional">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-professional">
              À propos
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-professional">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+41 XX XXX XX XX</span>
            </div>
            <Button 
              variant="default" 
              size="sm"
              className="bg-primary hover:bg-primary/90 shadow-clean"
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