
import React from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product listings, cart functionality, and user authentication.",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      githubUrl: "https://github.com/Pr-Sahoo",
      liveUrl: "https://yourproject.vercel.app",
      imageUrl: "https://placehold.co/600x400/1DB954/FFFFFF/png?text=E-Commerce+App",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team workspaces.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/Pr-Sahoo",
      imageUrl: "https://placehold.co/600x400/1DB954/FFFFFF/png?text=Task+App",
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that provides current and forecasted weather information for any location.",
      technologies: ["JavaScript", "API Integration", "CSS"],
      githubUrl: "https://github.com/Pr-Sahoo",
      liveUrl: "https://yourproject.vercel.app",
      imageUrl: "https://placehold.co/600x400/1DB954/FFFFFF/png?text=Weather+App",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black relative">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-theme-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-gradient-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-theme-accent mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card overflow-hidden group">
              {project.imageUrl && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-theme-accent">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-theme-accent/10 text-theme-accent px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-theme-accent transition-colors"
                  >
                    <Github size={18} className="mr-1" />
                    <span className="text-sm">Code</span>
                  </a>
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-theme-accent transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://github.com/Pr-Sahoo" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 button-gradient px-6 py-2 rounded-full text-white"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
