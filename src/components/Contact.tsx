import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-20 px-4 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={contactBg} 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        
        <Card className="p-6 md:p-12 bg-card/50 backdrop-blur-sm border-primary/20 card-shadow">
          <div className="text-center mb-6 md:mb-8">
            <p className="text-sm md:text-lg text-muted-foreground">
              Open to discussing new projects and opportunities
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 md:gap-6 mb-6 md:mb-8">
            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-secondary/50 rounded-lg">
              <div className="p-2 md:p-3 bg-primary/20 rounded-full flex-shrink-0">
                <Mail className="h-4 w-4 md:h-6 md:w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm md:text-base">Email</p>
                <a 
                  href="mailto:developer.anuragsrivastav@gmail.com" 
                  className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors break-all"
                >
                  developer.anuragsrivastav@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-secondary/50 rounded-lg">
              <div className="p-2 md:p-3 bg-accent/20 rounded-full flex-shrink-0">
                <Phone className="h-4 w-4 md:h-6 md:w-6 text-accent" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm md:text-base">Phone</p>
                <a 
                  href="tel:+918851800230" 
                  className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  +91 8851800230
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-secondary/50 rounded-lg">
              <div className="p-2 md:p-3 bg-primary/20 rounded-full flex-shrink-0">
                <MapPin className="h-4 w-4 md:h-6 md:w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm md:text-base">Location</p>
                <p className="text-xs md:text-sm text-muted-foreground">New Delhi, India</p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-secondary/50 rounded-lg">
              <div className="p-2 md:p-3 bg-accent/20 rounded-full flex-shrink-0">
                <Github className="h-4 w-4 md:h-6 md:w-6 text-accent" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm md:text-base">GitHub</p>
                <a 
                  href="https://github.com/anuragsrivastav" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  @anuragsrivastav
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-primary text-white border-0 glow-effect text-sm md:text-base"
              asChild
            >
              <a href="mailto:developer.anuragsrivastav@gmail.com">
                <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Send Email
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-accent/50 hover:bg-accent/10 text-sm md:text-base"
              asChild
            >
              <a 
                href="https://linkedin.com/in/anuragsrivastav" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
