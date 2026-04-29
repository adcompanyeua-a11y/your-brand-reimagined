import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [segmento, setSegmento] = useState("");
  const [funcionarios, setFuncionarios] = useState("");
  const [faturamento, setFaturamento] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;

    const payload = {
      nome: (form.elements.namedItem("nome") as HTMLInputElement).value,
      whatsapp: (form.elements.namedItem("whatsapp") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      empresa: (form.elements.namedItem("empresa") as HTMLInputElement).value,
      segmento: segmento || "Não informado",
      funcionarios: funcionarios || "Não informado",
      faturamento: faturamento || "Não informado",
    };

    try {
      const res = await fetch("https://agenciaadcompany.com.br/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.ok) {
        toast.success("Recebemos sua solicitação! Entraremos em contato em breve.");
        form.reset();
        setSegmento("");
        setFuncionarios("");
        setFaturamento("");
      } else {
        toast.error("Erro ao enviar. Tente novamente em instantes.");
      }
    } catch {
      toast.error("Erro de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setLoading(false);
    }
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
              <Input id="nome" name="nome" required placeholder="Seu nome completo" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input id="whatsapp" name="whatsapp" required placeholder="(00) 00000-0000" />
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" name="email" type="email" required placeholder="voce@email.com" />
              </div>
            </div>
            <div>
              <Label htmlFor="empresa">Nome da empresa</Label>
              <Input id="empresa" name="empresa" placeholder="Sua empresa" />
            </div>

            {/* Qual o seu segmento? */}
            <div>
              <Label>Qual o seu segmento?</Label>
              <Select value={segmento} onValueChange={setSegmento}>
                <SelectTrigger><SelectValue placeholder="Qual o seu segmento?" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="educacao">Educação</SelectItem>
                  <SelectItem value="servico">Serviço</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="franquia">Franquia</SelectItem>
                  <SelectItem value="saude">Saúde</SelectItem>
                  <SelectItem value="beleza">Beleza e estética</SelectItem>
                  <SelectItem value="construcao">Construção civil</SelectItem>
                  <SelectItem value="financas">Finanças</SelectItem>
                  <SelectItem value="varejo">Varejo</SelectItem>
                  <SelectItem value="imobiliaria">Imobiliária</SelectItem>
                  <SelectItem value="alimentacao">Alimentação</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Quantos funcionários você tem? */}
            <div>
              <Label>Quantos funcionários você tem?</Label>
              <Select value={funcionarios} onValueChange={setFuncionarios}>
                <SelectTrigger><SelectValue placeholder="Quantos funcionários você tem?" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="00-01">00 - 01</SelectItem>
                  <SelectItem value="02-10">02 - 10</SelectItem>
                  <SelectItem value="11-20">11 - 20</SelectItem>
                  <SelectItem value="21-50">21 - 50</SelectItem>
                  <SelectItem value="51-100">51 - 100</SelectItem>
                  <SelectItem value="+100">+100</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Faturamento médio mensal */}
            <div>
              <Label>Faturamento médio mensal</Label>
              <Select value={faturamento} onValueChange={setFaturamento}>
                <SelectTrigger><SelectValue placeholder="Faturamento médio mensal" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="abaixo-70k">Abaixo de R$ 70 mil</SelectItem>
                  <SelectItem value="70k-150k">Entre R$ 70 e 150 mil</SelectItem>
                  <SelectItem value="150k-500k">Entre R$ 150 e 500 mil</SelectItem>
                  <SelectItem value="acima-500k">Acima de R$ 500 mil</SelectItem>
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
