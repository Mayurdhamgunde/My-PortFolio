// import React from 'react';
// import { GraduationCap, Award, Users } from 'lucide-react';
// import { motion, useAnimation } from 'framer-motion';
// import { useEffect } from 'react';

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
// };

// export default function About() {
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start({ opacity: 1, y: 0 });
//   }, [controls]);

//   return (
//     <motion.section
//       id="about"
//       className="py-20 bg-gray-50 dark:bg-gray-800/50"
//       initial={{ opacity: 0, y: 50 }}
//       animate={controls}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="container mx-auto px-6">
//         <motion.h2
//           className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
//           whileHover={{ textShadow: '0px 0px 10px rgba(128, 0, 255, 0.8)', scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           About Me
//         </motion.h2>
//         <div className="max-w-3xl mx-auto">
//           <motion.p
//             className="text-lg text-gray-600 dark:text-gray-300 mb-8"
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             I'm a passionate Software Engineer specializing in Full-Stack Development, Machine Learning, and Blockchain
//             technologies. With a strong foundation in problem-solving and a commitment to continuous learning, I strive to
//             create innovative solutions that make a difference.
//           </motion.p>

//           <div className="grid md:grid-cols-2 gap-8 mb-8">
//             <motion.div
//               className="bg-dark white:bg-gray-800 p-6 rounded-lg shadow-md"
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               whileHover={{ boxShadow: '0px 0px 20px rgba(128, 0, 255, 0.6)', scale: 1.05, background: 'linear-gradient(135deg, rgba(128, 0, 255, 0.15), rgba(0, 128, 255, 0.15))' }}
//               whileTap={{ scale: 0.95 }}
//               onTouchStart={(e) => {
//                 e.currentTarget.style.transform = 'scale(1.05)';
//                 e.currentTarget.style.boxShadow = '0px 0px 15px rgba(128, 0, 255, 0.8)';
//               }}
//               onTouchEnd={(e) => {
//                 e.currentTarget.style.transform = 'scale(1)';
//                 e.currentTarget.style.boxShadow = 'none';
//               }}
//             >
//               <div className="flex items-center mb-4">
//                 <GraduationCap className="text-blue-600 mr-3" size={24} />
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
//               </div>
//               <div className="space-y-4">
//                 <div>
//                   <p className="font-semibold text-gray-900 dark:text-white">B.Tech in Computer Engineering</p>
//                   <p className="text-gray-600 dark:text-gray-300">BMIT, Solapur (2021–2025)</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-900 dark:text-white">Higher Secondary Certificate</p>
//                   <p className="text-gray-600 dark:text-gray-300">Ad Joshi Junior College, Solapur (2021)</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-900 dark:text-white">Secondary School Certificate</p>
//                   <p className="text-gray-600 dark:text-gray-300">St. Thomas English Medium School, Solapur (2019)</p>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               className="bg-dark white:bg-gray-800 p-6 rounded-lg shadow-md"
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               whileHover={{ boxShadow: '0px 0px 20px rgba(128, 0, 255, 0.6)', scale: 1.05, background: 'linear-gradient(135deg, rgba(128, 0, 255, 0.15), rgba(0, 128, 255, 0.15))' }}
//               whileTap={{ scale: 0.95 }}
//               onTouchStart={(e) => {
//                 e.currentTarget.style.transform = 'scale(1.05)';
//                 e.currentTarget.style.boxShadow = '0px 0px 15px rgba(128, 0, 255, 0.8)';
//               }}
//               onTouchEnd={(e) => {
//                 e.currentTarget.style.transform = 'scale(1)';
//                 e.currentTarget.style.boxShadow = 'none';
//               }}
//             >
//               <div className="flex items-center mb-4">
//                 <Award className="text-blue-600 mr-3" size={24} />
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Certifications</h3>
//               </div>
//               <ul className="text-gray-600 dark:text-gray-300 space-y-2">
//                 <li>Microsoft Certified: Azure Fundamentals</li>
//                 <li>Udemy: Complete 2024 Web Development Bootcamp</li>
//                 <li>IBM: Containers & Kubernetes Essentials</li>
//                 <li>PhysicsWallah: Decode DSA with C++</li>
//               </ul>
//             </motion.div>
//           </div>

//           <motion.div
//             className="grid gap-8 mb-8"
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <motion.div
//               className="bg-dark white:bg-gray-800 p-6 rounded-lg shadow-md"
//               whileHover={{ boxShadow: '0px 0px 15px rgba(128, 0, 255, 0.8)', scale: 1.05, background: 'linear-gradient(135deg, rgba(128, 0, 255, 0.15), rgba(0, 128, 255, 0.15))' }}
//               whileTap={{ scale: 0.95 }}
//               onTouchStart={(e) => {
//                 e.currentTarget.style.transform = 'scale(1.05)';
//                 e.currentTarget.style.boxShadow = '0px 0px 15px rgba(128, 0, 255, 0.8)';
//               }}
//               onTouchEnd={(e) => {
//                 e.currentTarget.style.transform = 'scale(1)';
//                 e.currentTarget.style.boxShadow = 'none';
//               }}
//             >
//               <div className="flex items-center mb-4">
//                 <Users className="text-blue-600 mr-3" size={24} />
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Volunteering</h3>
//               </div>
//               <div className="space-y-2">
//                 <p className="font-semibold text-gray-900 dark:text-white">Project Coordinator at Simplified</p>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   Led a college-sponsored, outsourced project managing data collection, registrations, and financial
//                   accounting for 40 participants. Successfully oversaw all communications and coordination throughout
//                   the project lifecycle, ensuring its successful completion.
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             className="bg-dark white:bg-gray-800 p-6 rounded-lg shadow-md"
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             whileHover={{ boxShadow: '0px 0px 20px rgba(128, 0, 255, 0.6)', scale: 1.05, background: 'linear-gradient(135deg, rgba(128, 0, 255, 0.15), rgba(0, 128, 255, 0.15))' }}
//             whileTap={{ scale: 0.95 }}
//             onTouchStart={(e) => {
//               e.currentTarget.style.transform = 'scale(1.05)';
//               e.currentTarget.style.boxShadow = '0px 0px 15px rgba(128, 0, 255, 0.8)';
//             }}
//             onTouchEnd={(e) => {
//               e.currentTarget.style.transform = 'scale(1)';
//               e.currentTarget.style.boxShadow = 'none';
//             }}
//           >
//             <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Strengths</h3>
//             <ul className="grid md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
//               {['Problem-solving', 'Leadership', 'Teamwork', 'Continuous Learning'].map((strength) => (
//                 <motion.li
//                   key={strength}
//                   className="flex items-center"
//                   whileHover={{ scale: 1.1, x: 10 }}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.2 }}
//                   whileTap={{ scale: 0.9 }}
//                   onTouchStart={(e) => {
//                     e.currentTarget.style.transform = 'scale(1.1)';
//                     e.currentTarget.style.boxShadow = '0px 0px 15px rgba(128, 0, 255, 0.8)';
//                   }}
//                   onTouchEnd={(e) => {
//                     e.currentTarget.style.transform = 'scale(1)';
//                     e.currentTarget.style.boxShadow = 'none';
//                   }}
//                 >
//                   <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
//                   {strength}
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// }


import React from 'react';
import { GraduationCap, Award, Users } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800/50"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          whileHover={{ textShadow: '0px 0px 10px rgba(128, 0, 255, 0.8)', scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          About Me
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            I'm a passionate Software Engineer specializing in Full-Stack Development, Machine Learning, and Blockchain
            technologies. With a strong foundation in problem-solving and a commitment to continuous learning, I strive to
            create innovative solutions that make a difference.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {[{
              icon: <GraduationCap className="text-blue-600 mr-3" size={24} />, 
              title: 'Education',
              content: [
                { heading: 'B.Tech in Computer Engineering', subtext: 'BMIT, Solapur (2021–2025)' },
                { heading: 'Higher Secondary Certificate', subtext: 'Ad Joshi Junior College, Solapur (2021)' },
                { heading: 'Secondary School Certificate', subtext: 'St. Thomas English Medium School, Solapur (2019)' }
              ]
            }, {
              icon: <Award className="text-blue-600 mr-3" size={24} />, 
              title: 'Certifications',
              content: ['Microsoft Certified: Azure Fundamentals', 'Udemy: Complete 2024 Web Development Bootcamp', 'IBM: Containers & Kubernetes Essentials', 'PhysicsWallah: Decode DSA with C++']
            }].map((card, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg dark:shadow-gray-900"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ boxShadow: '0px 0px 25px rgba(128, 0, 255, 0.7)', scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center mb-4">
                  {card.icon}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{card.title}</h3>
                </div>
                {Array.isArray(card.content) ? (
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                    {card.content.map((item, idx) => (
                      typeof item === 'string' ? (
                        <li key={idx}>{item}</li>
                      ) : (
                        <div key={idx}>
                          <p className="font-semibold text-gray-900 dark:text-white">{item.heading}</p>
                          <p className="text-gray-600 dark:text-gray-300">{item.subtext}</p>
                        </div>
                      )
                    ))}
                  </ul>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// ----------------------------------------------------------------------------

// import React from 'react';
// import { GraduationCap, Award, Users } from 'lucide-react';
// import { motion, useAnimation } from 'framer-motion';
// import { useEffect } from 'react';

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
// };

// export default function About() {
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start({ opacity: 1, y: 0 });
//   }, [controls]);

//   return (
//     <motion.section
//       id="about"
//       className="py-20 bg-gray-50 dark:bg-gray-800/50"
//       initial={{ opacity: 0, y: 50 }}
//       animate={controls}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="container mx-auto px-6">
//         <motion.h2
//           className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
//           whileHover={{ textShadow: '0px 0px 10px rgba(128, 0, 255, 0.8)', scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           About Me
//         </motion.h2>
//         <div className="max-w-3xl mx-auto">
//           <motion.p
//             className="text-lg text-gray-600 dark:text-gray-300 mb-8"
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             I'm a passionate Software Engineer specializing in Full-Stack Development, Machine Learning, and Blockchain
//             technologies. With a strong foundation in problem-solving and a commitment to continuous learning, I strive to
//             create innovative solutions that make a difference.
//           </motion.p>

//           <div className="grid md:grid-cols-2 gap-8 mb-8">
//             {[{
//               icon: <GraduationCap className="text-blue-600 mr-3" size={24} />, 
//               title: 'Education',
//               content: [
//                 { heading: 'B.Tech in Computer Engineering', subtext: 'BMIT, Solapur (2021–2025)' },
//                 { heading: 'Higher Secondary Certificate', subtext: 'Ad Joshi Junior College, Solapur (2021)' },
//                 { heading: 'Secondary School Certificate', subtext: 'St. Thomas English Medium School, Solapur (2019)' }
//               ]
//             }, {
//               icon: <Award className="text-blue-600 mr-3" size={24} />, 
//               title: 'Certifications',
//               content: ['Microsoft Certified: Azure Fundamentals', 'Udemy: Complete 2024 Web Development Bootcamp', 'IBM: Containers & Kubernetes Essentials', 'PhysicsWallah: Decode DSA with C++']
//             }, {
//               icon: <Users className="text-blue-600 mr-3" size={24} />, 
//               title: 'Volunteering',
//               content: [
//                 { heading: 'Project Coordinator at Simplified', subtext: 'Led a college-sponsored, outsourced project managing data collection, registrations, and financial accounting for 40 participants. Successfully oversaw all communications and coordination throughout the project lifecycle, ensuring its successful completion.' }
//               ]
//             }].map((card, index) => (
//               <motion.div
//                 key={index}
//                 className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg dark:shadow-gray-900"
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 whileHover={{ boxShadow: '0px 0px 25px rgba(128, 0, 255, 0.7)', scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <div className="flex items-center mb-4">
//                   {card.icon}
//                   <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{card.title}</h3>
//                 </div>
//                 {Array.isArray(card.content) ? (
//                   <ul className="text-gray-600 dark:text-gray-300 space-y-2">
//                     {card.content.map((item, idx) => (
//                       typeof item === 'string' ? (
//                         <li key={idx}>{item}</li>
//                       ) : (
//                         <div key={idx}>
//                           <p className="font-semibold text-gray-900 dark:text-white">{item.heading}</p>
//                           <p className="text-gray-600 dark:text-gray-300">{item.subtext}</p>
//                         </div>
//                       )
//                     ))}
//                   </ul>
//                 ) : null}
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg dark:shadow-gray-900"
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             whileHover={{ boxShadow: '0px 0px 25px rgba(128, 0, 255, 0.7)', scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Strengths</h3>
//             <ul className="grid md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
//               {['Problem-solving', 'Leadership', 'Teamwork', 'Continuous Learning'].map((strength) => (
//                 <motion.li
//                   key={strength}
//                   className="flex items-center"
//                   whileHover={{ scale: 1.1, x: 10 }}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.2 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
//                   {strength}
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// }





// import React from 'react';
// import { GraduationCap, Award, Users } from 'lucide-react';
// import { motion, useAnimation } from 'framer-motion';
// import { useEffect } from 'react';

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
// };

// export default function About() {
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start({ opacity: 1, y: 0 });
//   }, [controls]);

//   return (
//     <motion.section
//       id="about"
//       className="py-20 bg-gray-50 dark:bg-gray-800/50"
//       initial={{ opacity: 0, y: 50 }}
//       animate={controls}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="container mx-auto px-6">
//         <motion.h2
//           className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
//           whileHover={{ textShadow: '0px 0px 10px rgba(128, 0, 255, 0.8)', scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           About Me
//         </motion.h2>
//         <div className="max-w-3xl mx-auto">
//           <motion.p
//             className="text-lg text-gray-600 dark:text-gray-300 mb-8"
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             I'm a passionate Software Engineer specializing in Full-Stack Development, Machine Learning, and Blockchain
//             technologies. With a strong foundation in problem-solving and a commitment to continuous learning, I strive to
//             create innovative solutions that make a difference.
//           </motion.p>

//           <div className="grid md:grid-cols-2 gap-8 mb-8">
//             {[{
//               icon: <GraduationCap className="text-blue-600 mr-3" size={24} />, 
//               title: 'Education',
//               content: [
//                 { heading: 'B.Tech in Computer Engineering', subtext: 'BMIT, Solapur (2021–2025)' },
//                 { heading: 'Higher Secondary Certificate', subtext: 'Ad Joshi Junior College, Solapur (2021)' },
//                 { heading: 'Secondary School Certificate', subtext: 'St. Thomas English Medium School, Solapur (2019)' }
//               ]
//             }, {
//               icon: <Award className="text-blue-600 mr-3" size={24} />, 
//               title: 'Certifications',
//               content: ['Microsoft Certified: Azure Fundamentals', 'Udemy: Complete 2024 Web Development Bootcamp', 'IBM: Containers & Kubernetes Essentials', 'PhysicsWallah: Decode DSA with C++']
//             }].map((card, index) => (
//               <motion.div
//                 key={index}
//                 className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg dark:shadow-gray-900"
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 whileHover={{ boxShadow: '0px 0px 25px rgba(128, 0, 255, 0.7)', scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <div className="flex items-center mb-4">
//                   {card.icon}
//                   <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{card.title}</h3>
//                 </div>
//                 <ul className="text-gray-600 dark:text-gray-300 space-y-2">
//                   {card.content.map((item, idx) => (
//                     typeof item === 'string' ? (
//                       <li key={idx}>{item}</li>
//                     ) : (
//                       <div key={idx}>
//                         <p className="font-semibold text-gray-900 dark:text-white">{item.heading}</p>
//                         <p className="text-gray-600 dark:text-gray-300">{item.subtext}</p>
//                       </div>
//                     )
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg dark:shadow-gray-900 md:col-span-2"
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             whileHover={{ boxShadow: '0px 0px 25px rgba(128, 0, 255, 0.7)', scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <div className="flex items-center mb-4">
//               <Users className="text-blue-600 mr-3" size={24} />
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Volunteering</h3>
//             </div>
//             <div className="mb-6">
//               <p className="font-semibold text-gray-900 dark:text-white">Project Coordinator at Simplified</p>
//               <p className="text-gray-600 dark:text-gray-300">Led a college-sponsored, outsourced project managing data collection, registrations, and financial accounting for 40 participants. Successfully oversaw all communications and coordination throughout the project lifecycle, ensuring its successful completion.</p>
//             </div>
//           </motion.div>

//           <div className="mt-6"></div>

//           <motion.div
//             className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg dark:shadow-gray-900"
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             whileHover={{ boxShadow: '0px 0px 25px rgba(128, 0, 255, 0.7)', scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Strengths</h3>
//             <ul className="grid md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
//               {['Problem-solving', 'Leadership', 'Teamwork', 'Continuous Learning'].map((strength) => (
//                 <motion.li
//                   key={strength}
//                   className="flex items-center"
//                   whileHover={{ scale: 1.1, x: 10 }}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.2 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
//                   {strength}
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// }
