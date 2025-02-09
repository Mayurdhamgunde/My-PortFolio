// import React from 'react';
// import { skills } from '../data';

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
//           Skills & Technologies
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//             >
//               <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
//                 {skill.category}
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {skill.technologies.map((tech, techIndex) => (
//                   <span
//                     key={techIndex}
//                     className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from 'react';
// import { motion } from 'framer-motion';
// import { skills } from '../data';

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20">
//       <div className="container mx-auto px-6">
//         <motion.h2
//           className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Skills & Technologies
//         </motion.h2>

//         <motion.div
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: {
//                 staggerChildren: 0.2,
//               },
//             },
//           }}
//         >
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
//               whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(0, 255, 255, 0.6)' }}
//               variants={{
//                 hidden: { opacity: 0, y: 50 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ duration: 0.6 }}
//             >
//               <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
//                 {skill.category}
//               </h3>
//               <motion.div className="flex flex-wrap gap-2">
//                 {skill.technologies.map((tech, techIndex) => (
//                   <motion.span
//                     key={techIndex}
//                     className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     {tech}
//                   </motion.span>
//                 ))}
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(0, 255, 255, 0.6)' }}
              whileTap={{ scale: 0.95, boxShadow: '0px 0px 10px rgba(0, 128, 255, 0.6)' }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {skill.category}
              </h3>
              <motion.div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
