// import React from 'react';
// import { Trophy } from 'lucide-react';
// import { achievements } from '../data';

// export default function Achievements() {
//   return (
//     <section id="achievements" className="py-20">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
//           Achievements & Activities
//         </h2>
//         <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
//           {achievements.map((achievement, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//             >
//               <div className="flex items-start">
//                 <Trophy className="text-yellow-500 mr-4 flex-shrink-0" size={24} />
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
//                     {achievement.title}
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     {achievement.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React from 'react';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { achievements } from '../data';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const tapEffect = {
  tap: {
    scale: 0.95,
    background: 'linear-gradient(135deg, rgba(255, 0, 128, 0.15), rgba(0, 128, 255, 0.15))',
    boxShadow: '0px 0px 15px rgba(255, 0, 128, 0.5)',
  },
};

export default function Achievements() {
  return (
    <motion.section id="achievements" className="py-20" initial="hidden" animate="visible">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          whileHover={{ scale: 1.1, textShadow: '0px 0px 10px rgba(128, 0, 255, 0.8)' }}
        >
          Achievements & Activities
        </motion.h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ boxShadow: '0px 0px 20px rgba(128, 0, 255, 0.6)', scale: 1.05 }}
              {...tapEffect}
            >
              <div className="flex items-start">
                <Trophy className="text-yellow-500 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

