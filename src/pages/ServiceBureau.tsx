import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Building2, Clock, Shield, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/footer";

const ServiceBureau = () => {
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 bg-gradient-to-br from-primary to-primary/80">
              <Building2 className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Nettoyage de Bureaux</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Entretien professionnel de vos espaces de travail pour garantir un environnement sain et productif
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Horaires Flexibles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Intervention avant ou après les heures de bureau pour ne pas perturber votre activité. 
                  Services disponibles 7j/7 selon vos besoins.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Équipe Qualifiée
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Personnel formé et assuré, respectant les protocoles de sécurité et de discrétion 
                  requis en environnement professionnel.
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
                  Utilisation de produits respectueux de l'environnement et de la santé de vos collaborateurs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Espaces Couverts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Bureaux individuels et open-space</li>
                  <li>• Salles de réunion et conférence</li>
                  <li>• Espaces d'accueil et réception</li>
                  <li>• Cuisines et espaces détente</li>
                  <li>• Sanitaires et vestiaires</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Prestations Incluses</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Nettoyage Quotidien</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Aspiration et lavage des sols</li>
                  <li>• Dépoussiérage des surfaces</li>
                  <li>• Vidage des corbeilles</li>
                  <li>• Nettoyage des sanitaires</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Entretien Périodique</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Nettoyage des vitres</li>
                  <li>• Entretien des moquettes</li>
                  <li>• Désinfection approfondie</li>
                  <li>• Nettoyage des espaces techniques</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-professional px-8 py-6 text-lg rounded-xl">
              Demander un devis pour vos bureaux
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceBureau;