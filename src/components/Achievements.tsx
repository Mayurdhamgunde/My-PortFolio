import React from 'react';
import { Trophy } from 'lucide-react';
import { achievements } from '../data';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Achievements & Activities
        </h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}