import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Differentials = () => {
  const { t } = useLanguage();
  return (
    <section id="diferenciais" className="py-24 bg-brand-navy">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm font-bold tracking-widest mb-4">{t.differentials.tag}</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {t.differentials.titleStart}<span className="text-gradient-yellow">{t.differentials.titleHighlight}</span>{t.differentials.titleEnd}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.differentials.blocks.map(b => (
            <div key={b.title} className="p-8 rounded-2xl bg-card-grad border border-border shadow-card-soft">
              <h3 className="text-2xl font-bold mb-6 text-brand-yellow">{b.title}</h3>
              <ul className="space-y-4">
                {b.items.map(it => (
                  <li key={it} className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-brand-yellow shrink-0 mt-0.5" />
                    <span className="text-foreground/85">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Differentials;
