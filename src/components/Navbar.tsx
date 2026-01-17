import { useState, useEffect } from "react";
import { Shield, Menu, X } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { Language } from "@/lib/utils";

type NavbarProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: language === "ja" ? "ホーム" : "Home" },
    { href: "#education", label: language === "ja" ? "学歴" : "Education" },
    { href: "#certificates", label: language === "ja" ? "認定証" : "Certificates" },
    { href: "#skills", label: language === "ja" ? "スキル" : "Skills" },
    { href: "#projects", label: language === "ja" ? "プロジェクト" : "Projects" },
    { href: "#experience", label: language === "ja" ? "経験" : "Experience" },
    { href: "#contact", label: language === "ja" ? "お問い合わせ" : "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-4">
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollToSection("#hero"); }}
          className="flex items-center gap-2 group"
        >
          <Shield className="w-8 h-8 text-primary group-hover:glow-text transition-all duration-300" />
          <span className="font-mono font-bold text-lg text-foreground">
            CYBER<span className="text-primary">SEC</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); history.replaceState(null, "", link.href); }}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <ToggleGroup
            type="single"
            value={language}
            onValueChange={(value) => {
              if (value === "ja" || value === "en") {
                onLanguageChange(value);
              }
            }}
            className="bg-secondary/40 rounded-full px-1 py-1 transition-colors duration-300"
          >
            <ToggleGroupItem
              value="ja"
              className="px-3 py-1 text-xs font-mono transition-all duration-300 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-md data-[state=on]:scale-105"
            >
              日本語
            </ToggleGroupItem>
            <ToggleGroupItem
              value="en"
              className="px-3 py-1 text-xs font-mono transition-all duration-300 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-md data-[state=on]:scale-105"
            >
              English
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ToggleGroup
            type="single"
            value={language}
            onValueChange={(value) => {
              if (value === "ja" || value === "en") {
                onLanguageChange(value);
              }
            }}
            className="bg-secondary/40 rounded-full px-1 py-1 transition-colors duration-300"
          >
            <ToggleGroupItem
              value="ja"
              className="px-2 py-1 text-[10px] font-mono transition-all duration-300 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-md data-[state=on]:scale-105"
            >
              日
            </ToggleGroupItem>
            <ToggleGroupItem
              value="en"
              className="px-2 py-1 text-[10px] font-mono transition-all duration-300 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-md data-[state=on]:scale-105"
            >
              EN
            </ToggleGroupItem>
          </ToggleGroup>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-lg p-4 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); history.replaceState(null, "", link.href); }}
              className="block w-full text-left font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300 py-3 border-b border-border/30 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
