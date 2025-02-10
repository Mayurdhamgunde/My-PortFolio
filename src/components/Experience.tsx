import React from 'react';
import { Briefcase, Calendar, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Gemburg",
    period: "February 2025 - Present",
    description: [
      "Working on full-stack development using modern technologies and cloud solutions",
      "Building and optimizing full-stack React Native applications",
      "Specializing in building scalable applications and implementing cloud-based architectures",
      "Configuring and managing Microsoft Azure services for cloud-based deployment",
      "Collaborating with cross-functional teams to integrate modern technologies development workflows"
    ],
    technologies: ["React Native", "Microsoft Azure", "TypeScript", "Node.js"],
  },
];

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const techBadgeVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: i => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      type: "spring",
      stiffness: 150
    }
  })
};

const bulletVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    }
  })
};

export default function Experience() {
  return (
    <section id="experience" className="py-6 sm:py-12 px-2 sm:px-4 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto max-w-screen-lg relative">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 text-gray-900 dark:text-white"
        >
          Experience
        </motion.h2>
        
        <div className="relative mx-auto">
          {/* Timeline Vertical Line with glow */}
          <div className="absolute left-3 sm:left-8 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400 h-full 
               shadow-[0_0_10px_rgba(59,130,246,0.5)] dark:shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative mb-6 sm:mb-12 flex flex-col items-start group"
            >
              {/* Timeline Dot with glow */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="absolute left-2 sm:left-7 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 
                         rounded-full flex items-center justify-center z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              >
                <Briefcase className="text-white w-3 h-3 sm:w-4 sm:h-4" />
              </motion.div>
              
              {/* Experience Card */}
              <motion.div
                variants={cardVariants}
                className="ml-12 sm:ml-20 p-3 sm:p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg 
                         shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] 
                         dark:shadow-[0_0_15px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] 
                         transition-shadow duration-300 w-[calc(100%-3rem)] sm:w-[calc(100%-5rem)]"
              >
                <div>
                  {/* Header Section */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col gap-2 mb-3"
                  >
                    {/* Role and Company */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <a 
                          href="https://gemburg.com" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {exp.company}
                        </a>
                        <ArrowUpRight className="w-3 h-3 text-gray-400" />
                      </div>
                    </div>
                    
                    {/* Period */}
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                               rounded-md w-fit border border-blue-200 dark:border-blue-800"
                    >
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 text-blue-600 dark:text-blue-400" />
                      <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400">
                        {exp.period}
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Description Bullets */}
                  <ul className="space-y-2 mb-3">
                    {exp.description.map((bullet, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={bulletVariants}
                        className="flex items-start gap-2"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div>
                    <motion.h4 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2"
                    >
                      Technologies & Tools
                    </motion.h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={tech}
                          custom={i}
                          variants={techBadgeVariants}
                          initial="hidden"
                          whileInView="visible"
                          whileHover={{ scale: 1.1 }}
                          className="px-2 py-1 text-xs rounded-md bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                                   text-gray-700 dark:text-gray-300 border border-blue-200 dark:border-blue-800 
                                   shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


