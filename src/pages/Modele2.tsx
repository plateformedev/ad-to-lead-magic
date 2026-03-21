import { useState } from "react";
import { Phone, CheckCircle2, Shield, Clock, Award, ThumbsUp } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/ravalement1.jpg";

const serviceOptions = [
  "Ravalement complet",
  "Isolation par l'extérieur (ITE)",
  "Rénovation pierre de taille",
  "Imperméabilisation / Hydrofuge",
  "Peinture de façade",
  "Autre demande",
];

const Modele2 = () => {
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
    setSubmitted(true);
    toast.success("Votre demande de devis a bien été envoyée !");
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-primary py-3 flex-shrink-0">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <span className="text-primary-foreground text-sm font-bold tracking-wide">
            Spécialiste ravalement
          </span>
          <a href="tel:0187666549" className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            <span className="text-sm font-bold">01 87 66 65 49</span>
          </a>
        </div>
      </div>

      {/* Main content - full background image */}
      <div className="flex-1 relative flex">
        {/* Full background image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center gap-6 lg:gap-12 py-6 lg:py-0 h-full">
          {/* Left - Hero content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold text-accent-foreground mb-4 w-fit">
              ⭐ Noté 4.5/5 sur Google
            </div>

            <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-4" style={{ color: "white" }}>
              Ravalement de façade<br />
              <span className="text-accent">à Paris & Île-de-France</span>
            </h1>

            <p className="text-base lg:text-lg mb-5 max-w-md" style={{ color: "rgba(255,255,255,0.85)" }}>
              Spécialistes du bâti ancien. Devis gratuit sous 24h, garantie décennale, tarifs fermes.
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {[
                { icon: Shield, label: "Garantie décennale" },
                { icon: Clock, label: "Devis sous 24h" },
                { icon: Award, label: "Artisans qualifiés" },
                { icon: ThumbsUp, label: "500+ chantiers" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.9)" }}>{item.label}</span>
                </div>
              ))}
            </div>

            <a
              href="tel:0187666549"
              className="inline-flex items-center gap-2 text-accent font-bold text-lg hover:underline w-fit"
            >
              <Phone className="w-5 h-5" />
              01 87 66 65 49
            </a>
          </div>

          {/* Right - Form */}
          <div className="lg:w-1/2 flex items-center justify-center w-full">
            {submitted ? (
              <div className="bg-card/95 backdrop-blur-sm rounded-xl p-8 shadow-[var(--shadow-card)] border border-border text-center max-w-md w-full">
                <CheckCircle2 className="w-14 h-14 text-trust mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-3">Demande envoyée !</h2>
                <p className="text-muted-foreground">
                  Merci {formData.name}, nous vous recontactons sous 24h.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card/95 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-[var(--shadow-card)] border border-border w-full max-w-lg space-y-4"
              >
                <div>
                  <label htmlFor="m2-name" className="block text-sm font-semibold text-foreground mb-1">
                    Nom complet *
                  </label>
                  <input
                    id="m2-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="m2-email" className="block text-sm font-semibold text-foreground mb-1">
                      Email *
                    </label>
                    <input
                      id="m2-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="jean@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="m2-phone" className="block text-sm font-semibold text-foreground mb-1">
                      Téléphone *
                    </label>
                    <input
                      id="m2-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="m2-service" className="block text-sm font-semibold text-foreground mb-1">
                    Type de prestation *
                  </label>
                  <select
                    id="m2-service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Sélectionnez une prestation</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="m2-message" className="block text-sm font-semibold text-foreground mb-1">
                    Décrivez votre projet
                  </label>
                  <textarea
                    id="m2-message"
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Surface, type de bâtiment, travaux souhaités..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-[var(--shadow-cta)] hover:brightness-110 transition-all"
                >
                  Recevoir mon devis gratuit →
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Sans engagement · Réponse sous 24h
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-foreground py-2.5 flex-shrink-0">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-6 text-background/70 text-xs">
          <span>© {new Date().getFullYear()} DSD Rénov</span>
          <a href="mailto:bonjour@dsdrenov.com" className="hover:text-background transition-colors">bonjour@dsdrenov.com</a>
          <span>Paris & Île-de-France</span>
          <span>Garantie décennale</span>
        </div>
      </div>
    </div>
  );
};

export default Modele2;
