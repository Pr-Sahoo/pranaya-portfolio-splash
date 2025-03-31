
import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const typingElement = typingRef.current;
    if (typingElement) {
      typingElement.classList.add("typing-text");
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-theme-dark">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-theme-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-gradient-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-light text-theme-accent mb-2 animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Hi there, I'm
          </h2>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-theme-text mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <div className="typing-container">
              <div ref={typingRef}>Pranaya Ranjan Sahoo</div>
            </div>
          </h1>
          
          <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-300 mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            Fullstack Web Developer
          </h3>
          
          <div className="flex justify-center space-x-4 animate-fade-in opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <a 
              href="#contact" 
              className="button-gradient px-8 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl transform transition hover:-translate-y-1"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="bg-transparent border border-theme-accent px-8 py-3 rounded-full text-theme-accent font-medium hover:bg-theme-accent/10 transition"
            >
              My Projects
            </a>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-theme-accent animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
