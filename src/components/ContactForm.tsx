import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Recebemos sua solicitação! Entraremos em contato em breve.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contato" className="py-24 bg-royal relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-brand-yellow/20 blur-[120px]" />
      <div className="container relative mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm font-bold tracking-widest mb-4">FALE CONOSCO</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Transforme seu negócio: <span className="text-gradient-yellow">consulta gratuita</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Pronto para escalar sua empresa? Preencha o formulário e nossa equipe entrará em contato em até 24 horas para uma análise gratuita do seu negócio.
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li>✅ Análise gratuita e sem compromisso</li>
              <li>✅ Estratégia personalizada para seu nicho</li>
              <li>✅ Resposta em até 24 horas úteis</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="bg-card-grad p-8 rounded-2xl border border-brand-yellow/20 shadow-card-soft space-y-4">
            <div>
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" required placeholder="Seu nome completo" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input id="whatsapp" required placeholder="(00) 00000-0000" />
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" required placeholder="voce@email.com" />
              </div>
            </div>
            <div>
              <Label htmlFor="empresa">Nome da empresa</Label>
              <Input id="empresa" placeholder="Sua empresa" />
            </div>
            <div>
              <Label>Qual seu principal interesse?</Label>
              <Select>
                <SelectTrigger><SelectValue placeholder="Selecione um serviço" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="trafego">Gestão de Tráfego (Google/Meta Ads)</SelectItem>
                  <SelectItem value="social">Gestão de Mídias Sociais</SelectItem>
                  <SelectItem value="site">Criação de Site / Landing Page</SelectItem>
                  <SelectItem value="completo">Consultoria Completa</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
              {loading ? "Enviando..." : "Enviar Solicitação"}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              *Ao enviar você concorda com nossa Política de Privacidade.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
