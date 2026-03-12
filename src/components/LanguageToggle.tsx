import type { Lang } from "@/lib/translations";

interface LanguageToggleProps {
  lang: Lang;
  onToggle: (lang: Lang) => void;
}

const LanguageToggle = ({ lang, onToggle }: LanguageToggleProps) => {
  return (
    <div className="flex items-center gap-1 rounded-full bg-primary/10 p-1">
      <button
        onClick={() => onToggle("cs")}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
          lang === "cs"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-foreground/70 hover:text-foreground"
        }`}
      >
        CZ
      </button>
      <button
        onClick={() => onToggle("en")}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
          lang === "en"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-foreground/70 hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
