import { Phone } from "lucide-react";
import heroImage from "@/assets/ravalement1.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/90 px-4 py-1.5 text-sm font-semibold text-accent-foreground mb-6 animate-fade-up">
            ⭐ Noté 4.5/5 sur Google — Plus de 500 chantiers réalisés
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Ravalement de façade<br />
            <span className="text-accent">à Paris & Île-de-France</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Spécialistes du bâti ancien. Devis gratuit sous 24h, garantie décennale, tarifs fermes et sans surprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-[var(--shadow-cta)] hover:brightness-110 transition-all animate-pulse-soft"
            >
              Demander un devis gratuit
            </button>
            <a
              href="tel:0187666549"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-6 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              01 87 66 65 49
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
