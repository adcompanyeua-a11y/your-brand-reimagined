import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/ad-company-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-brand-navy border-t border-brand-yellow/10 pt-16 pb-8">
      <div className="container mx-auto grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="AD Company logo" className="h-14 w-14 object-contain" />
            <span className="font-display text-xl font-black text-brand-yellow">AD COMPANY</span>
          </div>
          <p className="text-muted-foreground">{t.footer.tagline}</p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-brand-yellow">{t.footer.contact}</h4>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand-yellow" /> <a href="mailto:adcompany.eua@gmail.com" className="hover:text-brand-yellow transition-smooth">adcompany.eua@gmail.com</a></li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-brand-yellow" /> <a href="https://wa.me/5548994952650?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20saber%20mais%20da%20AD%20Company." target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-smooth">+55 48 9949-5265</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-brand-yellow">{t.footer.social}</h4>
          <div className="flex gap-3">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/adcompany.ads/", label: "Instagram" },
              { Icon: Facebook, href: "https://www.facebook.com/adcompany.assessoria", label: "Facebook" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg bg-brand-yellow/10 hover:bg-brand-yellow hover:text-brand-navy text-brand-yellow flex items-center justify-center transition-smooth" aria-label={label}>
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-8 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} AD Company — {t.footer.rights}
      </div>
    </footer>
  );
};
export default Footer;
