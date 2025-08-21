import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-card/95 backdrop-blur-sm shadow-subtle border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto content-padding">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/cebfbee3-13cc-40a6-88e9-11059c5429b5.png" 
              alt="LEMANCLEAN - Propreté en toute confiance" 
              className="h-12 md:h-16 w-auto transition-smooth hover:scale-105"
            />
          </div>
          
          {/* Desktop Navigation */}
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

          {/* Desktop Contact & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="hidden lg:flex items-center space-x-3 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-medium">+41 76 693 09 49</span>
            </div>
            <Button 
              variant="default" 
              size="sm"
              className="bg-primary hover:bg-primary/90 shadow-subtle hover:shadow-clean transition-gentle font-medium px-6"
            >
              Devis 24H
            </Button>
          </div>

          {/* Mobile CTA & Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <Button 
              variant="default" 
              size="sm"
              className="bg-primary hover:bg-primary/90 shadow-subtle hover:shadow-clean transition-gentle font-medium px-4 text-sm"
            >
              Devis
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-muted/50 transition-gentle p-2"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-card/95 backdrop-blur-sm">
            <div className="py-6 space-y-6">
              <a 
                href="#services" 
                className="block text-foreground/80 hover:text-foreground transition-smooth font-medium focus-visible:outline-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="block text-foreground/80 hover:text-foreground transition-smooth font-medium focus-visible:outline-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </a>
              <a 
                href="#contact" 
                className="block text-foreground/80 hover:text-foreground transition-smooth font-medium focus-visible:outline-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-medium">+41 76 693 09 49</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;