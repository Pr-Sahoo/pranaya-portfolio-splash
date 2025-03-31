
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-theme-accent">
              About Me
            </h2>
            <div className="space-y-4 text-lg">
              <p>
                Hello! I'm <span className="text-theme-accent font-semibold">Pranaya Ranjan Sahoo</span>, 
                a 20-year-old passionate fullstack web developer with a keen interest in building 
                user-friendly and efficient web applications.
              </p>
              <p>
                I enjoy creating seamless experiences from front-end to back-end, and I'm always 
                eager to learn new technologies and frameworks to enhance my development skills.
              </p>
              <p>
                When I'm not coding, I'm exploring the latest tech trends, collaborating on open-source 
                projects, or improving my problem-solving skills through coding challenges.
              </p>
            </div>
            
            <div className="mt-8 flex space-x-4">
              <div className="glass-card p-4 text-center">
                <h3 className="text-xl font-bold text-theme-accent">Frontend</h3>
                <p className="text-gray-300">React.js, Redux, Tailwind CSS</p>
              </div>
              <div className="glass-card p-4 text-center">
                <h3 className="text-xl font-bold text-theme-accent">Backend</h3>
                <p className="text-gray-300">Node.js, Express.js</p>
              </div>
              <div className="glass-card p-4 text-center">
                <h3 className="text-xl font-bold text-theme-accent">Database</h3>
                <p className="text-gray-300">MongoDB, MySQL, PostgreSQL</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/5 order-1 md:order-2">
            <div className="relative">
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-gradient-accent flex items-center justify-center mx-auto overflow-hidden">
                <div className="w-56 h-56 md:w-68 md:h-68 rounded-full bg-black flex items-center justify-center text-6xl font-bold text-theme-accent">
                  PRS
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-theme-accent/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
