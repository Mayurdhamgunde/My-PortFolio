import React from 'react';
import { Github, FileText, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Hi, I'm Mayur Dhamgunde
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Building Scalable Solutions with Web, AI, and Blockchain Technologies
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1XVJT-hBB6TVGUemGFR-7HB4KmwjQnuJp/view"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FileText className="mr-2" size={20} />
                View Resume
              </a>
              <a
                href="tel:9284675626"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                <Mail className="mr-2" size={20} />
                Contact Me
              </a>
              <a
                href="https://github.com/Mayurdhamgunde"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
              >
                <Github className="mr-2" size={20} />
                GitHub
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://github.com/Mayurdhamgunde/Mayurdhamgunde/blob/main/profile-pic%20(7).png?raw=true"
              alt="Mayur Dhamgunde"
              className="w-45 h-45 rounded-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}