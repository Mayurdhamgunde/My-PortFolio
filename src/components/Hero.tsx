
import React from 'react';
import { Github, FileText, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70 } },
};

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="pt-32 pb-20 min-h-screen flex items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <motion.div
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 70 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Hi, I'm Mayur Dhamgunde
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Building Scalable Solutions with Web, AI, and Blockchain Technologies
            </p>
            <motion.div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0px 0px 20px rgba(59, 130, 246, 1)',
                  backgroundColor: '#2563eb',
                }}
                variants={itemVariants}
                href="https://drive.google.com/file/d/1lh4Ma6FB7NsqnNwkRDyw3hKndgQO4uff/view?usp=drive_link"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg transition-colors"
              >
                <FileText className="mr-2" size={20} />
                View Resume
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0px 0px 20px rgba(31, 41, 55, 1)',
                }}
                variants={itemVariants}
                href="tel:9284675626"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg transition-colors"
              >
                <Mail className="mr-2" size={20} />
                Contact Me
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0px 0px 20px rgba(107, 114, 128, 1)',
                  backgroundColor: '#374151',
                }}
                variants={itemVariants}
                href="https://github.com/Mayurdhamgunde"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg transition-colors"
              >
                <Github className="mr-2" size={20} />
                GitHub
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 70 }}
          >
            <motion.img
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: '0px 0px 25px rgba(0, 255, 255, 0.8)',
              }}
              src="https://github.com/Mayurdhamgunde/Mayurdhamgunde/blob/main/profile-pic%20(7).png?raw=true"
              alt="Mayur Dhamgunde"
              className="w-45 h-45 rounded-full object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
