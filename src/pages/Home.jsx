import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { HackBackground } from "@/components/HackBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { MySkills } from "../components/MySkills";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}

      <HackBackground />

      {/* Navbar */}

      <Navbar />

      {/* Main Content */}

      <main>
        <HeroSection />
        <AboutSection />
        <MySkills />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}

      <Footer />
    </div>
  );
};
