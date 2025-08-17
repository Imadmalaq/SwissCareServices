import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Home, Calendar, TrendingUp, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/footer";

const ServiceCopropriete = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-professional mb-8">
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 bg-gradient-to-br from-accent to-accent/80">
              <Home className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Entretien de Copropriétés</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Valorisation et entretien des parties communes pour le confort de tous les résidents
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Valorisation Immobilière
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Un entretien régulier et professionnel des parties communes contribue 
                  à maintenir et augmenter la valeur de votre bien immobilier.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  Planning Adapté
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Organisation d'un planning d'entretien adapté aux besoins de la copropriété 
                  et aux habitudes des résidents.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Zones Spécialisées
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Traitement spécifique selon les zones : halls d'entrée, escaliers, 
                  ascenseurs, caves, locaux techniques.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Espaces Traités</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Halls d'entrée et réception</li>
                  <li>• Cages d'escalier et paliers</li>
                  <li>• Ascenseurs et monte-charges</li>
                  <li>• Caves et sous-sols</li>
                  <li>• Espaces extérieurs et cours</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Prestations de Copropriété</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Entretien Intérieur</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Nettoyage des sols et escaliers</li>
                  <li>• Entretien des ascenseurs</li>
                  <li>• Nettoyage des boîtes aux lettres</li>
                  <li>• Désinfection des poignées et surfaces</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Espaces Extérieurs</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Nettoyage des cours et allées</li>
                  <li>• Entretien des espaces verts</li>
                  <li>• Nettoyage des parkings</li>
                  <li>• Déneigement (saison hivernale)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 shadow-professional px-8 py-6 text-lg rounded-xl">
              Demander un devis pour votre copropriété
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceCopropriete;