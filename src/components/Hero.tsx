import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import rocket from "@/assets/hero-rocket.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-hero pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-brand-yellow/20 blur-[120px] animate-glow" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-royal/40 blur-[120px]" />

      <div className="container relative mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05]">
            {t.hero.titleStart}<span className="text-gradient-yellow">{t.hero.titleHighlight}</span>{t.hero.titleEnd}
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            <strong className="text-brand-yellow">AD Company</strong> {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="hero" size="xl">
              <a href="#contato"><MessageCircle className="mr-2 h-5 w-5" /> {t.hero.cta}</a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
            <div><span className="text-brand-yellow font-bold text-2xl font-display">+200</span><br />{t.hero.stat1}</div>
            <div><span className="text-brand-yellow font-bold text-2xl font-display">5x</span><br />{t.hero.stat2}</div>
            <div><span className="text-brand-yellow font-bold text-2xl font-display">24/7</span><br />{t.hero.stat3}</div>
          </div>
        </div>

        <div className="relative animate-float">
          <div className="absolute inset-0 rounded-full bg-brand-yellow/30 blur-3xl" />
          <img
            src={rocket}
            alt="AD Company"
            className="relative w-full h-auto rounded-3xl shadow-glow"
            width={1024}
            height={1024}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
