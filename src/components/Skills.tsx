import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["JavaScript (ES6+)", "Python", "PHP", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frontend Technologies",
    skills: ["React.js", "Tailwind CSS", "jQuery", "Bootstrap", "Responsive Design", "PWA"],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "WebSocket", "Microservices"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "Supabase", "PhpMyAdmin", "Query Optimization"],
  },
  {
    category: "AI & DevOps",
    skills: ["OpenAI API", "n8n", "Docker", "Ollama", "Electron.js", "CI/CD", "OpenVINO"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Linux", "AWS", "Docker Desktop"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 md:py-20 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
          Technical <span className="text-gradient">Expertise</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-4 md:p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all card-shadow"
            >
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {category.skills.map((skill, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary" 
                    className="bg-secondary/50 hover:bg-primary/20 transition-colors cursor-default text-xs md:text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
