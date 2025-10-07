import { Card } from "@/components/ui/card";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 px-4 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={aboutBg} 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <Card className="p-6 md:p-12 bg-card/50 backdrop-blur-sm border-primary/20 card-shadow">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start mb-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-primary">Professional Summary</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                AI Automation Specialist and Full-Stack Developer with expertise in enterprise automation, 
                DevOps, and modern web technologies.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Specializing in OpenAI API integration, n8n workflow automation, Docker orchestration, 
                and scalable web development at Swaran Soft.
              </p>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm md:text-base">Location</p>
                  <p className="text-muted-foreground text-sm md:text-base">New Delhi, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm md:text-base">Email</p>
                  <p className="text-muted-foreground text-xs md:text-base break-all">developer.anuragsrivastav@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm md:text-base">Phone</p>
                  <p className="text-muted-foreground text-sm md:text-base">+91 8851800230</p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm md:text-base">Education</p>
                  <p className="text-muted-foreground text-sm md:text-base">BCA, Integral University</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fun Facts Section */}
          <div className="pt-8 border-t border-primary/20">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-center text-accent">⚡ Quick Facts</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-xs text-muted-foreground">Automations Built</div>
              </div>
              <div className="text-center p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">24/7</div>
                <div className="text-xs text-muted-foreground">AI Systems Running</div>
              </div>
              <div className="text-center p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">10K+</div>
                <div className="text-xs text-muted-foreground">Code Commits</div>
              </div>
              <div className="text-center p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">∞</div>
                <div className="text-xs text-muted-foreground">Coffee Consumed</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
