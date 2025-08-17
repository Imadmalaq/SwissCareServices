import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Obtenez un devis</span> en 24H
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé. Réponse garantie sous 24 heures.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-professional">
              <CardHeader>
                <CardTitle className="text-2xl">Demande de devis</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom *</Label>
                      <Input id="nom" placeholder="Votre nom" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prenom">Prénom *</Label>
                      <Input id="prenom" placeholder="Votre prénom" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="votre@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telephone">Téléphone</Label>
                      <Input id="telephone" placeholder="+41 XX XXX XX XX" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="entreprise">Entreprise / Organisation</Label>
                    <Input id="entreprise" placeholder="Nom de votre entreprise" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Type de service</Label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option value="">Sélectionnez un service</option>
                      <option value="bureau">Nettoyage de bureaux</option>
                      <option value="retail">Luxe Retail</option>
                      <option value="copropriete">Copropriété</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Détails de votre demande *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Décrivez vos besoins : surface, fréquence souhaitée, horaires préférés..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 shadow-professional text-lg py-6"
                  >
                    <Clock className="mr-2 h-5 w-5" />
                    Envoyer ma demande (Réponse sous 24h)
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="shadow-clean">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Contact direct</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+41 XX XXX XX XX</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>contact@helveticlean.ch</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Suisse Romande</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-clean">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Horaires</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-medium">8h - 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-medium">9h - 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="text-muted-foreground">Fermé</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 shadow-clean">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Devis rapide</h3>
                <p className="text-sm text-muted-foreground">
                  Nous nous engageons à vous répondre dans les <strong>24 heures</strong> suivant votre demande.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;