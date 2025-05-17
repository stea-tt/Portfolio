import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToogle";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t } = useTranslation();
  const navItems = [
    { name: t("homep"), href: "#hero" },
    { name: t("aboutp"), href: "#about" },
    { name: t("skillsp"), href: "#skills" },
    { name: t("projectsp"), href: "#projects" },
    { name: t("contactp"), href: "#contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-md" : "py-5"
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between",
          isMenuOpen && "min-h-screen"
        )}
      >
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10 m-3">
            <span className="text-glow text-primary"> Simon </span>
            <span className="text-glow text-foreground"> Boisneault </span>
            Portfolio
          </span>
        </a>

        {/* Nav desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>

      {/* Bouton menu mobile - EN DEHORS DU CONTAINER */}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="md:hidden p-2 text-foreground z-50 absolute top-5 right-5"
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menu mobile */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center space-y-8 text-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <div className="mt-4">
            <ThemeToggle />
          </div>
          <div className="mt-4">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
