import { Shield, Clock, Award, ThumbsUp } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Garantie décennale" },
  { icon: Clock, label: "Devis sous 24h" },
  { icon: Award, label: "Artisans qualifiés" },
  { icon: ThumbsUp, label: "500+ chantiers" },
];

const TrustBar = () => (
  <section className="bg-primary py-4">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-6 md:gap-12">
        {trustItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-primary-foreground">
            <item.icon className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
