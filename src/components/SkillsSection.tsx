import { useEffect, useRef, useState } from "react";
import { Shield, Lock, Search, Server, Code, Database, Bug, Network } from "lucide-react";
import type { Language } from "@/lib/utils";

const skills = [
  { nameJa: "ペネトレーションテスト", nameEn: "Penetration Testing", level: 95, icon: Bug },
  { nameJa: "ネットワークセキュリティ", nameEn: "Network Security", level: 90, icon: Network },
  { nameJa: "インシデントレスポンス", nameEn: "Incident Response", level: 88, icon: Shield },
  { nameJa: "脆弱性評価", nameEn: "Vulnerability Assessment", level: 92, icon: Search },
  { nameJa: "セキュリティアーキテクチャ", nameEn: "Security Architecture", level: 85, icon: Server },
  { nameJa: "暗号技術", nameEn: "Cryptography", level: 80, icon: Lock },
  { nameJa: "セキュアコーディング", nameEn: "Secure Coding", level: 82, icon: Code },
  { nameJa: "SIEM・ログ分析", nameEn: "SIEM & Log Analysis", level: 87, icon: Database },
];

const tools = [
  "Wireshark",
  "Burp Suite",
  "Metasploit",
  "Nmap",
  "Kali Linux",
  "Cisco Packet Tracer",
  "Linux",
  "Python",
  "Bash",
  "Splunk",
  "OWASP ZAP",
  "Ghidra",
  "Volatility",
  "John the Ripper",
  "Hashcat",
  "Snort",
  "Suricata",
  "ELK Stack",
  "VMware",
  "VirtualBox",
];

type SkillsSectionProps = {
  language: Language;
};

const SkillsSection = ({ language }: SkillsSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <span className="font-mono text-sm text-primary">
              {language === "ja" ? "// スキル" : "// skills"}
            </span>
          </div>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4">
            {language === "ja" ? "テクニカル" : "Technical"}{" "}
            <span className="gradient-text">{language === "ja" ? "スキル" : "Expertise"}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {language === "ja"
              ? "サイバーセキュリティ分野での実践経験を通じて培った包括的なスキルセットです。"
              : "Comprehensive skill set built through years of hands-on experience in cybersecurity."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`glass rounded-xl p-6 glow-border hover:glow transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-mono font-semibold text-foreground">
                    {language === "ja" ? skill.nameJa : skill.nameEn}
                  </h3>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 100 + 300}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="font-mono text-xl font-semibold mb-8 text-foreground">
            {language === "ja" ? "使用ツール・テクノロジー" : "Tools & Technologies"}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={tool}
                className={`px-4 py-2 glass rounded-lg font-mono text-sm text-muted-foreground hover:text-primary hover:glow-border transition-all duration-300 cursor-default ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${800 + index * 50}ms` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
