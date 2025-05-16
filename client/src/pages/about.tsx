import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Github, Linkedin, Twitter, FileText } from "lucide-react";

const About = () => {
  return (
    <main className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h1>
            <motion.div 
              className="w-16 h-1 bg-primary dark:bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Learn more about my journey, experience, and what drives me as a developer.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800" 
                alt="Developer portrait" 
                className="rounded-lg shadow-lg w-full"
              />
              
              <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary dark:text-primary">Connect With Me</h3>
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
            </motion.div>
            
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary dark:text-primary">My Story</h2>
              
              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed">
                  Hello! I'm John, a passionate full-stack developer with over 6 years of experience in building web applications. My journey into the world of programming began during my college years when I was introduced to HTML and CSS. What started as a hobby quickly turned into a passion as I discovered the power of bringing ideas to life through code.
                </p>
                
                <p className="leading-relaxed">
                  After completing my Bachelor's degree in Computer Science, I joined a startup where I had the opportunity to work on diverse projects and technologies. This experience was invaluable as it allowed me to wear multiple hats and understand the entire development lifecycle.
                </p>
                
                <p className="leading-relaxed">
                  As my career progressed, I developed a deep interest in building scalable and performant web applications. I'm particularly passionate about creating intuitive user interfaces and implementing clean, maintainable backend architectures. I believe that good code is not just about functionality but also about readability, maintainability, and scalability.
                </p>
                
                <p className="leading-relaxed">
                  When I'm not coding, you can find me contributing to open-source projects, mentoring junior developers, or exploring new technologies. I'm a firm believer in continuous learning and staying updated with the latest industry trends.
                </p>
              </div>
              
              <div className="mt-10 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-secondary dark:text-secondary" />
                    Education
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-primary dark:border-primary pl-4 pb-8">
                      <h4 className="font-bold">BSc in Computer Science</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Tech University, 2012 - 2016</p>
                      <p className="mt-2 text-gray-700 dark:text-gray-300">
                        Specialized in software engineering with a focus on web technologies.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-primary dark:border-primary pl-4">
                      <h4 className="font-bold">Full Stack Web Development Bootcamp</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Code Academy, 2017</p>
                      <p className="mt-2 text-gray-700 dark:text-gray-300">
                        Intensive 12-week program focused on modern JavaScript frameworks.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-secondary dark:text-secondary" />
                    Experience
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-secondary dark:border-secondary pl-4 pb-8">
                      <h4 className="font-bold">Senior Frontend Developer</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">TechCorp, 2020 - Present</p>
                      <p className="mt-2 text-gray-700 dark:text-gray-300">
                        Lead the frontend team in building responsive and accessible web applications. Implemented design systems and improved performance metrics.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-secondary dark:border-secondary pl-4">
                      <h4 className="font-bold">Full Stack Developer</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">StartupX, 2017 - 2020</p>
                      <p className="mt-2 text-gray-700 dark:text-gray-300">
                        Developed and maintained multiple web applications from conception to deployment. Worked with React, Node.js, and MongoDB.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">My Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Code</h3>
              <p className="text-gray-700 dark:text-gray-300">
                I believe in writing clean, maintainable code that follows best practices and is well-documented. Quality is never an accident; it's always the result of intelligent effort.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary dark:text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The tech industry evolves rapidly, and I'm committed to staying up-to-date with the latest trends and technologies. I dedicate time each week to learning something new.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-700 dark:text-gray-300">
                I thrive in collaborative environments where ideas are shared freely. I value open communication, constructive feedback, and the diverse perspectives that team members bring.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
