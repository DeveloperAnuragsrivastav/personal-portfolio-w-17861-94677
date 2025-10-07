import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import projectsBg from "@/assets/projects-bg.jpg";

const projects = [
  {
    title: "Gignaati Docker Automation App",
    period: "July 2024 – Present",
    description: "Cross-platform desktop app with one-click Docker, n8n, and Ollama setup. Features automated health checks and system monitoring.",
    technologies: ["Electron.js", "Docker", "n8n", "Ollama", "Node.js"],
  },
  {
    title: "OpenAI Real-Time Voice Agent",
    period: "August 2024 – Present",
    description: "Advanced conversational AI with real-time voice interaction. Optimized for low-latency with sub-200ms response time.",
    technologies: ["OpenAI API", "WebSocket", "Node.js", "JavaScript ES6+"],
  },
  {
    title: "AI-Powered Outreach Automation",
    period: "June 2024 – Present",
    description: "AI-powered LinkedIn profile scraping with story-driven email generation for C-Suite executives.",
    technologies: ["n8n", "GPT-4.1", "RapidAPI", "Supabase", "Twilio"],
  },
  {
    title: "Hospital Feedback Management System",
    period: "August 2024 – Present",
    description: "Multilingual feedback system with AI agents for hospital departments. Automated sentiment analysis and routing.",
    technologies: ["n8n", "GPT-4o-mini", "Supabase", "Google Sheets API"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-20 px-4 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={projectsBg} 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
      </div>
      
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-40 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
          Key <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-4 md:p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all card-shadow group hover:scale-[1.02] duration-300"
            >
              <div className="flex items-start justify-between mb-2 md:mb-3">
                <h3 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>
                <ExternalLink className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 ml-2" />
              </div>
              
              <Badge variant="outline" className="border-accent/50 text-accent mb-3 md:mb-4 text-xs">
                {project.period}
              </Badge>
              
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="bg-secondary/50">
                    {tech}
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

export default Projects;
