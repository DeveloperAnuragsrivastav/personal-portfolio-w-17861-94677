import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "SmartiansAI",
    role: "AI/ML Engineer",
    location: "India",
    period: "October 2024 – Present",
    achievements: [
      "Developing and deploying advanced AI/ML solutions for enterprise automation",
      "Designing scalable machine learning pipelines and models",
      "Implementing cutting-edge AI technologies for business optimization",
      "Collaborating with cross-functional teams on AI-driven projects",
    ],
  },
  {
    company: "Swaran Soft Support Solutions",
    role: "AI Automation Intern",
    location: "Gurgaon, India",
    period: "April 2024 – September 2024",
    achievements: [
      "Architected Docker Automation App reducing deployment time by 85%",
      "Built real-time AI voice agent with sub-200ms latency using OpenAI API",
      "Enhanced Gignaati Workbench with LLM integrations for enterprise clients",
      "Redesigned corporate website improving load speeds by 60%",
    ],
  },
  {
    company: "CETPA Infotech",
    role: "MERN Stack Development Intern",
    location: "Noida, India",
    period: "January 2024 – March 2024",
    achievements: [
      "Completed intensive MERN Stack development program",
      "Built full-stack applications with MongoDB, Express.js, React.js, Node.js",
      "Developed responsive interfaces with modern React hooks",
      "Mastered ES6+, async programming, and backend architecture",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 md:py-20 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--primary)) 35px, hsl(var(--primary)) 36px)`,
             }}>
        </div>
      </div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-32 right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        
        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-4 md:p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all card-shadow"
            >
              <div className="flex flex-col gap-3 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">{exp.role}</h3>
                  <p className="text-lg md:text-xl font-semibold">{exp.company}</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <Badge variant="outline" className="border-accent text-accent w-fit text-xs md:text-sm">
                    {exp.period}
                  </Badge>
                  <p className="text-xs md:text-sm text-muted-foreground">{exp.location}</p>
                </div>
              </div>
              
              <ul className="space-y-2 md:space-y-3 mt-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-2 md:gap-3 text-sm md:text-base text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
