import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Home, Heart, Shield, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/footer";

const ServiceAppartement = () => {
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 bg-gradient-to-br from-accent to-accent/80">
              <Home className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Nettoyage d'Appartements</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Service personnalisé pour un cadre de vie propre et accueillant, adapté à votre rythme de vie
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Service Personnalisé
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Adapté à vos besoins spécifiques et à votre emploi du temps pour un service sur mesure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Sécurité Garantie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Personnel de confiance, assuré et respectueux de votre intimité et de vos biens.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  Produits Écologiques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Produits respectueux de la santé de votre famille et de vos animaux de compagnie.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Formules Disponibles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Nettoyage régulier (hebdomadaire/bi-mensuel)</li>
                  <li>• Service ponctuel</li>
                  <li>• Nettoyage avant/après événement</li>
                  <li>• Grand ménage saisonnier</li>
                  <li>• Nettoyage de fin de bail</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Prestations Incluses</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Pièces à Vivre</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Aspiration et lavage des sols</li>
                  <li>• Dépoussiérage mobilier</li>
                  <li>• Nettoyage des surfaces</li>
                  <li>• Entretien des vitres intérieures</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Cuisine & Salle de Bains</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Désinfection des sanitaires</li>
                  <li>• Nettoyage des électroménagers</li>
                  <li>• Entretien des robinetteries</li>
                  <li>• Nettoyage approfondi cuisine</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 shadow-professional px-8 py-6 text-lg rounded-xl"
            >
              Demander un devis pour votre appartement
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceAppartement;