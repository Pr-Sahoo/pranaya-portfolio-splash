
import React from "react";

interface Skill {
  category: string;
  items: string[];
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      category: "Languages",
      items: ["JavaScript", "HTML", "CSS", "Python"],
    },
    {
      category: "Frontend",
      items: ["React.js", "Redux", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js"],
    },
    {
      category: "Databases",
      items: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      category: "Deployment",
      items: ["Git", "GitHub", "Vercel", "Netlify", "Render", "Firebase"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-theme-dark relative">
      {/* Background elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-theme-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-theme-accent mb-4">
            My Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-theme-accent mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-white/10 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-theme-accent mb-6">
            My Development Process
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="glass-card p-5 w-64 text-center">
              <div className="text-4xl font-bold text-theme-accent mb-2">01</div>
              <h4 className="text-xl font-medium mb-2">Planning</h4>
              <p className="text-gray-300 text-sm">Research and create a strategic roadmap</p>
            </div>
            
            <div className="glass-card p-5 w-64 text-center">
              <div className="text-4xl font-bold text-theme-accent mb-2">02</div>
              <h4 className="text-xl font-medium mb-2">Design</h4>
              <p className="text-gray-300 text-sm">Create intuitive and engaging user interfaces</p>
            </div>
            
            <div className="glass-card p-5 w-64 text-center">
              <div className="text-4xl font-bold text-theme-accent mb-2">03</div>
              <h4 className="text-xl font-medium mb-2">Development</h4>
              <p className="text-gray-300 text-sm">Clean, efficient and well-structured code</p>
            </div>
            
            <div className="glass-card p-5 w-64 text-center">
              <div className="text-4xl font-bold text-theme-accent mb-2">04</div>
              <h4 className="text-xl font-medium mb-2">Testing</h4>
              <p className="text-gray-300 text-sm">Ensure functionality and performance</p>
            </div>
            
            <div className="glass-card p-5 w-64 text-center">
              <div className="text-4xl font-bold text-theme-accent mb-2">05</div>
              <h4 className="text-xl font-medium mb-2">Deployment</h4>
              <p className="text-gray-300 text-sm">Launch and maintain the application</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
