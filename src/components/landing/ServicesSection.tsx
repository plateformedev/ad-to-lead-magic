import { Building2, Paintbrush, Layers, Wrench } from "lucide-react";
import ravalement2 from "@/assets/ravalement2.jpg";
import ravalement3 from "@/assets/ravalement3.jpg";
import ravalement4 from "@/assets/ravalement4.jpg";
import ravalement5 from "@/assets/ravalement5.jpg";

const services = [
  {
    icon: Paintbrush,
    title: "Ravalement complet",
    desc: "Nettoyage, réparation et remise en peinture de votre façade. Tous types d'enduits et de finitions.",
  },
  {
    icon: Layers,
    title: "Isolation par l'extérieur",
    desc: "ITE performante pour réduire vos factures énergétiques tout en embellissant votre façade.",
  },
  {
    icon: Building2,
    title: "Rénovation pierre",
    desc: "Restauration des pierres de taille, joints, corniches et éléments décoratifs du bâti ancien.",
  },
  {
    icon: Wrench,
    title: "Imperméabilisation",
    desc: "Traitement hydrofuge et anti-mousse pour protéger durablement votre façade.",
  },
];

const gallery = [
  { src: ravalement5, alt: "Ravalement façade brique et enduit en Île-de-France" },
  { src: ravalement3, alt: "Ravalement maison bourgeoise avec toiture ardoise" },
  { src: ravalement2, alt: "Ravalement villa meulière avec toiture tuile" },
  { src: ravalement4, alt: "Rénovation façade brique et boiseries" },
];

const ServicesSection = () => (
  <section className="py-20 bg-background" id="services">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Nos prestations de ravalement
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Des solutions complètes pour sublimer et protéger votre façade, adaptées au bâti parisien.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-card rounded-lg p-6 shadow-[var(--shadow-card)] hover:shadow-lg transition-shadow border border-border"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Gallery */}
      <div>
        <h3 className="text-2xl font-bold text-foreground text-center mb-8">
          Nos réalisations récentes
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-[var(--shadow-card)] group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
