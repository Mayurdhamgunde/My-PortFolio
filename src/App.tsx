import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        {/* Footer Component */}
        <footer className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 py-6 px-8 flex justify-center items-center shadow-md">
          <div className="text-center">
            <p className="text-sm md:text-base font-semibold tracking-wide glow-effect">
              &copy; {new Date().getFullYear()} Made with ❤️ by Mayur . All rights reserved.
            </p>
          </div>
        </footer>
      
      <style>{`
        .glow-effect {
          text-shadow: 0 0 8px rgba(0, 255, 255, 0.7), 0 0 16px rgba(0, 255, 255, 0.5);
          transition: text-shadow 0.3s ease;
        }
        footer:hover .glow-effect {
          text-shadow: 0 0 16px rgba(0, 255, 255, 0.9), 0 0 32px rgba(0, 255, 255, 0.7);
        }
      `}</style>
        
      </main>
    </div>
  );
}

export default App;