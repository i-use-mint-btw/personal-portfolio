import { useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/home/hero-section";
import ProjectCard from "@/components/home/project-card";
import SkillBar from "@/components/home/skill-bar";
import ContactForm from "@/components/home/contact-form";
import { projects } from "@/data/projects";
import { frontendSkills, backendSkills, tools } from "@/data/skills";
import { ChevronRight, Briefcase, GraduationCap, Github, Linkedin, Twitter, FileText, Mail, MapPin, Zap, Code, GitBranch, Smartphone, Accessibility, Gauge } from "lucide-react";

const Home = () => {
  // Get featured projects (first 3)
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-16 h-1 bg-primary dark:bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get to know more about me, my background, and what drives me as a developer.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800" 
                alt="Developer working on code" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-primary dark:text-primary">My Journey</h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I began my coding journey 6 years ago, starting with HTML and CSS before diving into JavaScript and modern frameworks. After completing my Computer Science degree, I've worked with startups and enterprise companies to build scalable web applications.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                My passion lies in creating elegant solutions to complex problems. I enjoy the entire development process, from planning and design to implementation and deployment. When I'm not coding, you'll find me contributing to open-source projects or learning new technologies.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-bold mb-2 text-lg flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-secondary dark:text-secondary" />
                    Education
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mt-1 mr-2">•</span>
                      <span>BSc in Computer Science, Tech University</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-2">•</span>
                      <span>Full Stack Web Development Bootcamp</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2 text-lg flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-secondary dark:text-secondary" />
                    Experience
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mt-1 mr-2">•</span>
                      <span>Sr. Frontend Developer at TechCorp</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-2">•</span>
                      <span>Full Stack Developer at StartupX</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
                >
                  <Twitter className="h-4 w-4" /> Twitter
                </a>
                <a 
                  href="#" 
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" /> Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-2">Projects</h2>
            <div className="w-16 h-1 bg-primary dark:bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Check out some of my recent work. Each project showcases different skills and technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button 
              asChild
              className="inline-flex items-center bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90"
            >
              <Link href="/projects">
                View All Projects <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-2">Skills & Expertise</h2>
            <div className="w-16 h-1 bg-primary dark:bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are the technologies and tools I've worked with throughout my career.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
                Frontend Development
              </h3>
              
              <div className="space-y-5">
                {frontendSkills.map((skill) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill}
                    categoryColor="bg-primary dark:bg-primary"
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
                Backend Development
              </h3>
              
              <div className="space-y-5">
                {backendSkills.map((skill) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill}
                    categoryColor="bg-secondary dark:bg-secondary"
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
              Tools & Technologies
            </h3>
            
            <div className="flex flex-wrap gap-4">
              {tools.map((tool, index) => {
                // Render the appropriate icon based on the tool name
                let IconComponent;
                switch(tool.icon) {
                  case 'github': IconComponent = Github; break;
                  case 'docker': IconComponent = Code; break;
                  case 'aws': IconComponent = Code; break;
                  case 'figma': IconComponent = Code; break;
                  case 'code': IconComponent = Code; break;
                  case 'jira': IconComponent = Code; break;
                  case 'git-branch': IconComponent = GitBranch; break;
                  case 'smartphone': IconComponent = Smartphone; break;
                  case 'accessibility': IconComponent = Accessibility; break;
                  case 'gauge': IconComponent = Gauge; break;
                  default: IconComponent = Code;
                }
                
                return (
                  <div key={index} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center">
                    <span className="mr-2">
                      <IconComponent className="h-5 w-5 text-primary dark:text-primary" />
                    </span>
                    <span>{tool.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
            <div className="w-16 h-1 bg-primary dark:bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have a project in mind or just want to chat? Feel free to reach out using the form below.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-2/5">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-primary dark:text-primary">Contact Information</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-primary dark:text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-gray-600 dark:text-gray-300">john.dev@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-primary dark:text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                      <Zap className="h-5 w-5 text-primary dark:text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Availability</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        Available for freelance
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mt-8 mb-4">Connect With Me</h3>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
