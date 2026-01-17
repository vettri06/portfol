import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "B.Tech Computer Science Engineering",
    school: "SRM Institute of Science & Technology, Tiruchirappalli, India",
    period: "Expected 05/2027",
    gpa: "GPA: 8.76",
  },
  {
    degree: "BS Data Science (Dual Degree)",
    school: "Indian Institute of Technology, Madras, India",
    period: "Expected 06/2030",
    gpa: "GPA: 5.88",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <span className="font-mono text-sm text-primary">// education</span>
          </div>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Dual-degree track in Computer Science and Data Science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {education.map((ed, i) => (
            <div key={i} className="glass rounded-xl p-6 glow-border hover:glow transition-all duration-300">
              <div className="flex items-center gap-2 text-primary mb-3">
                <GraduationCap className="w-5 h-5" />
                <span className="font-mono text-sm">{ed.period}</span>
              </div>
              <h3 className="font-mono text-xl font-bold text-foreground mb-2">{ed.degree}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                <span>{ed.school}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="font-mono">{ed.gpa}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
