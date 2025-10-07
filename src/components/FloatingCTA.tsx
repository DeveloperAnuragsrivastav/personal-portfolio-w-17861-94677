import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={handleClick}
          className="fixed bottom-6 right-6 md:right-8 z-40 rounded-full shadow-2xl bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-6 glow-effect animate-fade-in group"
          aria-label="Let's connect"
        >
          <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
          <span className="font-semibold">Let's Connect</span>
        </Button>
      )}
    </>
  );
};

export default FloatingCTA;
