import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie D.",
    role: "Syndic de copropriété, Paris 15e",
    text: "DSD Rénov a réalisé le ravalement complet de notre immeuble. Travail soigné, délais respectés et budget maîtrisé. Je recommande vivement.",
    rating: 5,
  },
  {
    name: "Philippe L.",
    role: "Propriétaire, Neuilly-sur-Seine",
    text: "Excellente prestation pour la rénovation de notre façade en pierre. Équipe professionnelle et résultat impeccable.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    role: "Gestionnaire, Paris 8e",
    text: "Devis reçu en 24h, chantier propre et bien organisé. Le résultat est magnifique. Merci à toute l'équipe !",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ils nous font confiance
        </h2>
        <p className="text-muted-foreground text-lg">
          Plus de 500 chantiers réalisés en Île-de-France
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-card rounded-lg p-6 shadow-[var(--shadow-card)] border border-border"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground mb-4 italic">"{t.text}"</p>
            <div>
              <p className="font-bold text-foreground text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
