import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <a
          href="#contact"
          className="hacker-button w-fit flex items-center gap-2"
        >
          {t("contbtn")}
        </a>

        <p className="text-sm text-muted-foreground text-center mx-auto">
          &copy; {new Date().getFullYear()} Simon Boisneault. All rights
          reserved.
        </p>

        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
