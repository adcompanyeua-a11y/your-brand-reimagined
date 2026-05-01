import { useLanguage } from "@/i18n/LanguageContext";

const videos = [
  {
    name: "Juliana",
    src: "https://console-nextplay-minio.8qr4sb.easypanel.host/api/v1/buckets/typebot/objects/download?preview=true&prefix=videos%2FJuliana.mp4&version_id=null",
  },
  {
    name: "Gabriela",
    src: "https://console-nextplay-minio.8qr4sb.easypanel.host/api/v1/buckets/typebot/objects/download?preview=true&prefix=videos%2FGabriela.mp4&version_id=null",
  },
];

const VideoReviews = () => {
  const { lang } = useLanguage();
  const tag = lang === "pt" ? "DEPOIMENTOS" : "TESTIMONIOS";
  const titleStart = lang === "pt" ? "O que nossos " : "Lo que nuestros ";
  const titleHighlight = lang === "pt" ? "clientes dizem" : "clientes dicen";
  const subtitle =
    lang === "pt"
      ? "Histórias reais de quem confiou na AD Company para escalar seu negócio."
      : "Historias reales de quienes confiaron en AD Company para escalar su negocio.";

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container relative mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm font-bold tracking-widest mb-4">
            {tag}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {titleStart}
            <span className="text-gradient-yellow">{titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videos.map((v) => (
            <div
              key={v.name}
              className="relative rounded-2xl overflow-hidden border border-brand-yellow/20 bg-brand-navy/60 backdrop-blur hover:border-brand-yellow transition-smooth group"
            >
              <div className="aspect-[9/16] w-full bg-black">
                <video
                  src={v.src}
                  controls
                  preload="metadata"
                  playsInline
                  className="h-full w-full object-contain"
                >
                  <track kind="captions" />
                </video>
              </div>
              <div className="p-4 text-center">
                <p className="font-bold text-lg">{v.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoReviews;
