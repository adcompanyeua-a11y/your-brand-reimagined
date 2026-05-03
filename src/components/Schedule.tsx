const Schedule = () => {
  return (
    <section id="agendamento" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-brand-yellow/20 blur-[120px]" />
      <div className="container relative mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm font-bold tracking-widest mb-4">
            AGENDAMENTO
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Agende uma <span className="text-gradient-yellow">Consulta Gratuita</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o melhor horário e fale diretamente com nossa equipe de especialistas.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-brand-yellow/20 shadow-card-soft bg-card-grad">
          <iframe
            src="https://cal.com/ad-company-qdkxpa/analise"
            title="Agende uma Consulta Gratuita"
            className="w-full h-[750px] border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
