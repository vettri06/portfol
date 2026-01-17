import { ShieldCheck, Briefcase, Clock } from "lucide-react";
import type { Language } from "@/lib/utils";

const experiences = [
  {
    roleJa: "サイバーセキュリティ愛好家",
    roleEn: "Cybersecurity Enthusiast",
    organizationJa: "自主プロジェクト・ラボ活動",
    organizationEn: "Self-directed Projects & Labs",
    period: "2023 – Present",
    focusJa: "ペネトレーションテスト、OSINT、セキュアシステム設計の実践的なトレーニング。",
    focusEn: "Hands-on practice in penetration testing, OSINT, and secure systems design.",
    highlightsJa: [
      "Kali Linux と仮想環境を用いたラボ環境の設計・構築",
      "Nmap・Burp Suite・Wireshark による脆弱性診断ワークフローの実施",
    ],
    highlightsEn: [
      "Designed and executed lab environments using Kali Linux and virtual machines",
      "Performed vulnerability assessment workflows with Nmap, Burp Suite, and Wireshark",
    ],
  },
  {
    roleJa: "セキュリティ・ネットワーキングプロジェクト",
    roleEn: "Security & Networking Projects",
    organizationJa: "学術・個人プロジェクト",
    organizationEn: "Academic and Personal Initiatives",
    period: "2024 – Present",
    focusJa: "ネットワークとセキュリティの概念を実践的なシナリオに適用。",
    focusEn: "Applied networking and security concepts to real-world style scenarios.",
    highlightsJa: [
      "小規模ネットワークトポロジ向けのファイアウォール・ルーティング構成を実装",
      "オープンソース IDS を用いた攻撃検知と対応をシミュレーション",
    ],
    highlightsEn: [
      "Implemented firewall and routing configurations for small-scale network topologies",
      "Simulated attack detection and response using open-source IDS tooling",
    ],
  },
  {
    roleJa: "AI・セキュリティ研究プロジェクト",
    roleEn: "AI & Security Research Projects",
    organizationJa: "大学講義・研究",
    organizationEn: "University Coursework",
    period: "Ongoing",
    focusJa: "データサイエンス・AI・セキュリティを組み合わせた自動化・検知の研究。",
    focusEn: "Intersecting data science, AI, and security for automation and detection.",
    highlightsJa: [
      "学術的不正検知のための NLP・OCR パイプラインを検証",
      "緊急車両検知のためのコンピュータビジョン手法を実験",
    ],
    highlightsEn: [
      "Explored NLP and OCR pipelines for academic dishonesty detection",
      "Experimented with computer vision approaches for emergency vehicle recognition",
    ],
  },
];

type ExperienceSectionProps = {
  language: Language;
};

const ExperienceSection = ({ language }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <span className="font-mono text-sm text-primary">
              {language === "ja" ? "// 経験" : "// experience"}
            </span>
          </div>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4">
            {language === "ja" ? "実践的な" : "Practical"}{" "}
            <span className="gradient-text">{language === "ja" ? "経験" : "Exposure"}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {language === "ja"
              ? "現実に近いプロジェクトとラボ環境で、堅牢なセキュリティ基盤を築いています。"
              : "Real-world style projects and lab work building a strong security foundation."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {experiences.map((exp) => {
            const role = language === "ja" ? exp.roleJa : exp.roleEn;
            const org = language === "ja" ? exp.organizationJa : exp.organizationEn;
            const focus = language === "ja" ? exp.focusJa : exp.focusEn;
            const highlights = language === "ja" ? exp.highlightsJa : exp.highlightsEn;

            return (
              <div
                key={role}
                className="glass rounded-xl p-6 glow-border hover:glow transition-all duration-300 flex flex-col"
              >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono text-lg font-bold text-foreground">{role}</h3>
                  <p className="text-sm text-muted-foreground">{org}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-3">
                <Clock className="w-4 h-4 text-primary" />
                <span>{exp.period}</span>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{focus}</p>

              <div className="mt-auto space-y-2 text-sm text-muted-foreground">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Briefcase className="w-4 h-4 text-primary mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
