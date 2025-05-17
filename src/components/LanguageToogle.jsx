import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [isFrench, setIsFrench] = useState(true);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage === "fr") {
      setIsFrench(true);
      i18n.changeLanguage("fr");
    } else {
      setIsFrench(false);
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en"); // valeur par défaut
    }
  }, [i18n]);

  const toggleLanguage = () => {
    if (isFrench) {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
      setIsFrench(false);
    } else {
      i18n.changeLanguage("fr");
      localStorage.setItem("language", "fr");
      setIsFrench(true);
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "p-2 rounded-full transition-colors duration-300",
        "focus:outline-none"
      )}
    >
      <span className="font-bold size-6 text-primary">
        {isFrench ? "EN" : "FR"}
      </span>
    </button>
  );
};
