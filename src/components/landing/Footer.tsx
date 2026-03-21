import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-background/80 text-sm">
        <div className="font-display text-xl font-bold text-background">
          DSD Rénov
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="tel:0187666549" className="flex items-center gap-1.5 hover:text-background transition-colors">
            <Phone className="w-4 h-4" /> 01 87 66 65 49
          </a>
          <a href="mailto:bonjour@dsdrenov.com" className="flex items-center gap-1.5 hover:text-background transition-colors">
            <Mail className="w-4 h-4" /> bonjour@dsdrenov.com
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" /> Paris & Île-de-France
          </span>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-background/10 text-center text-background/50 text-xs">
        © {new Date().getFullYear()} DSD Rénov — Tous droits réservés — Garantie décennale
      </div>
    </div>
  </footer>
);

export default Footer;
