import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">{t("hi")}</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {t("si")}
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {t("bo")}
            </span>
          </h1>

          <div className="pt-4 opacity-0 animate-fade-in-delay-3">
            <a href="#projects" className="hacker-button">
              {t("work")}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in-delay-4">
        <span className="text-sm text-muted-foreground mb-2 animate-bounce">
          {t("scroll")}
        </span>
        <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
      </div>
    </section>
  );
};
