import { useEffect, useState } from "react";
import { ChevronDown, Terminal } from "lucide-react";
import type { Language } from "@/lib/utils";

type HeroSectionProps = {
  language: Language;
};

const HeroSection = ({ language }: HeroSectionProps) => {
  const [displayText, setDisplayText] = useState("");
  const fullText =
    language === "ja"
      ? "サイバーセキュリティ愛好家・ペネトレーションテスター志望"
      : "Cybersecurity Enthusiast & Aspiring Penetration Tester";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, [fullText]);

  const scrollToSkills = () => {
    const element = document.querySelector("#skills");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pro-bg pro-noise">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span>{" "}
            {language === "ja" ? "自己紹介" : "whoami"}
          </span>
        </div>

        <h1
          className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-foreground">
            {language === "ja" ? "ヴェットリヴェル V" : "VETTRIVEL V"}
          </span>
        </h1>

        <div className="h-12 md:h-14 mb-8 flex items-center justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <span className="font-mono text-xl md:text-3xl gradient-text">
            {displayText}
          </span>
          <span className="w-0.5 h-8 bg-primary ml-1 animate-blink" />
        </div>

        <p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          {language === "ja"
            ? "B.Tech CSE と BS Data Science のデュアルディグリーで学びながら、ネットワーク構成、トラブルシューティング、ファイアウォール運用に習熟し、Kali Linux・Nmap・Wireshark・Cisco Packet Tracer などのツールを用いた脆弱性診断とエシカルハッキングに取り組んでいます。"
            : "Cybersecurity enthusiast pursuing dual degrees (B.Tech CSE, BS Data Science). Skilled in network configuration, troubleshooting, firewall management, and hands-on tools like Kali Linux, Nmap, Wireshark, and Cisco Packet Tracer for vulnerability assessment and ethical hacking."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <button
            onClick={scrollToSkills}
            className="px-8 py-4 bg-primary text-primary-foreground font-mono font-semibold rounded-lg glow hover:scale-105 transition-all duration-300"
          >
            {language === "ja" ? "スキルを見る" : "View My Skills"}
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 glass text-foreground font-mono font-semibold rounded-lg glow-border hover:bg-secondary/50 transition-all duration-300"
          >
            {language === "ja" ? "お問い合わせ" : "Get In Touch"}
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <button onClick={scrollToSkills} className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
