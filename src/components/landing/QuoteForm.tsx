import { useState } from "react";
import { Phone, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const serviceOptions = [
  "Ravalement complet",
  "Isolation par l'extérieur (ITE)",
  "Rénovation pierre de taille",
  "Imperméabilisation / Hydrofuge",
  "Peinture de façade",
  "Autre demande",
];

const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to your backend/email service
    setSubmitted(true);
    toast.success("Votre demande de devis a bien été envoyée !");
  };

  if (submitted) {
    return (
      <section id="devis" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <CheckCircle2 className="w-16 h-16 text-trust mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Demande envoyée !
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Merci {formData.name}, nous vous recontactons sous 24h avec votre estimation gratuite.
          </p>
          <a
            href="tel:0187666549"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <Phone className="w-5 h-5" />
            Besoin urgent ? Appelez-nous au 01 87 66 65 49
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="devis" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8 items-start">
          {/* Left side - Reassurance */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Votre devis gratuit<br />
              <span className="text-primary">sous 24 heures</span>
            </h2>
            <p className="text-muted-foreground">
              Remplissez le formulaire et recevez une estimation gratuite et sans engagement pour votre projet de ravalement.
            </p>

            <div className="space-y-3">
              {[
                "Estimation gratuite et personnalisée",
                "Tarifs fermes et définitifs",
                "Aucun engagement de votre part",
                "Réponse garantie sous 24h",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-secondary rounded-lg p-4 border border-border">
              <p className="text-sm text-muted-foreground mb-1">Besoin d'une réponse immédiate ?</p>
              <a
                href="tel:0187666549"
                className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline"
              >
                <Phone className="w-5 h-5" />
                01 87 66 65 49
              </a>
            </div>
          </div>

          {/* Right side - Form */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 bg-card rounded-xl p-6 md:p-8 shadow-[var(--shadow-card)] border border-border space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-1.5">
                Nom complet *
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Jean Dupont"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1.5">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="jean@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-1.5">
                  Téléphone *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="06 12 34 56 78"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-1.5">
                Type de prestation *
              </label>
              <select
                id="service"
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Sélectionnez une prestation</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1.5">
                Décrivez votre projet
              </label>
              <textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Surface, type de bâtiment, travaux souhaités..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-4 text-lg font-bold text-primary-foreground shadow-[var(--shadow-cta)] hover:brightness-110 transition-all"
            >
              Recevoir mon devis gratuit →
            </button>

            <p className="text-xs text-muted-foreground text-center">
              En soumettant ce formulaire, vous acceptez d'être recontacté par DSD Rénov. Aucun engagement.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
