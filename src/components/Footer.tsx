import { Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/ad-company-logo.png";

const Footer = () => {
  return (
    <footer className="bg-brand-navy border-t border-brand-yellow/10 pt-16 pb-8">
      <div className="container mx-auto grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="AD Company logo" className="h-14 w-14 rounded-md" width={56} height={56} />
            <span className="font-display text-xl font-black text-brand-yellow">AD COMPANY</span>
          </div>
          <p className="text-muted-foreground">Marketing digital estratégico para negócios que querem crescer com previsibilidade.</p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-brand-yellow">Contato</h4>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand-yellow" /> contato@adcompany.com.br</li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-brand-yellow" /> (00) 00000-0000</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-brand-yellow">Redes Sociais</h4>
          <div className="flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 rounded-lg bg-brand-yellow/10 hover:bg-brand-yellow hover:text-brand-navy text-brand-yellow flex items-center justify-center transition-smooth" aria-label="Rede social">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-8 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} AD Company — Todos os direitos reservados.
      </div>
    </footer>
  );
};
export default Footer;
