import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6">
            Hi, I'm <span className="text-gradient">Anurag Srivastav</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground mb-2 md:mb-4">
            AI Automation Specialist & Full-Stack Developer
          </p>
          <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-xl md:max-w-2xl mx-auto px-4">
            Crafting enterprise automation solutions with cutting-edge AI
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 md:mb-12 px-4">
            <Button 
              size="lg" 
              className="gradient-primary text-white border-0 glow-effect hover:scale-105 transition-transform"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Anurag-Srivastav-Resume.pdf';
                link.download = 'Anurag-Srivastav-Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 justify-center">
            <a 
              href="https://github.com/anuragsrivastav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 md:p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
            >
              <Github className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/anuragsrivastav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 md:p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
            >
              <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a 
              href="mailto:developer.anuragsrivastav@gmail.com"
              className="p-2.5 md:p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
            >
              <Mail className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <button 
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
        aria-label="Scroll to about section"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </button>
    </section>
  );
};

export default Hero;
