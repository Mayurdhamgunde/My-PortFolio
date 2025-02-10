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
    background: 'linear-gradient(135deg, rgba(255, 0, 128, 0.25), rgba(0, 128, 255, 0.25))',
    boxShadow: '0px 0px 25px rgba(255, 0, 128, 0.8)',
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

export default function Achievements() {
  return (
    <motion.section id="achievements" className="py-20 bg-gradient-to-b from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" initial="hidden" animate="visible">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500"
          whileHover={{ scale: 1.1, textShadow: '0px 0px 12px rgba(128, 0, 255, 0.9)' }}
        >
          Achievements & Activities
        </motion.h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className=" p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-600"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ boxShadow: '0px 0px 25px rgba(128, 0, 255, 0.6)', scale: 1.05, background: 'linear-gradient(135deg, rgba(128, 0, 255, 0.15), rgba(0, 128, 255, 0.15))' }}
              whileTap={tapEffect.tap}
            >
              <div className="flex items-start">
                <motion.div className="text-yellow-500 mr-4 flex-shrink-0" whileHover={{ rotate: 15 }}>
                  <Trophy size={32} />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
