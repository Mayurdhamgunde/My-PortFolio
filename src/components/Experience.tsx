// import React from 'react';
// import { Briefcase, Calendar, ArrowUpRight } from 'lucide-react';
// import { motion } from 'framer-motion';

// const experiences = [
//     {
//       role: "Software Development Intern",
//       company: "Gemburg",
//       period: "February 2025 - Present",
//       description: `
//    Working on full-stack development using modern technologies and cloud solutions.
//    Building and optimizing full-stack React Native applications.
//    Specializing in building scalable applications and implementing cloud-based architectures.
//    Configuring and managing Microsoft Azure services for cloud-based deployment.
//    Collaborating with cross-functional teams to integrate modern technologies development workflows.
//   `,
//       technologies: ["React Native", "Microsoft Azure", "TypeScript", "Node.js"],
//     },
//   ];

// export default function Experience() {
//   return (
//     <section id="experience" className="py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
//           Experience
//         </h2>
        
//         <div className="relative max-w-4xl mx-auto">
//           {/* Timeline Vertical Line with glow */}
//           <div className="absolute left-6 sm:left-10 w-1 bg-blue-500 dark:bg-blue-400 h-full shadow-lg shadow-blue-300 dark:shadow-blue-800"></div>
          
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.3 }}
//               className="relative mb-16 flex flex-col md:flex-row items-start md:items-center group"
//             >
//               {/* Timeline Dot with pulse animation */}
//               <div className="absolute left-6 sm:left-10 w-10 h-10 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center shadow-xl shadow-blue-300 dark:shadow-blue-800 z-10 animate-pulse">
//                 <Briefcase className="text-white w-6 h-6" />
//               </div>
              
//               {/* Experience Card with hover glow effect */}
//               <div className="relative ml-20 sm:ml-24 p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/50 dark:hover:shadow-blue-400/50 transition-shadow duration-300 w-full">
//                 <div className="relative">
//                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
//                     <div className="flex-1">
//                       <div className="flex items-center gap-3 mb-2">
//                         <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
//                           {exp.role}
//                         </h3>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
//                           <a href="https://www.gemburg.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{exp.company}</a>
//                         </span>
//                         <ArrowUpRight className="w-4 h-4 text-gray-400" />
//                       </div>
//                     </div>
//                     <div className="flex items-center px-4 py-2 bg-blue-600/10 dark:bg-blue-400/10 rounded-2xl">
//                       <Calendar className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
//                       <span className="font-medium text-blue-600 dark:text-blue-400">
//                         {exp.period}
//                       </span>
//                     </div>
//                   </div>

//                   <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
//                     {exp.description}
//                   </p>

//                   <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
//                     Technologies & Tools
//                   </h4>
//                   <div className="flex flex-wrap gap-3">
//                     {exp.technologies.map((tech) => (
//                       <motion.span
//                         key={tech}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.3 }}
//                         className="relative px-4 py-2 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-blue-400/50 transition-shadow"
//                       >
//                         <span className="relative z-10 text-sm font-medium text-gray-700 dark:text-gray-300">
//                           {tech}
//                         </span>
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from 'react';
// import { Briefcase, Calendar, ArrowUpRight } from 'lucide-react';
// import { motion } from 'framer-motion';

// const experiences = [
//     {
//       role: "Software Development Intern",
//       company: "Gemburg",
//       period: "February 2025 - Present",
//       description: "Working on full-stack development using modern technologies and cloud solutions. Building and optimizing full-stack React Native applications. Specializing in building scalable applications and implementing cloud-based architectures. Configuring and managing Microsoft Azure services for cloud-based deployment. Collaborating with cross-functional teams to integrate modern technologies development workflows.",
//       technologies: ["React Native", "Microsoft Azure", "TypeScript", "Node.js"],
//     },
//   ];

// export default function Experience() {
//   return (
//     <section id="experience" className="py-8 sm:py-16 px-3 sm:px-6 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white">
//           Experience
//         </h2>
        
//         <div className="relative max-w-4xl mx-auto">
//           {/* Timeline Vertical Line with glow */}
//           <div className="absolute left-4 sm:left-10 w-0.5 sm:w-1 bg-blue-500 dark:bg-blue-400 h-full shadow-lg shadow-blue-300 dark:shadow-blue-800"></div>
          
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.3 }}
//               className="relative mb-8 sm:mb-16 flex flex-col items-start group"
//             >
//               {/* Timeline Dot with pulse animation */}
//               <div className="absolute left-4 sm:left-10 w-8 sm:w-10 h-8 sm:h-10 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center shadow-xl shadow-blue-300 dark:shadow-blue-800 z-10 animate-pulse">
//                 <Briefcase className="text-white w-4 h-4 sm:w-6 sm:h-6" />
//               </div>
              
//               {/* Experience Card with hover glow effect */}
//               <div className="relative ml-16 sm:ml-24 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/50 dark:hover:shadow-blue-400/50 transition-shadow duration-300 w-full">
//                 <div className="relative">
//                   <div className="flex flex-col gap-3 mb-4">
//                     <div className="flex-1">
//                       <div className="flex items-start sm:items-center gap-2 mb-2 flex-wrap">
//                         <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
//                           {exp.role}
//                         </h3>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <span className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
//                           <a href="https://www.gemburg.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{exp.company}</a>
//                         </span>
//                         <ArrowUpRight className="w-4 h-4 text-gray-400" />
//                       </div>
//                     </div>
//                     <div className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600/10 dark:bg-blue-400/10 rounded-xl sm:rounded-2xl w-fit">
//                       <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600 dark:text-blue-400" />
//                       <span className="text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400">
//                         {exp.period}
//                       </span>
//                     </div>
//                   </div>

//                   <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
//                     {exp.description}
//                   </p>

//                   <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">
//                     Technologies & Tools
//                   </h4>
//                   <div className="flex flex-wrap gap-2 sm:gap-3">
//                     {exp.technologies.map((tech) => (
//                       <motion.span
//                         key={tech}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.3 }}
//                         className="relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-blue-400/50 transition-shadow"
//                       >
//                         <span className="relative z-10 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
//                           {tech}
//                         </span>
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { Briefcase, Calendar, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
    {
      role: "Software Development Intern",
      company: "Gemburg",
      period: "February 2025 - Present",
      description: "Working on full-stack development using modern technologies and cloud solutions. Building and optimizing full-stack React Native applications. Specializing in building scalable applications and implementing cloud-based architectures. Configuring and managing Microsoft Azure services for cloud-based deployment. Collaborating with cross-functional teams to integrate modern technologies development workflows.",
      technologies: ["React Native", "Microsoft Azure", "TypeScript", "Node.js"],
    },
  ];

export default function Experience() {
  return (
    <section id="experience" className="py-6 sm:py-12 px-2 sm:px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-screen-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 text-gray-900 dark:text-white">
          Experience
        </h2>
        
        <div className="relative mx-auto">
          {/* Timeline Vertical Line with glow */}
          <div className="absolute left-3 sm:left-8 w-0.5 bg-blue-500 dark:bg-blue-400 h-full"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="relative mb-6 sm:mb-12 flex flex-col items-start group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-2 sm:left-7 w-6 sm:w-8 h-6 sm:h-8 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center z-10">
                <Briefcase className="text-white w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              
              {/* Experience Card */}
              <div className="ml-12 sm:ml-20 p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-[calc(100%-3rem)] sm:w-[calc(100%-5rem)]">
                <div>
                  {/* Header Section */}
                  <div className="flex flex-col gap-2 mb-3">
                    {/* Role and Company */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
                          {exp.company}
                        </span>
                        <ArrowUpRight className="w-3 h-3 text-gray-400" />
                      </div>
                    </div>
                    
                    {/* Period */}
                    <div className="inline-flex items-center px-2 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-md w-fit">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 text-blue-600 dark:text-blue-400" />
                      <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}