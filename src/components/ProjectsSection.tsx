import type { Language } from "@/lib/utils";

const projects = [
  {
    titleJa: "Tracescope-OSINT",
    titleEn: "Tracescope-OSINT",
    descriptionJa:
      "OCR・逆画像検索・AI 分析を活用して画像から有用なインテリジェンスを抽出する Python 製 OSINT ツール。",
    descriptionEn:
      "Python-based OSINT tool leveraging OCR, reverse image search, and AI analysis to extract actionable intelligence from images.",
    stack: ["Python", "OCR", "Computer Vision", "AI"],
  },
  {
    titleJa: "Hash-Crack",
    titleEn: "Hash-Crack",
    descriptionJa:
      "複数アルゴリズムとヒューリスティックを用いてハッシュやパスワードを解析する、エシカルハッキング向け Python ツール。",
    descriptionEn:
      "Python tool for hash and password decryption using multiple algorithms and heuristic methods for ethical hacking and security research.",
    stack: ["Python", "Cryptography", "Security"],
  },
  {
    titleJa: "Academic Dishonesty Detection System",
    titleEn: "Academic Dishonesty Detection System",
    descriptionJa:
      "ML・NLP・OCR・文体解析を活用し、剽窃や筆者不一致を自動検知する Flask ベースのシステム。",
    descriptionEn:
      "Flask-based system using ML, NLP, OCR, and stylometry to automatically detect plagiarism and authorship inconsistencies with reporting and batch processing.",
    stack: ["Flask", "ML", "NLP", "OCR"],
  },
  {
    titleJa: "Emergency Vehicle Detection",
    titleEn: "Emergency Vehicle Detection",
    descriptionJa:
      "緊急車両をリアルタイムに検出・追跡し、スマートな交通制御を支援するコンピュータビジョンシステム。",
    descriptionEn:
      "AI-based computer vision system to detect and track emergency vehicles in real-time for smarter traffic management.",
    stack: ["Computer Vision", "AI", "Real-time"],
  },
];

type ProjectsSectionProps = {
  language: Language;
};

const ProjectsSection = ({ language }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <span className="font-mono text-sm text-primary">
              {language === "ja" ? "// プロジェクト" : "// projects"}
            </span>
          </div>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4">
            {language === "ja" ? "代表的な" : "Selected"}{" "}
            <span className="gradient-text">{language === "ja" ? "プロジェクト" : "Work"}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {language === "ja"
              ? "セキュリティ、OSINT、AI 分野での実践的なプロジェクトを抜粋しています。"
              : "Practical, hands-on projects in security, OSINT, and AI."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <div key={i} className="glass rounded-xl p-6 glow-border hover:glow transition-all duration-300">
              <h3 className="font-mono text-xl font-bold text-foreground mb-2">
                {language === "ja" ? p.titleJa : p.titleEn}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === "ja" ? p.descriptionJa : p.descriptionEn}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono glass rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
