// import React from 'react';
// import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

// export default function Contact() {
//   return (
//     <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
//           Get In Touch
//         </h2>
//         <div className="max-w-3xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-8">
//             <a
//               href="mailto:mayurdhamgunde@gmail.com"
//               className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//             >
//               <Mail className="text-blue-600 mr-4" size={24} />
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
//                 <p className="text-gray-600 dark:text-gray-300">mayurdhamgunde@gmail.com</p>
//               </div>
//             </a>

//             <a
//               href="https://github.com/Mayurdhamgunde"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//             >
//               <Github className="text-gray-900 dark:text-white mr-4" size={24} />
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">GitHub</h3>
//                 <p className="text-gray-600 dark:text-gray-300">github.com/Mayurdhamgunde</p>
//               </div>
//             </a>

//             <a
//               href="https://linkedin.com/in/mayur-dhamgunde-94b9ab226/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//             >
//               <Linkedin className="text-blue-600 mr-4" size={24} />
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
//                 <p className="text-gray-600 dark:text-gray-300">Mayur Dhamgunde</p>
//               </div>
//             </a>

//             <a
//               href="https://twitter.com/_mayur_075"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//             >
//               <Twitter className="text-blue-400 mr-4" size={24} />
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Twitter</h3>
//                 <p className="text-gray-600 dark:text-gray-300">@_mayur_075</p>
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import React from 'react';
// import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
// import { motion } from 'framer-motion';

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
// };

// const tapEffect = {
//   tap: {
//     scale: 0.95,
//     background: 'linear-gradient(135deg, rgba(255, 0, 128, 0.25), rgba(0, 128, 255, 0.25))',
//     boxShadow: '0px 0px 25px rgba(255, 0, 128, 0.8)',
//     transition: { duration: 0.4, ease: 'easeInOut' },
//   },
// };

// export default function Contact() {
//   return (
//     <motion.section
//       id="contact"
//       className="py-20 bg-gray-50 dark:bg-gray-800/50"
//       initial="hidden"
//       animate="visible"
//     >
//       <div className="container mx-auto px-6">
//         <motion.h2
//           className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
//           whileHover={{ scale: 1.1, textShadow: '0px 0px 12px rgba(128, 0, 255, 0.9)' }}
//         >
//           Get In Touch
//         </motion.h2>
//         <div className="max-w-3xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-8">
//             {[{
//               href: 'mailto:mayurdhamgunde@gmail.com',
//               icon: Mail,
//               color: 'text-blue-600',
//               title: 'Email',
//               text: 'mayurdhamgunde@gmail.com',
//             },
//             {
//               href: 'https://github.com/Mayurdhamgunde',
//               icon: Github,
//               color: 'text-gray-900 dark:text-white',
//               title: 'GitHub',
//               text: 'github.com/Mayurdhamgunde',
//             },
//             {
//               href: 'https://linkedin.com/in/mayur-dhamgunde-94b9ab226/',
//               icon: Linkedin,
//               color: 'text-blue-600',
//               title: 'LinkedIn',
//               text: 'Mayur Dhamgunde',
//             },
//             {
//               href: 'https://twitter.com/_mayur_075',
//               icon: Twitter,
//               color: 'text-blue-400',
//               title: 'Twitter',
//               text: '@_mayur_075',
//             }].map((contact, index) => (
//               <motion.a
//                 key={index}
//                 href={contact.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow"
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 whileHover={{ boxShadow: '0px 0px 20px rgba(128, 0, 255, 0.6)', scale: 1.05 }}
//                 whileTap={tapEffect.tap}
//               >
//                 <motion.div className={`${contact.color} mr-4 flex-shrink-0`} whileHover={{ rotate: 15 }}>
//                   <contact.icon size={28} />
//                 </motion.div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                     {contact.title}
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//                     {contact.text}
//                   </p>
//                 </div>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// }


import React from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const tapEffect = {
  tap: {
    scale: 0.95,
    background:
      "linear-gradient(135deg, rgba(255, 0, 128, 0.25), rgba(0, 128, 255, 0.25))",
    boxShadow: "0px 0px 25px rgba(255, 0, 128, 0.8)",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900"
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 12px rgba(128, 0, 255, 0.9)",
          }}
        >
          Get In Touch
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                href: "mailto:mayurdhamgunde@gmail.com",
                icon: Mail,
                color: "text-blue-600",
                title: "Email",
                text: "mayurdhamgunde@gmail.com",
                bg: "bg-gray-800",
              },
              {
                href: "https://github.com/Mayurdhamgunde",
                icon: Github,
                color: "text-white",
                title: "GitHub",
                text: "github.com/Mayurdhamgunde",
                bg: "bg-gray-800",
              },
              {
                href: "https://linkedin.com/in/mayur-dhamgunde-94b9ab226/",
                icon: Linkedin,
                color: "text-blue-600",
                title: "LinkedIn",
                text: "Mayur Dhamgunde",
                bg: "bg-gray-800",
              },
              {
                href: "https://twitter.com/_mayur_075",
                icon: Twitter,
                color: "text-blue-400",
                title: "Twitter",
                text: "@_mayur_075",
                bg: "bg-gray-800",
              },
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center p-6 ${contact.bg} text-white rounded-lg shadow-md hover:shadow-xl transition-shadow`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  boxShadow: "0px 0px 20px rgba(128, 0, 255, 0.6)",
                  scale: 1.05,
                }}
                whileTap={tapEffect.tap}
              >
                <motion.div
                  className={`${contact.color} mr-4 flex-shrink-0`}
                  whileHover={{ rotate: 15 }}
                >
                  <contact.icon size={28} />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold">{contact.title}</h3>
                  <p className="leading-relaxed">{contact.text}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
