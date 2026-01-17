import { ShieldCheck, Briefcase, Clock } from "lucide-react";

const experiences = [
  {
    role: "Cybersecurity Enthusiast",
    organization: "Self-directed Projects & Labs",
    period: "2023 – Present",
    focus: "Hands-on practice in penetration testing, OSINT, and secure systems design.",
    highlights: [
      "Designed and executed lab environments using Kali Linux and virtual machines",
      "Performed vulnerability assessment workflows with Nmap, Burp Suite, and Wireshark",
    ],
  },
  {
    role: "Security & Networking Projects",
    organization: "Academic and Personal Initiatives",
    period: "2022 – Present",
    focus: "Applied networking and security concepts to real-world style scenarios.",
    highlights: [
      "Implemented firewall and routing configurations for small-scale network topologies",
      "Simulated attack detection and response using open-source IDS tooling",
    ],
  },
  {
    role: "AI & Security Research Projects",
    organization: "University Coursework",
    period: "Ongoing",
    focus: "Intersecting data science, AI, and security for automation and detection.",
    highlights: [
      "Explored NLP and OCR pipelines for academic dishonesty detection",
      "Experimented with computer vision approaches for emergency vehicle recognition",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <span className="font-mono text-sm text-primary">// experience</span>
          </div>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4">
            Practical <span className="gradient-text">Exposure</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real-world style projects and lab work building a strong security foundation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {experiences.map((exp) => (
            <div key={exp.role} className="glass rounded-xl p-6 glow-border hover:glow transition-all duration-300 flex flex-col">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono text-lg font-bold text-foreground">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.organization}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-3">
                <Clock className="w-4 h-4 text-primary" />
                <span>{exp.period}</span>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{exp.focus}</p>

              <div className="mt-auto space-y-2 text-sm text-muted-foreground">
                {exp.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Briefcase className="w-4 h-4 text-primary mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

