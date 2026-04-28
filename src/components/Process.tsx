const steps = [
  { n: "01", t: "Onboarding", d: "Mergulhamos no seu negócio para entender objetivos, persona e oportunidades." },
  { n: "02", t: "Setup & Estrutura", d: "Configuramos contas, pixels, automações e a base técnica para escalar." },
  { n: "03", t: "Site & Identidade", d: "Criamos site, logo e materiais alinhados ao seu posicionamento." },
  { n: "04", t: "Lançamento", d: "Subimos as primeiras campanhas com criativos validados e testes A/B." },
  { n: "05", t: "Primeiros Clientes", d: "Otimização contínua para reduzir CPL e aumentar a taxa de conversão." },
  { n: "06", t: "Sucesso & Escala", d: "Crescimento sustentável, novos canais e expansão para novos mercados." },
];

const Process = () => {
  return (
    <section id="processo" className="py-24 bg-royal relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(hsl(var(--brand-yellow)) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="container relative mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm font-bold tracking-widest mb-4">METODOLOGIA</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Roteiro de <span className="text-gradient-yellow">sucesso do cliente</span>
          </h2>
          <p className="text-muted-foreground text-lg">Um processo testado e refinado com mais de 200 negócios.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ n, t, d }) => (
            <div key={n} className="relative p-8 rounded-2xl bg-brand-navy/60 backdrop-blur border border-brand-yellow/20 hover:border-brand-yellow transition-smooth">
              <div className="text-6xl font-black text-gradient-yellow font-display mb-3 leading-none">{n}</div>
              <h3 className="text-xl font-bold mb-2">{t}</h3>
              <p className="text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Process;
