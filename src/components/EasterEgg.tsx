import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const EasterEgg = () => {
  const [clickCount, setClickCount] = useState(0);
  const { toast } = useToast();

  const handleLogoClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 5) {
      toast({
        title: "🎉 Easter Egg Found!",
        description: "You discovered the secret! Anurag appreciates curious minds like yours.",
        duration: 5000,
      });
      
      // Reset counter after discovery
      setTimeout(() => setClickCount(0), 5000);
      
      // Add confetti effect
      const confetti = document.createElement('div');
      confetti.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
      `;
      confetti.innerHTML = '🎊'.repeat(50);
      document.body.appendChild(confetti);
      
      setTimeout(() => document.body.removeChild(confetti), 3000);
    }
  };

  // Attach to logo via event delegation
  if (typeof window !== 'undefined') {
    const logo = document.querySelector('img[alt="Logo"]');
    if (logo && !logo.hasAttribute('data-easter-egg')) {
      logo.setAttribute('data-easter-egg', 'true');
      logo.addEventListener('click', handleLogoClick);
    }
  }

  return null;
};

export default EasterEgg;
