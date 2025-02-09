import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="mailto:mayurdhamgunde@gmail.com"
              className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Mail className="text-blue-600 mr-4" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">mayurdhamgunde@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/Mayurdhamgunde"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Github className="text-gray-900 dark:text-white mr-4" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">GitHub</h3>
                <p className="text-gray-600 dark:text-gray-300">github.com/Mayurdhamgunde</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/mayur-dhamgunde-94b9ab226/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Linkedin className="text-blue-600 mr-4" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
                <p className="text-gray-600 dark:text-gray-300">Mayur Dhamgunde</p>
              </div>
            </a>

            <a
              href="https://twitter.com/_mayur_075"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Twitter className="text-blue-400 mr-4" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Twitter</h3>
                <p className="text-gray-600 dark:text-gray-300">@_mayur_075</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}