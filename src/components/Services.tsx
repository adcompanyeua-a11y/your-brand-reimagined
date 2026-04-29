import { Target, Megaphone, BarChart3, Globe, Search, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Target, Megaphone, Search, Users, BarChart3, Globe];

const Services = () => {
  const { t } = useLanguage();
  return (
    <section id="servicos" className="py-24 bg-brand-navy relative">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm font-bold tracking-widest mb-4">{t.services.tag}</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            {t.services.titleStart}<span className="text-gradient-yellow">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t.services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title} className="group relative p-8 rounded-2xl bg-card-grad border border-border hover:border-brand-yellow/50 transition-smooth shadow-card-soft hover:-translate-y-1">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-grad text-brand-navy mb-5 shadow-yellow-soft group-hover:scale-110 transition-smooth">
                  <Icon className="h-7 w-7" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Services;
