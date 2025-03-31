
import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Pr-Sahoo",
      icon: <Github className="h-6 w-6" />,
      color: "hover:text-github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pr-s-35862722b/",
      icon: <Linkedin className="h-6 w-6" />,
      color: "hover:text-linkedin",
    },
    {
      name: "Twitter",
      url: "https://x.com/pranayaranjan49",
      icon: <Twitter className="h-6 w-6" />,
      color: "hover:text-twitter",
    },
    {
      name: "Email",
      url: "mailto:pranayaranjan4@gmail.com",
      icon: <Mail className="h-6 w-6" />,
      color: "hover:text-email",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-theme-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-theme-accent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold text-theme-accent mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-theme-accent/20 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-theme-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:pranayaranjan4@gmail.com" className="text-theme-text hover:text-theme-accent transition-colors">
                    pranayaranjan4@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-theme-accent/20 p-2 rounded-full">
                  <Github className="h-5 w-5 text-theme-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a href="https://github.com/Pr-Sahoo" target="_blank" rel="noopener noreferrer" className="text-theme-text hover:text-theme-accent transition-colors">
                    github.com/Pr-Sahoo
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-theme-accent/20 p-2 rounded-full">
                  <Linkedin className="h-5 w-5 text-theme-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/pr-s-35862722b/" target="_blank" rel="noopener noreferrer" className="text-theme-text hover:text-theme-accent transition-colors">
                    linkedin.com/in/pr-s-35862722b
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-theme-accent/20 p-2 rounded-full">
                  <Twitter className="h-5 w-5 text-theme-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Twitter</p>
                  <a href="https://x.com/pranayaranjan49" target="_blank" rel="noopener noreferrer" className="text-theme-text hover:text-theme-accent transition-colors">
                    x.com/pranayaranjan49
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold text-theme-accent mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-theme-text focus:outline-none focus:ring-2 focus:ring-theme-accent"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-theme-text focus:outline-none focus:ring-2 focus:ring-theme-accent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-theme-text focus:outline-none focus:ring-2 focus:ring-theme-accent"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="button-gradient w-full py-3 rounded-lg text-white font-medium shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-300 transition-colors ${link.color}`}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
