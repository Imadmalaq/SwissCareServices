import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="max-w-7xl mx-auto content-padding">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            <span className="text-primary">Obtenez un devis</span> en 24H
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Contactez-nous pour un devis gratuit et personnalisé. Réponse garantie sous 24 heures.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <Card className="shadow-clean border-0 bg-card">
              <CardHeader className="pb-8 pt-10">
                <CardTitle className="text-2xl font-bold">Demande de devis</CardTitle>
              </CardHeader>
              <CardContent className="px-10 pb-10">
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="nom" className="text-sm font-medium">Nom *</Label>
                      <Input 
                        id="nom" 
                        placeholder="Votre nom" 
                        required 
                        className="border-0 bg-muted/30 focus:bg-background transition-gentle h-12"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="prenom" className="text-sm font-medium">Prénom *</Label>
                      <Input 
                        id="prenom" 
                        placeholder="Votre prénom" 
                        required 
                        className="border-0 bg-muted/30 focus:bg-background transition-gentle h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="votre@email.com" 
                        required 
                        className="border-0 bg-muted/30 focus:bg-background transition-gentle h-12"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="telephone" className="text-sm font-medium">Téléphone</Label>
                      <Input 
                        id="telephone" 
                        placeholder="+41 XX XXX XX XX" 
                        className="border-0 bg-muted/30 focus:bg-background transition-gentle h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="entreprise" className="text-sm font-medium">Entreprise / Organisation</Label>
                    <Input 
                      id="entreprise" 
                      placeholder="Nom de votre entreprise" 
                      className="border-0 bg-muted/30 focus:bg-background transition-gentle h-12"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="service" className="text-sm font-medium">Type de service</Label>
                    <select className="flex h-12 w-full rounded-md border-0 bg-muted/30 px-4 py-2 text-sm focus:bg-background transition-gentle">
                      <option value="">Sélectionnez un service</option>
                      <option value="bureau">Nettoyage de bureaux</option>
                      <option value="retail">Luxe Retail</option>
                      <option value="copropriete">Copropriété</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-sm font-medium">Détails de votre demande *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Décrivez vos besoins : surface, fréquence souhaitée, horaires préférés..."
                      className="min-h-[140px] border-0 bg-muted/30 focus:bg-background transition-gentle resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 shadow-subtle hover:shadow-clean transition-gentle text-lg py-7 font-medium"
                  >
                    <Clock className="mr-3 h-5 w-5" />
                    Envoyer ma demande (Réponse sous 24h)
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <Card className="shadow-subtle border-0 bg-card">
              <CardContent className="p-8">
                <h3 className="font-bold text-lg mb-6">Contact direct</h3>
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">+41 XX XXX XX XX</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">contact@helveticlean.ch</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">Suisse Romande</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-subtle border-0 bg-card">
              <CardContent className="p-8">
                <h3 className="font-bold text-lg mb-6">Horaires</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Lundi - Vendredi</span>
                    <span className="font-medium">8h - 18h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Samedi</span>
                    <span className="font-medium">9h - 12h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Dimanche</span>
                    <span className="text-muted-foreground">Fermé</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/30 border-0 shadow-subtle">
              <CardContent className="p-8 text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-3">Devis rapide</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nous nous engageons à vous répondre dans les <strong className="text-foreground">24 heures</strong> suivant votre demande.
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