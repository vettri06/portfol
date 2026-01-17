import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import CertificatesSection from "@/components/CertificatesSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import type { Language } from "@/lib/utils";

const Index = () => {
  const [language, setLanguage] = useState<Language>("ja");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLanguageChange = (nextLanguage: Language) => {
    if (nextLanguage === language) return;
    setIsTransitioning(true);
    setLanguage(nextLanguage);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 250);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar language={language} onLanguageChange={handleLanguageChange} />
      <main
        className={`transition-all duration-300 ${
          isTransitioning ? "opacity-0 scale-[0.99]" : "opacity-100 scale-100"
        }`}
      >
        <HeroSection language={language} />
        <EducationSection language={language} />
        <CertificatesSection language={language} />
        <SkillsSection language={language} />
        <ProjectsSection language={language} />
        <ExperienceSection language={language} />
        <ContactSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;
