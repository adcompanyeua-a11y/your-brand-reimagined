import { Target, Megaphone, BarChart3, Globe, Search, Users } from "lucide-react";

const services = [
  { icon: Target, title: "Posicionamento Estratégico", text: "Definimos o posicionamento ideal da sua marca para se destacar da concorrência e atrair o público certo." },
  { icon: Megaphone, title: "Gestão de Tráfego (Anúncios)", text: "Campanhas otimizadas em Google Ads e Meta Ads para gerar leads qualificados com baixo custo por aquisição." },
  { icon: Search, title: "Google Ads & SEO Local", text: "Apareça no topo das buscas do Google e domine sua região com estratégias de SEO e Local Service Ads." },
  { icon: Users, title: "Gestão de Mídias Sociais", text: "Criação de conteúdo estratégico, engajamento e crescimento orgânico no Instagram, Facebook e TikTok." },
  { icon: BarChart3, title: "Análise de Performance", text: "Relatórios transparentes e dashboards em tempo real para você acompanhar cada métrica que importa." },
  { icon: Globe, title: "Criação de Sites & Landing Pages", text: "Sites rápidos, modernos e otimizados para conversão. Cada visitante vira uma oportunidade real." },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-brand-navy relative">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm font-bold tracking-widest mb-4">NOSSOS SERVIÇOS</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Soluções completas em <span className="text-gradient-yellow">marketing digital</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Estratégias integradas para crescer com previsibilidade e escalar seu negócio com inteligência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group relative p-8 rounded-2xl bg-card-grad border border-border hover:border-brand-yellow/50 transition-smooth shadow-card-soft hover:-translate-y-1">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-grad text-brand-navy mb-5 shadow-yellow-soft group-hover:scale-110 transition-smooth">
                <Icon className="h-7 w-7" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
