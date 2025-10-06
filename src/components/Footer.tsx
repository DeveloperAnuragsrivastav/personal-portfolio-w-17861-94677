import { Github, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="py-6 md:py-8 px-4 border-t border-primary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs md:text-sm text-center md:text-left">© 2025 Anurag Srivastav.</p>
          
          <div className="flex gap-3 md:gap-4">
            <a href="https://github.com/anuragsrivastav" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors">
              <Github className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a href="https://linkedin.com/in/anuragsrivastav" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors">
              <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a href="mailto:developer.anuragsrivastav@gmail.com" className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors">
              <Mail className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;