import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, TrendingUp, Code2 } from "lucide-react";

const insights = [
  {
    icon: Lightbulb,
    title: "AI Integration Best Practices",
    snippet: "Optimizing OpenAI API calls for enterprise applications requires smart caching, prompt engineering, and fallback strategies.",
    tag: "AI/ML",
  },
  {
    icon: TrendingUp,
    title: "Automation ROI",
    snippet: "Well-designed n8n workflows can reduce manual tasks by 80%, freeing teams to focus on strategic initiatives.",
    tag: "Automation",
  },
  {
    icon: Code2,
    title: "Docker Performance Tips",
    snippet: "Multi-stage builds and layer optimization can reduce container sizes by 70% and improve deployment speeds significantly.",
    tag: "DevOps",
  },
];

const Insights = () => {
  return (
    <section id="insights" className="py-12 md:py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tech <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Thoughts on AI, automation, and modern development practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-accent/50 transition-all card-shadow hover:scale-105 duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {insight.tag}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">
                  {insight.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {insight.snippet}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Insights;
