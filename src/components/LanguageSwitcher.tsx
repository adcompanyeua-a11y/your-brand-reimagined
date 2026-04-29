import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const FlagBR = () => (
  <svg viewBox="0 0 60 42" className="h-full w-full" aria-hidden="true">
    <rect width="60" height="42" fill="#009C3B" />
    <polygon points="30,4 56,21 30,38 4,21" fill="#FFDF00" />
    <circle cx="30" cy="21" r="8" fill="#002776" />
    <path d="M22,20 Q30,17 38,20" stroke="#fff" strokeWidth="1.2" fill="none" />
  </svg>
);

const FlagES = () => (
  <svg viewBox="0 0 60 42" className="h-full w-full" aria-hidden="true">
    <rect width="60" height="42" fill="#AA151B" />
    <rect y="10.5" width="60" height="21" fill="#F1BF00" />
  </svg>
);

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { lang, setLang } = useLanguage();

  const btn = "h-6 w-9 rounded-sm overflow-hidden border transition-all";

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <button
        onClick={() => setLang("pt")}
        aria-label="Português (Brasil)"
        className={cn(btn, lang === "pt" ? "border-brand-yellow ring-2 ring-brand-yellow/40 scale-110" : "border-brand-yellow/20 opacity-60 hover:opacity-100")}
      >
        <FlagBR />
      </button>
      <button
        onClick={() => setLang("es")}
        aria-label="Español"
        className={cn(btn, lang === "es" ? "border-brand-yellow ring-2 ring-brand-yellow/40 scale-110" : "border-brand-yellow/20 opacity-60 hover:opacity-100")}
      >
        <FlagES />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
