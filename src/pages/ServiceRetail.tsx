import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ShoppingBag, Star, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/footer";

const ServiceRetail = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-professional mb-8">
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 bg-gradient-to-br from-secondary to-secondary/80">
              <ShoppingBag className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Nettoyage Luxe Retail</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Service de prestige pour boutiques et espaces commerciaux haut de gamme
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-secondary" />
                  Standards Luxury
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Respect des plus hauts standards de propreté pour refléter l'excellence 
                  de votre marque et maintenir votre image de prestige.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-secondary" />
                  Discrétion Maximale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Intervention discrète en dehors des heures d'ouverture pour préserver 
                  l'expérience client et l'atmosphère de votre établissement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-secondary" />
                  Attention aux Détails
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Soin particulier apporté aux finitions, aux surfaces sensibles 
                  et aux éléments décoratifs de valeur.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Espaces Spécialisés</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Boutiques de luxe et concept stores</li>
                  <li>• Showrooms et galeries</li>
                  <li>• Hôtels et spa de prestige</li>
                  <li>• Restaurants gastronomiques</li>
                  <li>• Centres commerciaux premium</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Services Spécialisés</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Surfaces de Vente</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Nettoyage des vitrines et présentoirs</li>
                  <li>• Entretien des sols premium</li>
                  <li>• Dépoussiérage des produits exposés</li>
                  <li>• Nettoyage des miroirs et surfaces réfléchissantes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Espaces Clients</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Entretien des cabines d'essayage</li>
                  <li>• Nettoyage des espaces d'accueil</li>
                  <li>• Maintenance des sanitaires clients</li>
                  <li>• Désodorisation et parfumage d'ambiance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 shadow-professional px-8 py-6 text-lg rounded-xl">
              Demander un devis retail de luxe
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceRetail;