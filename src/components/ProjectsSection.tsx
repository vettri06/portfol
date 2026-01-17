const projects = [
  {
    title: "Tracescope-OSINT",
    description:
      "Python-based OSINT tool leveraging OCR, reverse image search, and AI analysis to extract actionable intelligence from images.",
    stack: ["Python", "OCR", "Computer Vision", "AI"],
  },
  {
    title: "Hash-Crack",
    description:
      "Python tool for hash and password decryption using multiple algorithms and heuristic methods for ethical hacking and security research.",
    stack: ["Python", "Cryptography", "Security"],
  },
  {
    title: "Academic Dishonesty Detection System",
    description:
      "Flask-based system using ML, NLP, OCR, and stylometry to automatically detect plagiarism and authorship inconsistencies with reporting and batch processing.",
    stack: ["Flask", "ML", "NLP", "OCR"],
  },
  {
    title: "Emergency Vehicle Detection",
    description:
      "AI-based computer vision system to detect and track emergency vehicles in real-time for smarter traffic management.",
    stack: ["Computer Vision", "AI", "Real-time"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <span className="font-mono text-sm text-primary">// projects</span>
          </div>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4">
            Selected <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Practical, hands-on projects in security, OSINT, and AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <div key={i} className="glass rounded-xl p-6 glow-border hover:glow transition-all duration-300">
              <h3 className="font-mono text-xl font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground mb-4">{p.description}</p>
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
