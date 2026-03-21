import { useState, useMemo } from "react";
import { Phone, CheckCircle2, Shield, Users, Award, Hammer, Star } from "lucide-react";
import { toast } from "sonner";
import heroImg1 from "@/assets/ravalement1-2.jpg";
import heroImg2 from "@/assets/ravalement2-2.jpg";
import heroImg3 from "@/assets/ravalement3-2.jpg";
import heroImg4 from "@/assets/ravalement4-2.jpg";
import heroImg5 from "@/assets/ravalement5-2.jpg";
import logoDsd from "@/assets/logo-dsd.png";
import certirenovLogo from "@/assets/certirenov-rge.png";

const serviceOptions = [
  "Ravalement complet",
  "Isolation par l'extérieur (ITE)",
  "Rénovation pierre de taille",
  "Imperméabilisation / Hydrofuge",
  "Peinture de façade",
  "Autre demande",
];

const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];

const Modele2 = () => {
  const heroImage = useMemo(() => heroImages[Math.floor(Math.random() * heroImages.length)], []);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    delai: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Votre demande de devis a bien été envoyée !");
  };

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 py-3">
        <div className="container mx-auto px-4 flex items-center justify-center lg:justify-start">
          <img src={logoDsd} alt="DSD Rénov" className="h-10 mt-[10px]" />
          {/* Téléphone masqué temporairement */}
        </div>
      </div>

      {/* Main content - full background image */}
      <div className="absolute inset-0 flex">
        {/* Full background image */}
        <div className="absolute inset-0 hidden lg:block">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
        </div>
        <div className="absolute inset-0 lg:hidden bg-black" />

        <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center gap-6 lg:gap-12 py-6 lg:py-0 h-full pt-20 lg:pt-6">
          

          {/* Left - Hero content */}
          <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">

            <div className="hidden lg:inline-flex items-center gap-2 rounded-full bg-accent/90 px-4 py-1.5 text-sm font-semibold text-accent-foreground mb-4 w-fit animate-fade-up">
              ⭐ Noté 4,8/5 sur Google
            </div>


            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-4 animate-fade-up text-white" style={{ animationDelay: "0.1s" }}>
              Ravalement de façade<br />
              <span className="text-accent">à Paris & Île-de-France</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-up text-white/85" style={{ animationDelay: "0.2s" }}>
              Spécialistes du bâti ancien et patrimonial.<br />
              Experts du ravalement de façade<br />
              pour maisons, immeubles et copropriétés.
            </p>

            {/* Desktop only: trust elements */}
            <div className="hidden lg:grid grid-cols-2 gap-x-8 gap-y-3 mb-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {[
                { icon: Shield, label: "Garantie décennale" },
                { icon: Users, label: "Professionnels certifiés" },
                { icon: Award, label: "+10 ans expérience" },
                { icon: Hammer, label: "+100 chantiers" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon className="w-7 h-7 text-accent flex-shrink-0" />
                  <span className="text-lg font-semibold text-foreground lg:text-white/90">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center mt-2 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <img src={certirenovLogo} alt="CertiRénov RGE" className="h-20 w-auto object-contain" />
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:w-1/2 flex flex-col items-center justify-center w-full">
            <div className="lg:hidden flex flex-col items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/90 px-4 py-1.5 text-sm font-semibold text-accent-foreground">
                ⭐ Noté 4,8/5 sur Google
              </div>
              <img src={certirenovLogo} alt="CertiRénov RGE" className="h-14 w-auto object-contain" />
            </div>
            {submitted ? (
              <div className="bg-card/95 backdrop-blur-sm rounded-xl p-8 shadow-[var(--shadow-card)] border border-border text-center max-w-md w-full">
                <CheckCircle2 className="w-14 h-14 text-trust mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-foreground mb-3">Demande envoyée !</h2>
                <p className="text-muted-foreground">
                  Merci {formData.name}, nous vous recontactons sous 24h.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card/95 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-[var(--shadow-card)] border border-border w-full space-y-4"
              >
                <div>
                  <label htmlFor="m2-name" className="block text-base font-semibold text-foreground mb-1">
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
                    <label htmlFor="m2-email" className="block text-base font-semibold text-foreground mb-1">
                      E-mail *
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
                    <label htmlFor="m2-phone" className="block text-base font-semibold text-foreground mb-1">
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
                  <label className="block text-base font-semibold text-foreground mb-1.5">Délai souhaité</label>
                  <div className="flex gap-2">
                    {["Urgent", "1 - 6 mois", "> 6 mois"].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setFormData({ ...formData, delai: option })}
                        className={`flex-1 rounded-lg border px-3 py-2 text-base font-medium transition-all ${
                          formData.delai === option
                            ? "bg-primary border-primary text-primary-foreground"
                            : "border-input bg-background text-foreground hover:border-ring"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="m2-message" className="block text-base font-semibold text-foreground mb-1">
                    Décrivez votre projet
                  </label>
                  <textarea
                    id="m2-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Surface, type de bâtiment, travaux souhaités..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3.5 text-lg font-bold text-primary-foreground shadow-[var(--shadow-cta)] hover:brightness-110 transition-all"
                >
                  Recevoir mon devis gratuit →
                </button>

                <p className="text-sm text-muted-foreground text-center">
                  Sans engagement · Réponse sous 24h
                </p>
              </form>
            )}

            {/* Mobile: Trust elements under form */}
            <div className="lg:hidden w-full flex flex-col items-center gap-3 mt-4">
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {[
                  { icon: Shield, label: "Garantie décennale" },
                  { icon: Users, label: "Professionnels certifiés" },
                  { icon: Award, label: "+10 ans expérience" },
                  { icon: Hammer, label: "+100 chantiers" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-semibold text-white/90">{item.label}</span>
                  </div>
                ))}
              </div>
              <img src={certirenovLogo} alt="CertiRénov RGE" className="h-14 w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 py-2.5">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-6 text-sm text-white/85">
          <span>© {new Date().getFullYear()} DSD Rénov</span>
          <a href="mailto:bonjour@dsdrenov.com" className="hover:text-white transition-colors">bonjour@dsdrenov.com</a>
          <a href="https://www.dsdrenov.com/politique-de-confidentialite/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Politique de confidentialité</a>
          <a href="https://www.dsdrenov.com/mentions-legales/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Mentions légales</a>
        </div>
      </div>
    </div>
  );
};

export default Modele2;
