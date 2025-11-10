import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Send, Minimize2, RotateCcw, Mail, Briefcase, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import chatbotAvatar from "@/assets/chatbot-avatar.png";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const staticQA: Record<string, string> = {
  "contact": "You can reach Anurag at:\n\n**Email:** developer.anuragsrivastav@gmail.com\n**Phone:** +91 8851800230\n**LinkedIn:** anuragsrivastav\n**GitHub:** anuragsrivastav\n**Location:** New Delhi, India",

  "skills": "Anurag has expertise in:\n\n**Programming Languages:** JavaScript (ES6+), Python, PHP, TypeScript, HTML5, CSS3, SQL\n\n**Frontend:** React.js, HTML5, CSS3, Tailwind CSS, jQuery, Bootstrap, Responsive Design, PWA Development\n\n**Backend & APIs:** Node.js, Express.js, PHP, RESTful APIs, GraphQL, WebSocket, Microservices\n\n**Databases:** MySQL, MongoDB, Supabase, PhpMyAdmin, Query Optimization\n\n**AI & DevOps:** OpenAI API, n8n Workflow Automation, Docker, Ollama, Electron.js, OpenVINO, CI/CD Pipelines\n\n**Tools:** Git, GitHub, VS Code, Postman, Docker Desktop, Linux, AWS",

  "about": "Anurag Srivastav is a results-driven AI/ML Engineer and Full-Stack Developer with expertise in enterprise-level automation solutions, DevOps deployment, and cutting-edge AI technologies.\n\nHe currently works as an AI/ML Engineer at **Smartians AI** (October 2024 - Present), where he's advancing machine learning and AI integration capabilities.\n\nHe holds a **Bachelor of Computer Applications (BCA)** from Integral University (2021-2024) and is passionate about delivering high-impact AI/ML solutions that drive business efficiency and innovation.",

  "experience": "**Current Position:**\n**AI/ML Engineer at Smartians AI** (October 2024 - Present)\n- Spearheading Gignaati Workbench platform with advanced LLM integration\n- Managing production infrastructure on DigitalOcean with Ollama droplets\n- Managing stakeholder relationships with enterprise clients (HP, Intel)\n- Leading corporate website redesign (60% performance improvement)\n- Developing robust backend APIs with comprehensive testing\n\n**Previous Position:**\n**AI Automation Intern at Swaran Soft** (April 2024 - September 2024)\n- Developed Docker Automation App (85% deployment time reduction)\n- Built real-time AI voice agent with sub-200ms latency\n- Created AI-powered automation workflows for enterprise clients\n\n**Internship:**\n**MERN Stack Developer at CETPA Infotech** (January 2024 - March 2024)\n- Completed intensive MERN Stack development program\n- Built full-stack applications with MongoDB, Express.js, React.js, Node.js\n- Developed responsive interfaces with modern React hooks",

  "projects": "**1. Gignaati Docker Automation App**\nCross-platform desktop application using Electron.js for one-click setup of Docker, n8n, and Ollama with automated health checks and system monitoring.\nTech: Electron.js, Docker, n8n, Ollama, Node.js\n\n**2. AI-Powered Outreach Automation**\nHyper-personalized LinkedIn outreach system that scrapes profiles and generates story-driven executive emails with AI storytelling.\nTech: n8n, GPT-4.1, RapidAPI, Supabase, Twilio SMTP\n\n**3. Hospital Feedback Management System**\nMultilingual hospital feedback automation with sentiment analysis, department routing, and real-time notifications.\nTech: n8n AI Agents, Supabase, Google Sheets, Gmail integration",

  "education": "**Bachelor of Computer Applications (BCA)**\nIntegral University, 2021 - 2024\n\n**Relevant Coursework:**\n- Data Structures & Algorithms\n- Database Management Systems\n- Advanced Web Development\n- Software Engineering\n- Object-Oriented Programming\n\n**Key Projects:**\n- Full-Stack Web Applications\n- Database Design & Implementation\n- Software Development Life Cycle",

  "smartians": "Anurag currently works as an **AI/ML Engineer at Smartians AI** (October 2024 - Present) where he:\n\n- Spearheads Gignaati Workbench platform enhancements with LLM integration\n- Architects and manages production infrastructure on DigitalOcean\n- Manages enterprise client relationships (HP, Intel)\n- Leads corporate website redesign projects\n- Develops backend APIs with comprehensive testing frameworks\n- Delivers AI automation training programs",

  "default": "I'm Lissa, Anurag's virtual assistant. I can help you with information about:\n\n**Contact** - How to reach Anurag\n**Skills** - Technical expertise and technologies\n**Experience** - Professional work history\n**Projects** - Key projects and achievements\n**Education** - Academic background\n**About** - Professional summary\n\nJust ask me anything about Anurag's background!"
};

const findBestMatch = (query: string): string => {
  const lowerQuery = query.toLowerCase();

  if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("phone") || lowerQuery.includes("reach") || lowerQuery.includes("how to contact")) {
    return staticQA.contact;
  }
  if (lowerQuery.includes("skill") || lowerQuery.includes("technology") || lowerQuery.includes("tech stack") || lowerQuery.includes("programming") || lowerQuery.includes("technical")) {
    return staticQA.skills;
  }
  if (lowerQuery.includes("about") || lowerQuery.includes("who is") || lowerQuery.includes("background") || lowerQuery.includes("summary") || lowerQuery.includes("tell me about")) {
    return staticQA.about;
  }
  if (lowerQuery.includes("smartians") || lowerQuery.includes("current") || lowerQuery.includes("current job") || lowerQuery.includes("current position") || lowerQuery.includes("current work")) {
    return staticQA.smartians;
  }
  if (lowerQuery.includes("experience") || lowerQuery.includes("work") || lowerQuery.includes("job") || lowerQuery.includes("position") || lowerQuery.includes("employment")) {
    return staticQA.experience;
  }
  if (lowerQuery.includes("project") || lowerQuery.includes("built") || lowerQuery.includes("developed") || lowerQuery.includes("portfolio") || lowerQuery.includes("what has")) {
    return staticQA.projects;
  }
  if (lowerQuery.includes("education") || lowerQuery.includes("degree") || lowerQuery.includes("university") || lowerQuery.includes("study") || lowerQuery.includes("college")) {
    return staticQA.education;
  }

  return staticQA.default;
};

const Chatbot = () => {
  const playfulMessages = [
    "Hey! I'm Lissa, Anurag's Assistant. How can I help you today?",
    "Want to chat? Click me!",
    "Curious about Anurag? Let's talk!",
    "Don't be shy, I don't bite!",
    "I've got all the answers... Click me!",
    "Ready to chat? I'm all ears!",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm Lissa, here to help you learn about Anurag Srivastav's professional background, skills, and experience. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % playfulMessages.length);
    }, 3000);
    return () => clearInterval(messageInterval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const response = findBestMatch(input.trim());

    setMessages((prev) => [
      ...prev,
      userMessage,
      { role: "assistant", content: response }
    ]);
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    setMessages([
      {
        role: "assistant",
        content: "Hello! I'm Lissa, here to help you learn about Anurag Srivastav's professional background, skills, and experience. What would you like to know?",
      },
    ]);
    setInput("");
  };

  const handleQuickAction = (action: string) => {
    let message = "";
    switch (action) {
      case "contact":
        message = "How can I contact Anurag?";
        break;
      case "skills":
        message = "What are Anurag's technical skills?";
        break;
      case "about":
        message = "Tell me about Anurag's background and experience.";
        break;
    }
    if (message) {
      setInput(message);
    }
  };

  const renderMessage = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return <strong key={index} className="block font-semibold my-1">{line.slice(2, -2)}</strong>;
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-4">{line.slice(2)}</li>;
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return <p key={index} className="my-1">{line}</p>;
    });
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && showNotification && (
          <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 w-64 mb-2 animate-in slide-in-from-bottom-2">
            <button
              onClick={() => setShowNotification(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
            <p className="text-sm text-gray-700 dark:text-gray-300 pr-4 transition-all duration-300">
              {playfulMessages[currentMessageIndex]}
            </p>
          </div>
        )}

        {!isOpen && (
          <button
            onClick={() => {
              setIsOpen(true);
              setShowNotification(false);
            }}
            className="h-16 w-16 rounded-full shadow-lg hover:shadow-xl transition-all overflow-hidden border-4 border-white dark:border-gray-800"
          >
            <img src={chatbotAvatar} alt="Assistant" className="h-full w-full object-cover" />
          </button>
        )}
      </div>

      {isOpen && (
        <Card className="fixed bottom-0 right-0 md:bottom-6 md:right-6 w-full md:w-[380px] h-[100dvh] md:h-[600px] shadow-2xl flex flex-col z-50 overflow-hidden rounded-none md:rounded-3xl">
          <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={chatbotAvatar} alt="Assistant" className="h-10 w-10 rounded-full border-2 border-white object-cover" />
              <div>
                <h3 className="font-semibold">Lissa</h3>
                <p className="text-xs opacity-90">Online now</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                onClick={handleReset}
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-primary-foreground hover:bg-white/20"
                title="Reset chat"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-primary-foreground hover:bg-white/20"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-primary-foreground hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <ScrollArea className="flex-1 p-4 bg-gray-50 dark:bg-gray-900" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2 ${
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {message.role === "assistant" && (
                    <img src={chatbotAvatar} alt="Assistant" className="h-8 w-8 rounded-full object-cover flex-shrink-0" />
                  )}
                  <div
                    className={`max-w-[75%] rounded-2xl p-3 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-white dark:bg-gray-800 text-foreground rounded-tl-none shadow-sm"
                    }`}
                  >
                    <div className="text-sm leading-relaxed">
                      {renderMessage(message.content)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border-t">
            <div className="flex gap-2 flex-wrap">
              <Button
                onClick={() => handleQuickAction("contact")}
                variant="outline"
                size="sm"
                className="text-xs rounded-full"
              >
                <Mail className="h-3 w-3 mr-1" />
                Contact
              </Button>
              <Button
                onClick={() => handleQuickAction("skills")}
                variant="outline"
                size="sm"
                className="text-xs rounded-full"
              >
                <Briefcase className="h-3 w-3 mr-1" />
                Skills
              </Button>
              <Button
                onClick={() => handleQuickAction("about")}
                variant="outline"
                size="sm"
                className="text-xs rounded-full"
              >
                <User className="h-3 w-3 mr-1" />
                About
              </Button>
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-gray-800 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 rounded-full bg-gray-100 dark:bg-gray-900 border-0 focus-visible:ring-1 focus-visible:ring-primary px-4"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim()}
                size="icon"
                className="rounded-full h-10 w-10"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
