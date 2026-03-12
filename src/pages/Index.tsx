import { useState } from "react";
import { t, type Lang } from "@/lib/translations";
import LanguageToggle from "@/components/LanguageToggle";
import heroBg from "@/assets/hero_bg.jpg";
import dron1 from "@/assets/dron_1.jpeg";
import dron2 from "@/assets/dron_2.jpeg";
import schoolLogo from "@/assets/skolni_logo.png";
import githubIcon from "@/assets/github.svg";
import { Leaf, Camera, Code, CloudSun, Shield, Maximize, Wallet, Settings, ExternalLink } from "lucide-react";

const Index = () => {
  const [lang, setLang] = useState<Lang>("cs");

  const techIcons = [
    <Leaf className="h-8 w-8" />,
    <Camera className="h-8 w-8" />,
    <Code className="h-8 w-8" />,
    <CloudSun className="h-8 w-8" />,
  ];

  const advIcons = [
    <Shield className="h-6 w-6" />,
    <Maximize className="h-6 w-6" />,
    <Wallet className="h-6 w-6" />,
    <Settings className="h-6 w-6" />,
  ];

  const techItems = [t.tech.drone, t.tech.cameras, t.tech.software, t.tech.weather];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-bold text-primary">AirVision</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            {Object.entries(t.nav).map(([key, val]) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
              >
                {val[lang]}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/Krupicova12Kase/monitorovani-aleji-hk" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="h-6 w-6 opacity-70 transition-opacity hover:opacity-100" />
            </a>
            <a href="https://1sjg.cz/" target="_blank" rel="noopener noreferrer">
              <img src={schoolLogo} alt="1.SJG" className="h-7 w-7" />
            </a>
            <LanguageToggle lang={lang} onToggle={setLang} />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="NDVI aerial view" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="animate-fade-up font-display text-5xl font-800 tracking-tight text-primary-foreground md:text-7xl lg:text-8xl">
            AirVision
          </h1>
          <p className="animate-fade-up animation-delay-200 mt-4 font-display text-xl text-accent md:text-2xl">
            {t.hero.subtitle[lang]}
          </p>
          <p className="animate-fade-up animation-delay-400 mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            {t.hero.description[lang]}
          </p>
          <a
            href="#about"
            className="animate-fade-up animation-delay-600 mt-10 inline-block rounded-full bg-accent px-8 py-3 font-semibold text-accent-foreground shadow-lg transition-all hover:bg-warm hover:shadow-xl"
          >
            {t.hero.cta[lang]}
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-center font-display text-4xl font-bold text-primary md:text-5xl">
            {t.about.title[lang]}
          </h2>
          <div className="section-divider mt-4" />
          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground/80">{t.about.p1[lang]}</p>
              <p className="text-lg leading-relaxed text-foreground/80">{t.about.p2[lang]}</p>
              <p className="text-lg leading-relaxed text-foreground/80">{t.about.p3[lang]}</p>
            </div>
            <div className="relative">
              <img
                src={dron1}
                alt="NDVI drone monitoring"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary p-4 shadow-lg">
                <p className="font-display text-sm font-semibold text-primary-foreground">NDVI</p>
                <p className="font-mono text-2xl font-bold text-accent">
                  (NIR − RED) / (NIR + RED)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NDVI Explanation */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            {t.ndvi.title[lang]}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-primary-foreground/80">
            {t.ndvi.description[lang]}
          </p>
          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-secondary/30 p-6 backdrop-blur">
            <p className="font-mono text-2xl font-bold text-accent md:text-3xl">
              NDVI = (NIR − RED) / (NIR + RED)
            </p>
          </div>
          <div className="mx-auto mt-8 flex max-w-lg items-center justify-center gap-2">
            {[
              { label: "-1", color: "bg-red-600" },
              { label: "0", color: "bg-yellow-500" },
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
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-center font-display text-4xl font-bold text-primary md:text-5xl">
            {t.tech.title[lang]}
          </h2>
          <div className="section-divider mt-4" />
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {techItems.map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex rounded-xl bg-secondary/20 p-3 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                  {techIcons[i]}
                </div>
                <h3 className="font-display text-xl font-bold text-primary">
                  {item.title[lang]}
                </h3>
                <p className="mt-3 leading-relaxed text-foreground/70">{item.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drone Images */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <img src={dron2} alt="NDVI analysis" className="w-full rounded-2xl shadow-xl" />
            <div>
              <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
                {t.advantages.title[lang]}
              </h2>
              <div className="mt-8 space-y-6">
                {t.advantages.items.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-warm">
                      {advIcons[i]}
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-primary">
                        {item.title[lang]}
                      </h4>
                      <p className="mt-1 text-foreground/70">{item.desc[lang]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-center font-display text-4xl font-bold text-primary md:text-5xl">
            {t.results.title[lang]}
          </h2>
          <div className="section-divider mt-4" />
          <p className="mx-auto mt-8 max-w-3xl text-center text-lg text-foreground/70">
            {t.results.summary[lang]}
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.results.items.map((item, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg font-bold text-primary">
                  {item.title[lang]}
                </h3>
                <p className="mt-2 text-foreground/70">{item.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-primary py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-center font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            {t.team.title[lang]}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {t.team.members.map((member, i) => (
              <div
                key={i}
                className="rounded-2xl bg-secondary/20 p-8 text-center backdrop-blur"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/30 font-display text-2xl font-bold text-accent">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-display text-xl font-bold text-primary-foreground">
                  {member.name}
                </h3>
                <p className="mt-2 text-primary-foreground/70">{member.role[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-center font-display text-4xl font-bold text-primary md:text-5xl">
            {t.collaboration.title[lang]}
          </h2>
          <div className="section-divider mt-4" />
          <div className="mx-auto mt-12 max-w-2xl space-y-4">
            {t.collaboration.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <ExternalLink className="h-5 w-5 shrink-0 text-secondary" />
                <p className="font-medium text-foreground">{item[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-primary py-8">
        <div className="container mx-auto flex flex-col items-center gap-4 px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <img src={schoolLogo} alt="1.SJG" className="h-8 w-8" />
            <span className="text-sm text-primary-foreground/70">{t.footer.school}</span>
          </div>
          <p className="text-sm text-primary-foreground/50">
            © 2026 AirVision · {t.footer.rights[lang]}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
