import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/4ab9c738-49c7-4160-9191-4c0f0a6a9704.png" 
              alt="HelvetiClean" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-muted-foreground mb-4 max-w-md">
              Service de nettoyage professionnel et écologique en Suisse Romande. 
              Propreté en toute confiance pour bureaux, retail de luxe et copropriétés.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="font-medium">Devis gratuit sous 24h</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-professional">Nettoyage bureaux</a></li>
              <li><a href="#services" className="hover:text-primary transition-professional">Luxe Retail</a></li>
              <li><a href="#services" className="hover:text-primary transition-professional">Copropriétés</a></li>
              <li><a href="#contact" className="hover:text-primary transition-professional">Devis personnalisé</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+41 XX XXX XX XX</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@helveticlean.ch</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Suisse Romande</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 HelvetiClean. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-professional">Mentions légales</a>
              <a href="#" className="hover:text-primary transition-professional">Politique de confidentialité</a>
              <a href="#" className="hover:text-primary transition-professional">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;