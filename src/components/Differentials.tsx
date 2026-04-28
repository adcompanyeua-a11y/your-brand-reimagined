import { CheckCircle2 } from "lucide-react";

const blocks = [
  {
    title: "Experiência e Expertise",
    items: [
      "Equipe especializada em tráfego pago, SEO e branding",
      "Visão estratégica de mercado em diversos setores",
      "Histórico comprovado de resultados reais",
    ],
  },
  {
    title: "Atendimento Personalizado",
    items: [
      "Estratégias sob medida para o seu negócio",
      "Comunicação contínua e transparente",
      "Foco total nos seus objetivos",
    ],
  },
  {
    title: "Resultados Comprovados",
    items: [
      "Decisões orientadas por dados e performance",
      "Relatórios detalhados de ROI em tempo real",
      "Cases de sucesso reais e mensuráveis",
    ],
  },
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-24 bg-brand-navy">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm font-bold tracking-widest mb-4">POR QUE A AD COMPANY</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Nossos <span className="text-gradient-yellow">diferenciais</span> em marketing digital
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blocks.map(b => (
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
