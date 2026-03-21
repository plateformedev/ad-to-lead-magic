import { useState, useMemo } from "react";
import { CheckCircle2, Shield, Users, Award, Hammer, Calendar, Clock } from "lucide-react";
import { toast } from "sonner";
import heroImg1 from "@/assets/ravalement1-2.jpg";
import heroImg2 from "@/assets/ravalement2-2.jpg";
import heroImg3 from "@/assets/ravalement3-2.jpg";
import heroImg4 from "@/assets/ravalement4-2.jpg";
import heroImg5 from "@/assets/ravalement5-2.jpg";
import logoDsd from "@/assets/logo-dsd.png";
import certirenovLogo from "@/assets/certirenov-rge.png";

const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
];

const RavalementLp2 = () => {
  const heroImage = useMemo(() => heroImages[Math.floor(Math.random() * heroImages.length)], []);
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    rdvType: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    if (!formData.rdvType || !formData.date || !formData.time) {
      toast.error("Veuillez compléter tous les champs du rendez-vous.");
      return;
    }
    setSubmitted(true);
    toast.success("Votre rendez-vous a bien été demandé !");
  };

  // Generate next 14 available days (excluding Sundays)
  const availableDates = useMemo(() => {
    const dates: string[] = [];
    const today = new Date();
    let d = new Date(today);
    d.setDate(d.getDate() + 1);
    while (dates.length < 14) {
      if (d.getDay() !== 0) {
        dates.push(d.toISOString().split("T")[0]);
      }
      d.setDate(d.getDate() + 1);
    }
    return dates;
  }, []);

  const formatDateLabel = (dateStr: string) => {
    const d = new Date(dateStr + "T12:00:00");
    const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
    const months = ["jan", "fév", "mar", "avr", "mai", "juin", "juil", "août", "sep", "oct", "nov", "déc"];
    return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
  };

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 py-3">
        <div className="container mx-auto px-4 flex items-center justify-center lg:justify-start">
          <img src={logoDsd} alt="DSD Rénov" className="h-10 mt-[10px]" />
        </div>
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex">
        <div className="absolute inset-0 hidden lg:block">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
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

            <div className="hidden lg:grid grid-cols-2 gap-x-8 gap-y-3 mb-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {[
                { icon: Shield, label: "Garantie décennale" },
                { icon: Users, label: "Professionnels certifiés" },
                { icon: Award, label: "+10 ans expérience" },
                { icon: Hammer, label: "+100 chantiers" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon className="w-7 h-7 text-accent flex-shrink-0" />
                  <span className="text-lg font-semibold text-white/90">{item.label}</span>
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
                <h2 className="text-3xl font-bold text-foreground mb-3">Rendez-vous demandé !</h2>
                <p className="text-muted-foreground">
                  Merci {formData.name}, nous confirmerons votre rendez-vous sous 24h.
                </p>
                <div className="mt-4 p-3 bg-secondary rounded-lg text-sm text-foreground">
                  <p className="font-semibold">{formData.rdvType === "phone" ? "Par téléphone" : formData.rdvType === "visio" ? "Par visio" : "Sur place"}</p>
                  <p>{formatDateLabel(formData.date)} à {formData.time}</p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card/95 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-[var(--shadow-card)] border border-border w-full space-y-4"
              >
                {step === 1 ? (
                  <>
                    <div>
                      <label htmlFor="lp2-message" className="block text-base font-semibold text-foreground mb-1">
                        Décrivez votre projet *
                      </label>
                      <textarea
                        id="lp2-message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        placeholder="Surface, type de bâtiment, travaux souhaités..."
                      />
                    </div>

                    <div>
                      <label className="block text-base font-semibold text-foreground mb-2">
                        Comment souhaitez-vous être contacté ? *
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { value: "phone", label: "Par téléphone", icon: "📞" },
                          { value: "visio", label: "Par visio", icon: "💻" },
                          { value: "onsite", label: "Sur place", icon: "🏠" },
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, rdvType: option.value })}
                            className={`flex flex-col items-center gap-1.5 rounded-lg border px-3 py-3 text-sm font-medium transition-all ${
                              formData.rdvType === option.value
                                ? "bg-primary border-primary text-primary-foreground"
                                : "border-input bg-background text-foreground hover:border-ring"
                            }`}
                          >
                            <span className="text-xl">{option.icon}</span>
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-lg bg-primary px-6 py-3.5 text-lg font-bold text-primary-foreground shadow-[var(--shadow-cta)] hover:brightness-110 transition-all"
                    >
                      Continuer →
                    </button>

                    <p className="text-sm text-muted-foreground text-center">
                      Sans engagement · Conseils d'experts
                    </p>
                  </>
                ) : (
                  <>
                    {/* Step 2: Contact info + date/time */}
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-1"
                    >
                      ← Retour
                    </button>

                    <div>
                      <label htmlFor="lp2-name" className="block text-base font-semibold text-foreground mb-1">
                        Nom complet *
                      </label>
                      <input
                        id="lp2-name"
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
                        <label htmlFor="lp2-email" className="block text-base font-semibold text-foreground mb-1">
                          E-mail *
                        </label>
                        <input
                          id="lp2-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="jean@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="lp2-phone" className="block text-base font-semibold text-foreground mb-1">
                          Téléphone *
                        </label>
                        <input
                          id="lp2-phone"
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
                      <label className="block text-base font-semibold text-foreground mb-2">
                        <Calendar className="w-4 h-4 inline mr-1.5 -mt-0.5" />
                        Date souhaitée *
                      </label>
                      <div className="grid grid-cols-4 gap-1.5 max-h-[120px] overflow-y-auto">
                        {availableDates.map((date) => (
                          <button
                            key={date}
                            type="button"
                            onClick={() => setFormData({ ...formData, date })}
                            className={`rounded-lg border px-2 py-1.5 text-xs font-medium transition-all ${
                              formData.date === date
                                ? "bg-primary border-primary text-primary-foreground"
                                : "border-input bg-background text-foreground hover:border-ring"
                            }`}
                          >
                            {formatDateLabel(date)}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-base font-semibold text-foreground mb-2">
                        <Clock className="w-4 h-4 inline mr-1.5 -mt-0.5" />
                        Heure souhaitée *
                      </label>
                      <div className="grid grid-cols-5 gap-1.5 max-h-[80px] overflow-y-auto">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setFormData({ ...formData, time })}
                            className={`rounded-lg border px-2 py-1.5 text-xs font-medium transition-all ${
                              formData.time === time
                                ? "bg-primary border-primary text-primary-foreground"
                                : "border-input bg-background text-foreground hover:border-ring"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-lg bg-primary px-6 py-3.5 text-lg font-bold text-primary-foreground shadow-[var(--shadow-cta)] hover:brightness-110 transition-all"
                    >
                      Confirmer mon rendez-vous →
                    </button>

                    <p className="text-sm text-muted-foreground text-center">
                      Sans engagement · Conseils d'experts
                    </p>
                  </>
                )}
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

export default RavalementLp2;
