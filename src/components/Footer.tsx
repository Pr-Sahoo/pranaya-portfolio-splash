
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <a href="#home" className="text-theme-accent font-bold text-2xl">
              <span>P</span>
              <span>R</span>
              <span>S</span>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              © {currentYear} Pranaya Ranjan Sahoo. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Fullstack Web Developer
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            Designed & Built with <span className="text-theme-accent">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
