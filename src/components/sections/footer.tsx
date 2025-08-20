import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <img 
              src="/lovable-uploads/8c669d56-d197-43e9-baf2-f83938eee062.png" 
              alt="HelvetiClean" 
              className="h-12 sm:h-16 w-auto mb-4"
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

        <div className="border-t pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
            <p>&copy; 2024 HelvetiClean. Tous droits réservés.</p>
            <div className="space-y-2 w-full sm:w-auto">
              <Collapsible>
                <CollapsibleTrigger className="flex items-center gap-2 hover:text-primary transition-professional">
                  <span>Mentions légales</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 text-xs text-muted-foreground">
                  <div className="bg-muted/50 p-3 sm:p-4 rounded-lg max-w-sm sm:max-w-md">
                    <p className="mb-2"><strong>HelvetiClean</strong></p>
                    <p>Service de nettoyage professionnel</p>
                    <p>Suisse Romande</p>
                    <p className="mt-2">Email: contact@helveticlean.ch</p>
                    <p>Téléphone: +41 XX XXX XX XX</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <CollapsibleTrigger className="flex items-center gap-2 hover:text-primary transition-professional">
                  <span>Politique de confidentialité</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 text-xs text-muted-foreground">
                  <div className="bg-muted/50 p-3 sm:p-4 rounded-lg max-w-sm sm:max-w-md">
                    <p className="mb-2"><strong>Protection des données</strong></p>
                    <p>Nous respectons votre vie privée et protégeons vos données personnelles conformément à la législation suisse en vigueur.</p>
                    <p className="mt-2">Les informations collectées via notre formulaire de contact sont utilisées uniquement pour répondre à vos demandes de devis.</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <CollapsibleTrigger className="flex items-center gap-2 hover:text-primary transition-professional">
                  <span>CGV</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 text-xs text-muted-foreground">
                  <div className="bg-muted/50 p-3 sm:p-4 rounded-lg max-w-sm sm:max-w-md">
                    <p className="mb-2"><strong>Conditions Générales de Vente</strong></p>
                    <p>Nos services sont fournis selon les conditions générales en vigueur.</p>
                    <p className="mt-2">Devis gratuit valable 30 jours. Paiement selon les termes convenus dans le contrat de service.</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;