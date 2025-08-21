import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Store, Clock, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/footer";

const ServiceCommercial = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-professional mb-8">
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 bg-gradient-to-br from-secondary to-secondary/80">
              <Store className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Nettoyage de Locaux Commerciaux</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Service professionnel pour magasins, restaurants et espaces commerciaux qui reflète votre image de marque
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Image Professionnelle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Un espace impeccable qui impressionne vos clients et renforce votre réputation professionnelle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Service Adapté
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Intervention en dehors des heures d'ouverture pour ne pas perturber votre activité commerciale.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Méthodes Durables
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Produits écologiques et techniques respectueuses de l'environnement pour un nettoyage responsable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Espaces Concernés</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Magasins et boutiques</li>
                  <li>• Restaurants et cafés</li>
                  <li>• Espaces de vente</li>
                  <li>• Showrooms</li>
                  <li>• Centres commerciaux</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Services Spécialisés</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Entretien Quotidien</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Nettoyage des surfaces de vente</li>
                  <li>• Entretien des vitrines</li>
                  <li>• Sols et espaces clients</li>
                  <li>• Sanitaires visiteurs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Nettoyage Approfondi</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Dégraissage cuisine (restaurants)</li>
                  <li>• Nettoyage des équipements</li>
                  <li>• Remise en état après événements</li>
                  <li>• Entretien des espaces techniques</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 shadow-professional px-8 py-6 text-lg rounded-xl"
            >
              Demander un devis pour votre commerce
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceCommercial;