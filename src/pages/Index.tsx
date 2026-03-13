import { useState } from "react";
import { t, type Lang } from "@/lib/translations";
import LanguageToggle from "@/components/LanguageToggle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroBg from "@/assets/hero_bg.jpg";
import dron1 from "@/assets/dron_1.jpeg";
import schoolLogo from "@/assets/skolni_logo.png";
import result1Rgb from "@/assets/result1_rgb.jpg";
import result1Ndvi from "@/assets/result1_ndvi.jpg";
import result2Rgb from "@/assets/result2_rgb.png";
import result2Ndvi from "@/assets/result2_ndvi.png";
import result5Rgb from "@/assets/result5_rgb.jpg";
import result5Ndvi from "@/assets/result5_ndvi.jpg";
import {
  Leaf, Camera, Code, CloudSun, Shield, Maximize, Wallet, Settings,
  ExternalLink, Mail, Menu, X, Activity, Clock
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const resultImages = [
  { rgb: result1Rgb, ndvi: result1Ndvi },
  { rgb: result2Rgb, ndvi: result2Ndvi },
  { rgb: result5Rgb, ndvi: result5Ndvi },
];

// Scroll-animated wrapper
const ScrollReveal = ({
  children,
  animation = "scroll-fade-up",
  delay = "",
  className = "",
}: {
  children: React.ReactNode;
  animation?: string;
  delay?: string;
  className?: string;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`${isVisible ? `${animation} ${delay}` : "scroll-hidden"} ${className}`}
    >
      {children}
    </div>
  );
};

const Index = () => {
  const [lang, setLang] = useState<Lang>("en");
  const [mobileOpen, setMobileOpen] = useState(false);

  const techIcons = [
    <Leaf className="h-7 w-7 md:h-8 md:w-8" />,
    <Camera className="h-7 w-7 md:h-8 md:w-8" />,
    <Code className="h-7 w-7 md:h-8 md:w-8" />,
    <CloudSun className="h-7 w-7 md:h-8 md:w-8" />,
  ];

  const advIcons = [
    <Shield className="h-5 w-5 md:h-6 md:w-6" />,
    <Maximize className="h-5 w-5 md:h-6 md:w-6" />,
    <Wallet className="h-5 w-5 md:h-6 md:w-6" />,
    <Settings className="h-5 w-5 md:h-6 md:w-6" />,
    <Activity className="h-5 w-5 md:h-6 md:w-6" />,
    <Clock className="h-5 w-5 md:h-6 md:w-6" />,
  ];

  const techItems = [t.tech.drone, t.tech.cameras, t.tech.software, t.tech.weather];

  const navLinks = Object.entries(t.nav).map(([key, val]) => (
    <a
      key={key}
      href={`#${key}`}
      onClick={() => setMobileOpen(false)}
      className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
    >
      {val[lang]}
    </a>
  ));

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="font-display text-lg font-bold text-primary md:text-xl hover:text-secondary transition-colors">AirVision</a>
          </div>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks}
          </div>

          <div className="flex items-center gap-3">
            <a href="https://1sjg.cz/" target="_blank" rel="noopener noreferrer">
              <img src={schoolLogo} alt="1.SJG" className="h-7 w-auto object-contain" />
            </a>
            <LanguageToggle lang={lang} onToggle={setLang} />

            {/* Mobile hamburger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger className="md:hidden p-1">
                <Menu className="h-6 w-6 text-primary" />
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-background">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="mt-8 flex flex-col gap-6">
                  {navLinks}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="NDVI aerial view" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center md:px-6">
          <h1 className="animate-fade-up font-display text-4xl font-800 tracking-tight text-primary-foreground sm:text-5xl md:text-7xl lg:text-8xl">
            AirVision
          </h1>
          <p className="animate-fade-up animation-delay-200 mt-3 font-display text-lg text-accent sm:text-xl md:mt-4 md:text-2xl">
            {t.hero.subtitle[lang]}
          </p>
          <p className="animate-fade-up animation-delay-400 mx-auto mt-4 max-w-2xl text-base text-primary-foreground/80 sm:text-lg md:mt-6">
            {t.hero.description[lang]}
          </p>
          <a
            href="#about"
            className="animate-fade-up animation-delay-600 mt-8 inline-block rounded-full bg-accent px-6 py-2.5 font-semibold text-accent-foreground shadow-lg transition-all hover:bg-warm hover:shadow-xl sm:px-8 sm:py-3 md:mt-10"
          >
            {t.hero.cta[lang]}
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <h2 className="text-center font-display text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
              {t.about.title[lang]}
            </h2>
            <div className="section-divider mt-4" />
          </ScrollReveal>
          <div className="mt-10 grid gap-8 md:mt-16 lg:grid-cols-2 lg:items-center lg:gap-12">
            <ScrollReveal animation="scroll-slide-left">
              <div className="space-y-5 md:space-y-6">
                <p className="text-base leading-relaxed text-foreground/80 md:text-lg">{t.about.p1[lang]}</p>
                <p className="text-base leading-relaxed text-foreground/80 md:text-lg">{t.about.p2[lang]}</p>
                <p className="text-base leading-relaxed text-foreground/80 md:text-lg">{t.about.p3[lang]}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="scroll-slide-right">
              <div className="relative">
                <img
                  src={dron1}
                  alt="NDVI drone monitoring"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-2 rounded-xl bg-primary p-3 shadow-lg sm:-bottom-6 sm:-left-6 sm:p-4">
                  <p className="font-display text-xs font-semibold text-primary-foreground sm:text-sm">NDVI</p>
                  <p className="font-mono text-lg font-bold text-accent sm:text-2xl">
                    (NIR − RED) / (NIR + RED)
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* NDVI Explanation */}
      <section className="bg-primary py-14 md:py-20">
        <div className="container mx-auto px-4 text-center md:px-6">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-primary-foreground sm:text-3xl md:text-4xl">
              {t.ndvi.title[lang]}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay="scroll-delay-100">
            <p className="mx-auto mt-4 max-w-3xl text-base text-primary-foreground/80 sm:text-lg md:mt-6">
              {t.ndvi.description[lang]}
            </p>
          </ScrollReveal>
          <ScrollReveal animation="scroll-scale-up" delay="scroll-delay-200">
            <div className="mx-auto mt-6 max-w-sm rounded-2xl bg-secondary/30 p-4 backdrop-blur sm:max-w-md sm:p-6 md:mt-8">
              <p className="font-mono text-lg font-bold text-accent sm:text-2xl md:text-3xl">
                NDVI = (NIR − RED) / (NIR + RED)
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay="scroll-delay-300">
            <div className="mx-auto mt-6 flex max-w-xs items-center justify-center gap-2 sm:max-w-lg md:mt-8">
              {[
                { label: "-1", color: "bg-red-600" },
                { label: "0", color: "bg-amber-300" },
                { label: "+1", color: "bg-green-600" },
              ].map((item) => (
                <div key={item.label} className="flex-1">
                  <div className={`h-3 rounded-full ${item.color}`} />
                  <p className="mt-1 text-xs text-primary-foreground/60">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-primary-foreground/50">
              {lang === "cs" ? "← Nezdravé / Zdravé →" : "← Unhealthy / Healthy →"}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <h2 className="text-center font-display text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
              {t.tech.title[lang]}
            </h2>
            <div className="section-divider mt-4" />
          </ScrollReveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:mt-16 md:gap-8">
            {techItems.map((item, i) => (
              <ScrollReveal key={i} animation="scroll-scale-up" delay={`scroll-delay-${(i + 1) * 100}` as any}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 md:p-8">
                  <div className="mb-4 inline-flex rounded-xl bg-secondary/20 p-3 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                    {techIcons[i]}
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary md:text-xl">
                    {item.title[lang]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70 md:mt-3 md:text-base">{item.desc[lang]}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-card py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <ScrollReveal animation="scroll-slide-left">
              <img src={dron2} alt="NDVI analysis" className="w-full rounded-2xl shadow-xl" />
            </ScrollReveal>
            <div>
              <ScrollReveal>
                <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
                  {t.advantages.title[lang]}
                </h2>
              </ScrollReveal>
              <div className="mt-6 space-y-5 md:mt-8 md:space-y-6">
                {t.advantages.items.map((item, i) => (
                  <ScrollReveal key={i} animation="scroll-slide-right" delay={`scroll-delay-${(i + 1) * 100}` as any}>
                    <div className="flex gap-3 md:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-warm md:h-12 md:w-12">
                        {advIcons[i]}
                      </div>
                      <div>
                        <h4 className="font-display text-base font-bold text-primary md:text-lg">
                          {item.title[lang]}
                        </h4>
                        <p className="mt-1 text-sm text-foreground/70 md:text-base">{item.desc[lang]}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <h2 className="text-center font-display text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
              {t.results.title[lang]}
            </h2>
            <div className="section-divider mt-4" />
          </ScrollReveal>
          <ScrollReveal delay="scroll-delay-100">
            <p className="mx-auto mt-6 max-w-3xl text-center text-base text-foreground/70 sm:text-lg md:mt-8">
              {t.results.summary[lang]}
            </p>
          </ScrollReveal>
          <div className="mt-8 flex flex-wrap justify-center gap-6 md:mt-12">
            {t.results.items.map((item, i) => (
              <ScrollReveal key={i} animation="scroll-fade-up" delay={`scroll-delay-${(i + 1) * 100}` as any} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                <ResultCard
                  index={i + 1}
                  title={item.title}
                  desc={item.desc}
                  rgbImage={resultImages[i].rgb}
                  ndviImage={resultImages[i].ndvi}
                  lang={lang}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-primary py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <h2 className="text-center font-display text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl">
              {t.team.title[lang]}
            </h2>
          </ScrollReveal>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:mt-12 md:gap-8">
            {t.team.members.map((member, i) => (
              <ScrollReveal key={i} animation="scroll-scale-up" delay={`scroll-delay-${(i + 1) * 100}` as any}>
                <div className="w-36 rounded-2xl bg-secondary/20 p-4 text-center backdrop-blur sm:w-44 sm:p-6 md:w-48 md:p-8">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/30 font-display text-lg font-bold text-accent sm:h-14 sm:w-14 sm:text-xl md:mb-4 md:h-16 md:w-16 md:text-2xl">
                    {member.initials}
                  </div>
                  <h3 className="font-display text-sm font-bold text-primary-foreground sm:text-base md:text-lg">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs text-primary-foreground/70 sm:text-sm md:mt-2">{member.role[lang]}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section id="collaboration" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <h2 className="text-center font-display text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
              {t.collaboration.title[lang]}
            </h2>
            <div className="section-divider mt-4" />
          </ScrollReveal>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 md:mt-12">
            {t.collaboration.items.map((item, i) => (
              <ScrollReveal key={i} animation="scroll-slide-right" delay={`scroll-delay-${(i + 1) * 100}` as any}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 sm:gap-4 sm:p-5"
                >
                  <ExternalLink className="h-5 w-5 shrink-0 text-secondary" />
                  <p className="text-sm font-medium text-foreground sm:text-base">{item[lang]}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-card py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <h2 className="text-center font-display text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
              {t.contact.title[lang]}
            </h2>
            <div className="section-divider mt-4" />
          </ScrollReveal>
          <ScrollReveal animation="scroll-scale-up" delay="scroll-delay-200">
            <div className="mx-auto mt-8 max-w-md rounded-2xl border border-border bg-background p-6 text-center shadow-sm sm:p-8 md:mt-12">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 md:h-16 md:w-16">
                <Mail className="h-6 w-6 text-warm md:h-7 md:w-7" />
              </div>
              <p className="text-sm font-medium text-foreground/60">{t.contact.supervisorLabel[lang]}</p>
              <h3 className="mt-1 font-display text-lg font-bold text-primary md:text-xl">{t.contact.supervisorName}</h3>
              <a
                href={`mailto:${t.contact.email}`}
                className="mt-3 inline-flex items-center gap-2 text-base font-medium text-secondary transition-colors hover:text-warm sm:text-lg"
              >
                <Mail className="h-4 w-4" />
                {t.contact.email}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-primary py-6 md:py-8">
        <div className="container mx-auto flex flex-col items-center gap-3 px-4 sm:gap-4 md:flex-row md:justify-between md:px-6">
          <div className="flex items-center gap-3">
            <img src={schoolLogo} alt="1.SJG" className="h-8 w-auto object-contain" />
            <span className="text-xs text-primary-foreground/70 sm:text-sm">{t.footer.school}</span>
          </div>
          <p className="text-xs text-primary-foreground/50 sm:text-sm">
            © 2026 AirVision · {t.footer.rights[lang]}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
